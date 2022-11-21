import React, { useState } from 'react'
import FormInput from '../../UI/Form/FormInput/FormInput'
import SettingsButton from '../SettingsButton/SettingsButton'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import './PasswordForm.scss'

const PasswordForm = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    reNewPassword: '',
  })

  const onSubmit = e => {
    e.preventDefault()

    if (passwords.newPassword !== passwords.reNewPassword) {
      // тут вывести ошибку
    }

    submitFormHandler(e)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="password-block">
        <h3 className="password-block__title">Заполните данные, чтобы изменить пароль</h3>
        <div className="password-block__form">
          <div>
            <FormInput
              className="password-block__form-input"
              type="password"
              onChange={e => inputChangeHandler(e, setPasswords)}
              name="oldPassword"
              placeholder="Старый пароль"
              value={passwords.oldPassword}
              required
            />
          </div>
          <div>
            <FormInput
              className="password-block__form-input"
              type="password"
              onChange={e => inputChangeHandler(e, setPasswords)}
              name="newPassword"
              placeholder="Новый пароль"
              value={passwords.newPassword}
              required
            />
          </div>
          <div>
            <FormInput
              className="password-block__form-input password-block__form-input--last"
              type="password"
              onChange={e => inputChangeHandler(e, setPasswords)}
              name="reNewPassword"
              placeholder="Повторите новый пароль"
              value={passwords.reNewPassword}
              required
            />
          </div>
        </div>
      </div>
      <SettingsButton />
    </form>
  )
}

export default PasswordForm
