import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'
import { forgotPasswordRequest } from '../../store/actions/usersActions'

const ForgotPasswordPage = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: '',
  })

  return (
    <>
      <form onSubmit={e => submitFormHandler(e, dispatch(forgotPasswordRequest({ ...state })))}>
        <input name="email" type="email" onChange={e => inputChangeHandler(e, setState)} />
        <button type="submit">Сбросить</button>
      </form>
    </>
  )
}

export default ForgotPasswordPage
