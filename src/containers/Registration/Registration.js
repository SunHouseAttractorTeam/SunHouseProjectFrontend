import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { registrationRequest } from '../../store/actions/usersActions'

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
    <>
      <FormComponent
        typeForm="Зарегистрироваться"
        submit={submitFormHandler}
        onChange={inputChangeHandler}
        inputName={['username', 'email', 'password']}
        placeholderName={['Имя', 'Электронная почта', 'Создайте пароль']}
        inputType={['text', 'text', 'password']}
      />
    </>
  )
}

export default Registration
