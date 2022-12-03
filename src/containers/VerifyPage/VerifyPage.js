import React from 'react'
import { Link } from 'react-router-dom'
import { verifyUserSaga } from '../../store/sagas/usersSagas'
import './VerifyPage.css'

const VerifyPage = props => {
  if (props.match.path === '/confirm/:confirmationCode') {
    verifyUserSaga(props.match.params.confirmationCode)
  }
  return (
    <div className="container">
      <header className="verify-block">
        <h3>Account confirmed!</h3>
      </header>
      <Link to="/login">Please Login</Link>
    </div>
  )
}

export default VerifyPage
