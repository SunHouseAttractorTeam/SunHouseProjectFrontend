import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import './scss/style.scss'
import Login from './containers/Login/Login'
import MyProfile from './containers/MyProfile/MyProfile'
import CookieProvider from './components/UI/CookieProvider/CookieProvider'
import Course from './containers/Course/Course'
import VerifyPage from './containers/VerifyPage/VerifyPage'

const App = () => (
  <CookieProvider>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={MyProfile} />
      <Route path="/course/:id" component={Course} />
      <Route path="/confirm/:confirmationCode" component={VerifyPage} />
    </Switch>
  </CookieProvider>
)

export default App
