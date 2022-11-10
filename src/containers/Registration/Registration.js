import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../../components/UI/Form/FormInput/FormInput'
import { registrationRequest } from '../../store/actions/usersActions'
import FacebookLogin from '../../components/services/FacebookLogin/FacebookLogin'
import GoogleLogin from '../../components/services/GoogleLogin/GoogleLogin'
import AppleLogin from '../../components/services/AppleLogin/AppleLogin'
import VkontakteLogin from '../../components/services/VkontakteLogin/VkontakteLogin'

const Registration = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const submitFormHandler = e => {
    e.preventDefault()
    dispatch(registrationRequest(user))
  }

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <FormInput
          required
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={inputChangeHandler}
        />
        <FormInput required placeholder="Email" name="email" value={user.email} onChange={inputChangeHandler} />
        <FormInput
          type="password"
          required
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={inputChangeHandler}
        />
        <button type="submit">Sign Up</button>
        <FacebookLogin />
        <GoogleLogin />
        <AppleLogin />
        <VkontakteLogin />
      </form>
    </>
  )
}

export default Registration
