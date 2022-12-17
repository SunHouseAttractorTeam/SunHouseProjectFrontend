import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { inputChangeHandler } from '../../components/UI/Form/Handlers/Handlers'
import { resetPasswordRequest } from '../../store/actions/usersActions'

const ResetPasswordPage = ({ match }) => {
  const dispatch = useDispatch()
  const { hash } = match.params

  const [state, setState] = useState({
    newPassword: '',
    confirmPassword: '',
  })

  const formSubmitHandler = e => {
    e.preventDefault()
    if (state.newPassword !== state.confirmPassword) {
      toast.error('Пароль не соответствует критериям')
    } else {
      dispatch(resetPasswordRequest(state, hash))
      setState({
        newPassword: '',
        confirmPassword: '',
      })
    }
  }

  return (
    <>
      <form onSubmit={e => formSubmitHandler(e)}>
        <input
          type="text"
          name="newPassword"
          onChange={e => inputChangeHandler(e, setState)}
          value={state.newPassword}
        />
        <input
          type="text"
          name="confirmPassword"
          onChange={e => inputChangeHandler(e, setState)}
          value={state.confirmPassword}
        />
        <button type="submit">Далее</button>
      </form>
    </>
  )
}

export default ResetPasswordPage
