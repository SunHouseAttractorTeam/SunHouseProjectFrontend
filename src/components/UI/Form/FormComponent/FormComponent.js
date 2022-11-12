import React from 'react'
import FormInput from '../FormInput/FormInput'
import FacebookLogin from '../../../services/FacebookLogin/FacebookLogin'
import GoogleLogin from '../../../services/GoogleLogin/GoogleLogin'
import AppleLogin from '../../../services/AppleLogin/AppleLogin'
import VkontakteLogin from '../../../services/VkontakteLogin/VkontakteLogin'
import { getFieldError } from '../Handlers/Handlers'
import './FormComponent.scss'

const FormComponent = ({ inputName, inputType, submit, value, onChange, typeForm, placeholderName, error }) => {
  let form = null

  if (inputName) {
    form = inputName.map((name, index) => (
      <FormInput
        key={name[index]}
        type={inputType[index]}
        required
        placeholder={placeholderName[index]}
        name={name}
        value={value}
        onChange={onChange}
        error={getFieldError(error, name)}
        className="form_input"
      />
    ))
  }
  return (
    <>
      <form onSubmit={submit} className="form">
        {form}
        <button type="submit" className="form_btn">
          {typeForm}
        </button>
        <span className="form_text">или регистрация с помощью</span>
        <div className="form_socialLinks">
          <FacebookLogin />
          <VkontakteLogin />
          <GoogleLogin />
          <AppleLogin />
        </div>
      </form>
    </>
  )
}

export default FormComponent
