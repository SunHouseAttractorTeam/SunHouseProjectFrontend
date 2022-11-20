import React, { useState } from 'react'
import PersonalForm from './PersonalForm/PersonalForm'
import LocationForm from './LocationForm/LocationForm'
import ImageForm from './ImageForm/ImageForm'
import MainButton from '../../UI/MainButton/MainButton'
import './ProfileForm.scss'

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
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form>
      <div className="profile-form">
        <PersonalForm onChangeData={onChangeData} phone={state.phone} email={state.email} username={state.username} />
        <LocationForm onChangeData={onChangeData} onChangeCountry={onChangeCountry} city={state.city} />
        <ImageForm />
      </div>
      <MainButton className="profile-form__button" text="Сохранить изменения" />
    </form>
  )
}

export default ProfileForm
