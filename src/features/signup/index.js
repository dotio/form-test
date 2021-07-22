import React, {useState} from 'react'
import {Input} from '../../styles/ui/input/input'
import {Button} from '../../styles/ui/button/button'
import {isEmail, nonEmpty} from '../../helpers/validator'
import {useAuth} from '../../context';
import {Link, useHistory} from 'react-router-dom'
import './singup.scss'

export const Signup = () => {
  const history = useHistory()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const handleChange = (field, value) => {
    setForm({...form, [field]: value})
  }

  const isFormValid = () => {
    return nonEmpty(form.password) && isEmail(form.email) && nonEmpty(form.password2)
  }

  const submitForm = async () => {
    if(form.password !== form.password2){
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    promises.push(signup(form.email, form.password))

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={'login_wrapper'}>
      <div className="login_form">
        <h1>Sign Up</h1>
        <div className="inputs_wrapper">
          <Input
            htmlFor={'email'}
            label={'Email *'}
            type='email'
            name='email'
            required
            value={form.email}
            placeholder={'user@yahoo.com'}
            onChange={e => handleChange('email', e.currentTarget.value)}
          />
          <Input
            htmlFor={'password'}
            label={'Password *'}
            type='password'
            name='password'
            required
            value={form.password}
            isError={error}
            errorText={error}
            placeholder={'******'}
            onChange={e => handleChange('password', e.currentTarget.value)}
          />
          <Input
            htmlFor={'password'}
            label={'Confirm Password *'}
            type='password'
            name='password'
            required
            value={form.password2}
            isError={error}
            errorText={error}
            placeholder={'******'}
            onChange={e => handleChange('password2', e.currentTarget.value)}
          />
        </div>
        <div className="login_form_bottom">
          <Button disabled={!loading && !isFormValid()} onClick={submitForm} wide>Sign Up</Button>
          <div className="login_text_wrapper">
            <p>Already have an account? Go to</p>  <Link className={'link'} to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}