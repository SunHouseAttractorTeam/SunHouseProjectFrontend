import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'
import SettingsNav from '../../components/SettingsComponents/SettingsNav/SettingsNav'
import ProfileForm from '../../components/SettingsComponents/ProfileForm/ProfileForm'
import PasswordForm from '../../components/SettingsComponents/PasswordForm/PasswordForm'
import './Settings.scss'

const Settings = () => (
  <div className="settings">
    <Title className="settings__title">Настройки профиля</Title>
    <div className="settings__block">
      <SettingsNav />
      <Switch>
        <Route path="/user/settings/personal_data" component={ProfileForm} />
        <Route path="/user/settings/change_password" component={PasswordForm} />
      </Switch>
    </div>
  </div>
)

export default Settings
