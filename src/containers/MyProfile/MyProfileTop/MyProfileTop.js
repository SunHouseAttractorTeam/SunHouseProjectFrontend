import React from 'react'
import Logo from '../../../components/UI/Logo/Logo'
import Avatar from '../../../components/UI/Avatar/Avatar'

const MyProfileTop = ({ user }) => {
  let role = 'Пользователь'
  switch (user?.role) {
    case 'user':
      role = 'Студент'
      break
    case 'teacher':
      role = 'Преподаватель'
      break
    case 'admin':
      role = 'Администратор'
      break
    case 'moderator':
      role = 'Модератор'
      break
    default:
      role = 'Пользователь'
  }
  return (
    <div className="profile__sidebar-top">
      <div className="profile__sidebar-top-logo">
        <Logo className="profile__logo" />
      </div>
      <div className="profile__sidebar-top-user">
        <Avatar className="profile__sidebar-top-user-avatar" user={user} />
        <div>
          <p className="profile__sidebar-top-user-username">{user?.username}</p>
          <p className="profile__sidebar-top-user-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default MyProfileTop
