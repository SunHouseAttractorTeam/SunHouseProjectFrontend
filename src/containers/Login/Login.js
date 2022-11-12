import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { loginUserRequest } from '../../store/actions/usersActions'
import './Login.scss'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'

const Login = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.users.loginError)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  return (
    <>
      <FormComponent
        typeForm="Войти"
        submit={e => submitFormHandler(e, dispatch(loginUserRequest({ ...user })))}
        onChange={e => inputChangeHandler(e, setUser)}
        inputName={['email', 'password']}
        placeholderName={['Электронная почта', 'Пароль']}
        inputType={['text', 'password']}
        error={error}
      />
    </>
    // <div className="main">
    //   <header className="header">
    //     <div className="container header__container">
    //       <Logo className="header_logo" />
    //     </div>
    //   </header>
    //   <div className="container">
    //     <div className="loginRegisterForm">
    //       <form onSubmit={submitFormHandler} className="form">
    //         <h4 className="form_title">Войдите свой профиль</h4>
    //         <FormInput
    //           required
    //           placeholder="Электронный адрес"
    //           label="Email"
    //           name="email"
    //           value={user.email}
    //           onChange={inputChangeHandler}
    //           className="form_input"
    //         />
    //         <FormInput
    //           type="password"
    //           placeholder="Пароль"
    //           required
    //           label="Password"
    //           name="password"
    //           value={user.password}
    //           onChange={inputChangeHandler}
    //           className="form_input"
    //         />
    //         <a href="#" className="form-login_forgotPass">
    //           Забыли пароль?
    //         </a>
    //         <button type="submit" className="form-login_btn">
    //           Войти
    //         </button>
    //         <span className="form_text">или войдите с помощью</span>
    //         <div className="form_socialLinks">
    //           <FacebookLogin />
    //           <VkontakteLogin />
    //           <GoogleLogin />
    //           <AppleLogin />
    //         </div>
    //         <p className="form_loginLink">
    //           Еще нет профиля?{' '}
    //           <span>
    //             <Link to="/registration" className="form_loginLink_span">
    //               Зарегистрируйтесь
    //             </Link>
    //           </span>
    //         </p>
    //       </form>
    //       <div className="formBlock">
    //         <p className="formBlock_content">
    //           Авторизуйтесь, чтобы начать <span className="formBlock_word">учиться</span>
    //         </p>
    //         <img src={VectorImage} alt="Vector" />
    //       </div>
    //     </div>
    //   </div>
    //   <footer className="footer_login">
    //     <div className="container">
    //       <div className="footer_bottom_loginRegisterForm">
    //         <p>«Eduspace» © Все права защищены / 2022</p>
    //         <FooterLink className="footer_link" href="#">
    //           Политика конфиденциальности
    //         </FooterLink>
    //         <FooterLink className="footer_link" href="#">
    //           Публичная оферта
    //         </FooterLink>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  )
}

export default Login
