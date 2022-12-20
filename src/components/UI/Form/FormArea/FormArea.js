import React from 'react'

const FormArea = ({ name, value, onChange, placeholder, className, required, error, cols, rows }) => (
  <>
    <textarea
      cols={cols}
      rows={rows}
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

export default FormArea
