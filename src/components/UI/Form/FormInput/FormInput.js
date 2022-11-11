import React from 'react'
import PropTypes from 'prop-types'
import './FormInput.scss'

const FormInput = ({ type, name, value, onChange, placeholder, className, required, error }) => (
  <>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`InputStyle ${className}`}
      required={required}
    />
    {error ? <span className="helper">{error}</span> : null}
  </>
)

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
}

export default FormInput
