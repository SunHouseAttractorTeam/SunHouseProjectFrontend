import React from 'react'
import VkLogin from 'react-vkontakte-login'
import { useDispatch } from 'react-redux'
import { vkLoginRequest } from '../../../store/actions/usersActions'
import vkicon from '../../../assets/icons/vkicon.svg'
import './VkontakteLogin.scss'
import { VKAppId } from '../../../config'

const VkontakteLogin = () => {
  const dispatch = useDispatch()

  const responseVk = response => dispatch(vkLoginRequest(response))

  return (
    <VkLogin
      apiId={VKAppId}
      callback={responseVk}
      render={renderProps => <img alt="vkicon" src={vkicon} onClick={renderProps.onClick} className="vkontakte" />}
    />
  )
}

export default VkontakteLogin
