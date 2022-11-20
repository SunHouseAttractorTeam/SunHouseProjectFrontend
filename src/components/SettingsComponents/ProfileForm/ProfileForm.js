import React, { useState } from 'react'
import PersonalForm from './PersonalForm/PersonalForm'
import LocationForm from './LocationForm/LocationForm'
import ImageForm from './ImageForm/ImageForm'
import SettingsButton from '../SettingsButton/SettingsButton'
import './ProfileForm.scss'
import { inputChangeHandler } from '../../UI/Form/Handlers/Handlers'

const ProfileForm = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    phone: '',
    country: '',
    city: '',
  })

  const onChangeCountry = country => {
    setState(prev => ({
      ...prev,
      country: country.label,
    }))
  }

  const onChangeData = e => {
    inputChangeHandler(e, setState)
  }

  return (
    <form>
      <div className="profile-form">
        <PersonalForm onChangeData={onChangeData} phone={state.phone} email={state.email} username={state.username} />
        <LocationForm onChangeData={onChangeData} onChangeCountry={onChangeCountry} city={state.city} />
        <ImageForm />
      </div>
      <SettingsButton />
    </form>
  )
}

export default ProfileForm
