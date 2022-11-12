import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'
import { registrationRequest } from '../../store/actions/usersActions'
import './Registration.scss'
import Logo from '../../components/UI/Logo/Logo'

const Registration = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.users.registerError)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  return (
    <div className="main">
      <header className="header">
        <div className="container header__container">
          <Logo className="header_logo" />
        </div>
      </header>
      <div className="container">
        <div className="loginRegisterForm">
          <FormComponent
            typeForm="Зарегистрироваться"
            submit={e => submitFormHandler(e, dispatch(registrationRequest({ ...user })))}
            onChange={e => inputChangeHandler(e, setUser)}
            inputName={['username', 'email', 'password']}
            placeholderName={['Имя', 'Электронная почта', 'Создайте пароль']}
            inputType={['text', 'text', 'password']}
            error={error}
          />
        </div>
      </div>
    </div>
    // <div className="main">
    //   <header className="header">
    //     <div className="container header__container">
    //       <Logo className="header_logo" />
    //     </div>
    //   </header>
    //   <div className="container">
    //     <div className="loginRegisterForm">
    //       <form onSubmit={submitFormHandler} className="form">
    //         <h4 className="form_title">Создайте свой профиль</h4>
    //         <FormInput
    //           required
    //           placeholder="Username"
    //           name="username"
    //           value={user.username}
    //           onChange={inputChangeHandler}
    //           className="form_input"
    //         />
    //         <FormInput
    //           required
    //           placeholder="Email"
    //           name="email"
    //           value={user.email}
    //           onChange={inputChangeHandler}
    //           className="form_input"
    //         />
    //         <FormInput
    //           type="password"
    //           required
    //           placeholder="Password"
    //           name="password"
    //           value={user.password}
    //           onChange={inputChangeHandler}
    //           className="form_input"
    //         />
    //         <button type="submit" className="form_btn">
    //           Зарегестрироваться
    //         </button>
    //         <span className="form_text">или регистрация с помощью</span>
    //         <div className="form_socialLinks">
    //           <FacebookLogin />
    //           <VkontakteLogin />
    //           <GoogleLogin />
    //           <AppleLogin />
    //         </div>
    //         <p className="form_loginLink">
    //           Уже есть профиль?{' '}
    //           <span>
    //             <Link to="/login" className="form_loginLink_span">
    //               Войдите
    //             </Link>
    //           </span>
    //         </p>
    //       </form>
    //       <div className="formBlock">
    //         <p className="formBlock_content">Добро пожаловать в Eduspace</p>
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

export default Registration
