import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../../components/UI/Form/FormInput/FormInput'
import { registrationRequest } from '../../store/actions/usersActions'
import FacebookLogin from '../../components/services/FacebookLogin/FacebookLogin'
import GoogleLogin from '../../components/services/GoogleLogin/GoogleLogin'
import AppleLogin from '../../components/services/AppleLogin/AppleLogin'
import VkontakteLogin from '../../components/services/VkontakteLogin/VkontakteLogin'
import Logo from '../../components/UI/Logo/Logo'
import FooterLink from '../../components/Footer/FooterLink/FooterLink'
import VectorImage from '../../assets/images/Vector-2.png'
import './Registration.scss'

const Registration = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const submitFormHandler = e => {
    e.preventDefault()
    dispatch(registrationRequest(user))
  }

  return (
    <div className="main">
      <header className="header">
        <div className="container header__container">
          <Logo className="header_logo" />
        </div>
      </header>
      <div className={`${'container'} ${'registration'}`}>
        <form onSubmit={submitFormHandler} className="form">
          <FormInput
            required
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={inputChangeHandler}
          />
          <FormInput required placeholder="Email" name="email" value={user.email} onChange={inputChangeHandler} />
          <FormInput
            type="password"
            required
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={inputChangeHandler}
          />
          <button type="submit">Sign Up</button>
          <FacebookLogin />
          <GoogleLogin />
          <AppleLogin />
          <VkontakteLogin />
        </form>
        <div className="register-block">
          <p className="register-block_content">
            Авторизуйтесь, чтоб начать <span className="register-block_word">учиться</span>
          </p>
          <img src={VectorImage} alt="Vector" />
        </div>
      </div>
      <footer className="footer_login">
        <div className="container">
          <div className="footer_bottom_inner">
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

export default Registration
