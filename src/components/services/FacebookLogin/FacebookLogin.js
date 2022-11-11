import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { facebookLoginRequest } from '../../../store/actions/usersActions'
import fbIcon from '../../../assets/icons/facebookicon.svg'

const FacebookLogin = () => {
  const dispatch = useDispatch()

  const facebookResponse = response => dispatch(facebookLoginRequest(response))

  return (
    <LoginSocialFacebook
      isOnlyGetToken
      appId={process.env.facebookAppId}
      onResolve={({ provider, data }) => {
        facebookResponse(data)
      }}
      onReject={err => {
        console.log(err)
      }}
    >
      <img alt="fb" src={fbIcon} />
    </LoginSocialFacebook>
  )
}

export default FacebookLogin
