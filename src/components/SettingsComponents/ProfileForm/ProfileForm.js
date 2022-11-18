import React, { useState } from 'react'
import PersonalForm from './PersonalForm/PersonalForm'
import LocationForm from './LocationForm/LocationForm'
import './ProfileForm.scss'
import ImageForm from './ImageForm/ImageForm'
import MainButton from '../../UI/MainButton/MainButton'

const ProfileForm = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    phone: '',
    country: '',
    city: '',
  })

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
        <LocationForm onChangeData={onChangeData} city={state.city} country={state.country} />
        <ImageForm />

        <MainButton className="profile-form__button" text="Сохранить изменения" />
      </div>
    </form>
  )
}

export default ProfileForm
