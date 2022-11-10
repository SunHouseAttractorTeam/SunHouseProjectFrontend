import React from 'react'
import './SelectionHelpForm.scss'
import FormInput from '../UI/Form/FormInput/FormInput'
import MainButton from '../UI/MainButton/MainButton'

const SelectionHelpForm = () => (
  <div className="selection-help-form">
    <div className="container help-form">
      <div className="help-form_left">
        <h1 className="help-form_left_title">
          Разработаем для вас курс
          <span className="help-form_left_title_exclamation-point">&#x21;</span>
        </h1>
        <p className="help-form_left_info">
          Полный цикл разработки курса под ключ для вас. Разработаем для вас сценарий, подготовим видеоматериалы, а
          также подготовим тесты для вашего курса и разместим готовый курс у нас на платформе
        </p>
      </div>
      <div className="help-form_right">
        <form>
          <div className="help-form_right_style">
            <FormInput className="help-form_input InputGrey" type="text" name="name" placeholder="Имя" required />
            <FormInput
              className="help-form_input InputGrey"
              type="text"
              name="phoneNumber"
              placeholder="Телефон"
              required
            />
            <FormInput className="help-form_input InputGrey" type="text" name="email" placeholder="Email" required />
            <MainButton text="Отправить" className="help-form_button GreenButton" />
          </div>
        </form>
        <span className="help-form_right_info">
          Отправляя эту форму, Вы соглашаетесь с правилами политики обработки персональных данных
        </span>
      </div>
    </div>
  </div>
)

export default SelectionHelpForm
