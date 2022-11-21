import React from 'react'
import FormInput from '../../../UI/Form/FormInput/FormInput'
import ProfileDescription from '../ProfileDescription/ProfileDescription'
import './PersonalForm.scss'

const PersonalForm = ({ onChangeData, username, email, phone }) => (
  <div className="personal-block">
    <ProfileDescription title="Заполните личные данные" text="Разнообразный и богатый опыт сложившаяся структура" />

    <div className="personal-block__form">
      <div>
        <FormInput
          className="personal-block__form-input"
          onChange={onChangeData}
          name="username"
          placeholder="ФИО"
          value={username}
          required
        />
      </div>
      <div>
        <FormInput
          className="personal-block__form-input"
          onChange={onChangeData}
          name="unknown"
          placeholder="Отобра"
          value=""
        />
      </div>
      <div>
        <FormInput
          className="personal-block__form-input"
          onChange={onChangeData}
          name="email"
          placeholder="Email"
          value={email}
          type="email"
          required
        />
      </div>
      <div>
        <FormInput
          className="personal-block__form-input personal-block__form-input--last"
          onChange={onChangeData}
          name="phone"
          placeholder="Телефон"
          value={phone}
          type="tel"
        />
      </div>
    </div>
  </div>
)

export default PersonalForm
