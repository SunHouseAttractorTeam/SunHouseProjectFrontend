import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FormInput from '../../components/UI/Form/FormInput/FormInput'
import { loginUserRequest } from '../../store/actions/usersActions'
import Logo from '../../components/UI/Logo/Logo'
import VectorImage from '../../assets/images/Vector-2.png'
import FooterLink from '../../components/Footer/FooterLink/FooterLink'
import FacebookLogin from '../../components/services/FacebookLogin/FacebookLogin'
import VkontakteLogin from '../../components/services/VkontakteLogin/VkontakteLogin'
import GoogleLogin from '../../components/services/GoogleLogin/GoogleLogin'
import AppleLogin from '../../components/services/AppleLogin/AppleLogin'
import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const submitFormHandler = async e => {
    e.preventDefault()
    await dispatch(loginUserRequest({ ...user }))
  }

  return (
    <div className="main">
      <header className="header">
        <div className="container header__container">
          <Logo className="header_logo" />
        </div>
      </header>
      <div className="container">
        <div className="loginRegisterForm">
          <form onSubmit={submitFormHandler} className="form">
            <h4 className="form_title">Войдите свой профиль</h4>
            <FormInput
              required
              placeholder="Электронный адрес"
              label="Email"
              name="email"
              value={user.email}
              onChange={inputChangeHandler}
              className="form_input"
            />
            <FormInput
              type="password"
              placeholder="Пароль"
              required
              label="Password"
              name="password"
              value={user.password}
              onChange={inputChangeHandler}
              className="form_input"
            />
            <span className="form-login_forgotPass">Забыли пароль?</span>
            <button className="form-login_btn">Войти</button>
            <span className="form_text">или войдите с помощью</span>
            <div className="form_socialLinks">
              <FacebookLogin />
              <VkontakteLogin />
              <GoogleLogin />
              <AppleLogin />
            </div>
            <p className="form_loginLink">
              Еще нет профиля?{' '}
              <span>
                <Link to="/registration" className="form_loginLink_span">
                  Зарегистрируйтесь
                </Link>
              </span>
            </p>
          </form>
          <div className="formBlock">
            <p className="formBlock_content">
              Авторизуйтесь, чтобы начать <span className="formBlock_word">учиться</span>
            </p>
            <img src={VectorImage} alt="Vector" />
          </div>
        </div>
      </div>
      <footer className="footer_login">
        <div className="container">
          <div className="footer_bottom_loginRegisterForm">
            <p>«Eduspace» © Все права защищены / 2022</p>
            <FooterLink className="footer_link" href="#">
              Политика конфиденциальности
            </FooterLink>
            <FooterLink className="footer_link" href="#">
              Публичная оферта
            </FooterLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
