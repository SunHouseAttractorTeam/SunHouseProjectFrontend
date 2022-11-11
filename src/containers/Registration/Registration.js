import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'
import { registrationRequest } from '../../store/actions/usersActions'

const Registration = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.users.registerError)
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
        error={error}
      />
    </>
  )
}

export default Registration
