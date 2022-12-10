import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../FormInput/FormInput'
import FacebookLogin from '../../../services/FacebookLogin/FacebookLogin'
import GoogleLogin from '../../../services/GoogleLogin/GoogleLogin'
import VkontakteLogin from '../../../services/VkontakteLogin/VkontakteLogin'
import { getFieldError } from '../Handlers/Handlers'
import './FormComponent.scss'

const FormComponent = ({
  title,
  inputName,
  inputType,
  submit,
  value,
  onChange,
  typeForm,
  placeholderName,
  error,
  linkToPage,
  endPoint,
}) => {
  let form = null

  if (inputName) {
    form = inputName.map((name, index) => (
      <FormInput
        key={name[index]}
        type={inputType[index]}
        required
        placeholder={placeholderName[index]}
        name={name}
        value={value[name]}
        onChange={onChange}
        error={getFieldError(error, name)}
        className="form_input"
      />
    ))
  }
  return (
    <>
      <form onSubmit={submit} className="form">
        <h4 className="form_title">{title}</h4>
        {form}
        <button type="submit" className="form_btn">
          {typeForm}
        </button>
        <span className="form_text">или регистрация с помощью</span>
        <div className="form_socialLinks">
          <FacebookLogin />
          <VkontakteLogin />
          <GoogleLogin />
        </div>
        <p className="form_loginLink">
          Уже есть профиль?{' '}
          <span>
            <Link to={endPoint} className="form_loginLink_span">
              {linkToPage}
            </Link>
          </span>
        </p>
      </form>
    </>
  )
}

export default FormComponent
