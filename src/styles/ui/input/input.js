import React from 'react'
import PropTypes from 'prop-types'
import './input.scss'

export const Input = ({label, type, name, required, value, onChange, placeholder, isError, errorText, htmlFor}) => {
  return (
    <div className="form_group">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {isError !== '' && <span className={'error'}>{errorText}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  isError: PropTypes.string,
  htmlFor: PropTypes.string
};

Input.defaultProps = {
  required: true
};
