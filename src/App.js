import React from 'react'
import Cookies from 'js-cookie'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import Login from './containers/Login/Login'
import { ProtectedRoute } from './utils/utils'
import CookieProvider from './components/UI/CookieProvider/CookieProvider'
import Course from './containers/Course/Course'
import MyProfile from './containers/MyProfile/MyProfile'
import VerifyPage from './containers/VerifyPage/VerifyPage'
import ForgotPasswordPage from './containers/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from './containers/ResetPasswordPage/ResetPasswordPage'
import './scss/style.scss'

const App = () => (
  <CookieProvider>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <ProtectedRoute isAllowed={Cookies.get('jwt')} redirectTo="/login" path="/user" component={MyProfile} />
      <ProtectedRoute isAllowed={Cookies.get('jwt')} redirectTo="/login" path="/course/:id" component={Course} />
      <Route path="/confirm/:confirmationCode" component={VerifyPage} />
    </Switch>
  </CookieProvider>
)

export default App
