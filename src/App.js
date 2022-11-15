import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import './scss/style.scss'
import Login from './containers/Login/Login'
import MyProfile from './containers/MyProfile/MyProfile'

const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={MyProfile} />
    </Switch>
  </>
)

export default App
