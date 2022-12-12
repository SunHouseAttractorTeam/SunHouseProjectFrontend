import React from 'react'
import './Avatar.scss'
import { apiUrl } from '../../../config'
import imageNotFound from '../../../assets/icons/image_not_found.svg'

const Avatar = ({ user, className }) => {
  let avatarImage = imageNotFound

  if (user?.avatar) {
    if (user?.avatar.match(/http/) || user?.avatar.match(/https/)) {
      avatarImage = user.avatar
    } else {
      avatarImage = `http://localhost:8000/uploads/${user.avatar}`
    }
  }

  return <img className={`avatar ${className}`} src={avatarImage} alt={user?.username} />
}

export default Avatar
