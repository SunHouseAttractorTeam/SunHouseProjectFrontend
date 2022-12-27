import React from 'react'
import PropTypes from 'prop-types'
import './FormInput.scss'

const FormInput = ({ type, name, value, onChange, placeholder, className, error }) => (
  <>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={!error ? `InputStyle ${className}` : 'InputStyle_error'}
    />
    <div className="helper">{error ? <span>{error}</span> : null}</div>
  </>
)

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

export default FormInput
