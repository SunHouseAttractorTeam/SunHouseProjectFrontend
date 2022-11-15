import React from 'react'
import { useSelector } from 'react-redux'
import './Avatar.scss'
import { apiUrl } from '../../../config'
import imageNotFound from '../../../assets/icons/image_not_found.svg'

const Avatar = ({ className }) => {
  const user = useSelector(state => state.users.user)

  let avatarImage = imageNotFound

  if (user?.avatar) {
    avatarImage = `${apiUrl}/${user.avatar}`
  }

  return (
    <div className={`avatar ${className}`}>
      <img className="avatar_img" src={avatarImage} alt={user?.username} />
    </div>
  )
}

export default Avatar
