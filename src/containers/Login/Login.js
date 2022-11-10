import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../../components/UI/Form/FormComponent/FormComponent'
import { loginUserRequest } from '../../store/actions/usersActions'

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const submitFormHandler = async e => {
    e.preventDefault()
    await dispatch(loginUserRequest({ ...user }))
  }

  return (
    <>
      <FormComponent
        typeForm="Войти"
        submit={submitFormHandler}
        onChange={inputChangeHandler}
        inputName={['email', 'password']}
        placeholderName={['Электронная почта', 'Пароль']}
        inputType={['text', 'password']}
      />
    </>
  )
}

export default Login
