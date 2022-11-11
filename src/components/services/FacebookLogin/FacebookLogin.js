import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { facebookAppId } from '../../../config'
import { facebookLoginRequest } from '../../../store/actions/usersActions'
import fbIcon from '../../../assets/icons/facebookicon.svg'
import './FacebookLogin.scss'

const FacebookLogin = () => {
  const dispatch = useDispatch()

  const facebookResponse = response => dispatch(facebookLoginRequest(response))

  return (
    <LoginSocialFacebook
      isOnlyGetToken
      appId={facebookAppId}
      onResolve={({ data }) => {
        facebookResponse(data)
      }}
      onReject={err => {
        console.log(err)
      }}
    >
      <img alt="fb" src={fbIcon} className="facebook" />
    </LoginSocialFacebook>
  )
}

export default FacebookLogin
