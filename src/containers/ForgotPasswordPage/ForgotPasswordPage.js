import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgotPasswordSaga } from '../../store/sagas/usersSagas'
import { inputChangeHandler } from '../../components/UI/Form/Handlers/Handlers'

const ForgotPasswordPage = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: '',
  })

  const formSubmitHandler = e => {
    e.preventDefault()
    dispatch(forgotPasswordSaga({ ...state }))
    setState({
      email: '',
    })
  }

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input type="email" name="email" onChange={e => inputChangeHandler(e, setState)} value={state.email} />
        <button type="submit">Сбросить</button>
      </form>
    </>
  )
}

export default ForgotPasswordPage
