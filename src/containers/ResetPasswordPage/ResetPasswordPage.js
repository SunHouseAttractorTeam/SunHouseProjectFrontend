import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../components/UI/Form/Handlers/Handlers'
import { resetPasswordRequest } from '../../store/actions/usersActions'

const ResetPasswordPage = ({ match }) => {
  const dispatch = useDispatch()
  const { hash } = match.params

  const [state, setState] = useState({
    newPassword: '',
    confirmPassword: '',
  })

  return (
    <>
      <form onSubmit={e => submitFormHandler(e, dispatch(resetPasswordRequest({ ...state, hash })))}>
        <input
          name="newPassword"
          type="password"
          onChange={e => inputChangeHandler(e, setState)}
          value={state.newPassword}
        />
        <input
          name="confirmPassword"
          type="password"
          onChange={e => inputChangeHandler(e, setState)}
          value={state.confirmPassword}
        />
        <button type="submit">Сбросить</button>
      </form>
    </>
  )
}

export default ResetPasswordPage
