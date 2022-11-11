import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { googleLoginRequest } from '../../../store/actions/usersActions'
import { googleAppId } from '../../../config'
import googleicon from '../../../assets/icons/google.svg'
import './GoogleLogin.scss'

const GoogleLogin = () => {
  const dispatch = useDispatch()

  const googleResponse = response => dispatch(googleLoginRequest(response))

  return (
    <LoginSocialGoogle
      isOnlyGetToken
      client_id={googleAppId}
      onResolve={({ data }) => {
        googleResponse(data)
      }}
      onReject={err => {
        console.log(err)
      }}
    >
      <img alt="google" src={googleicon} className="google" />
    </LoginSocialGoogle>
  )
}

export default GoogleLogin
