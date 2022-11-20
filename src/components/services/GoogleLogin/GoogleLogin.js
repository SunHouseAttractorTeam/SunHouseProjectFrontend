import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { googleLoginRequest } from '../../../store/actions/usersActions'
import googleicon from '../../../assets/icons/google.svg'
import './GoogleLogin.scss'
import { GoogleAppId } from '../../../config'

const GoogleLogin = () => {
  const dispatch = useDispatch()

  const googleResponse = response => dispatch(googleLoginRequest(response))

  return (
    <LoginSocialGoogle
      client_id={GoogleAppId}
      scope="openid profile email"
      redirect_uri="http://localhost:3000"
      discoveryDocs="claims_supported"
      access_type="offline"
      typeResponse="idToken"
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
