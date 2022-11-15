import React from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { loginUserRequest } from '../../../store/actions/usersActions'

const CookieProvider = ({ children }) => {
  const dispatch = useDispatch()

  if (Cookies.get('jwt')) {
    dispatch(loginUserRequest())
  }

  return <>{children}</>
}

export default CookieProvider
