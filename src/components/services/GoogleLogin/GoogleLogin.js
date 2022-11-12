import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { googleLoginRequest } from '../../../store/actions/usersActions'
import googleicon from '../../../assets/icons/google.svg'
import './GoogleLogin.scss'

const GoogleLogin = () => {
  const dispatch = useDispatch()

  const googleResponse = response => dispatch(googleLoginRequest(response))

  return (
    <LoginSocialGoogle
      isOnlyGetToken
      client_id={process.env.googleAppId}
      onResolve={({ provider, data }) => {
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
