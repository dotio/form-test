import React from 'react'
import {Button} from '../../styles/ui/button/button'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../context'
import './home.scss'

export const HomeComponent = () => {
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    await logout()
    await history.push('/login')
  }

  return (
    <div className={'home_wrapper'}>
      <div className="container">
        <div className="home_content">
          <h2>{`Hello, ${currentUser.email}`}</h2>
          <div className={'buttons_wrapper'}>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}