import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'
import { registrationRequest } from '../../store/actions/usersActions'

const Registration = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  return (
    <>
      <FormComponent
        typeForm="Зарегистрироваться"
        submit={e => submitFormHandler(e, dispatch(registrationRequest({ ...user })))}
        onChange={e => inputChangeHandler(e, setUser)}
        inputName={['username', 'email', 'password']}
        placeholderName={['Имя', 'Электронная почта', 'Создайте пароль']}
        inputType={['text', 'text', 'password']}
      />
    </>
  )
}

export default Registration
