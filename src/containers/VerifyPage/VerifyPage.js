import React from 'react'
import { Link } from 'react-router-dom'
import { verifyUserSaga } from '../../store/sagas/usersSagas'
import './VerifyPage.scss'

const VerifyPage = props => {
  if (props.match.path === '/confirm/:confirmationCode') {
    verifyUserSaga(props.match.params.confirmationCode)
  }
  return (
    <div className="container">
      <div className="verify-block">
        <h3>Аккаунт подтвержден, можете зактрыть данную вкладку</h3>
        <Link to="/login" className="verify-block__link">
          Нажмите сюда
        </Link>
      </div>
    </div>
  )
}

export default VerifyPage
