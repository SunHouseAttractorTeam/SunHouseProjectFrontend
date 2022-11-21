import React from 'react'
import Logo from '../../../components/UI/Logo/Logo'
import Avatar from '../../../components/UI/Avatar/Avatar'

const MyProfileTop = ({ user }) => (
  <div className="profile__sidebar-top">
    <div className="profile__sidebar-top-logo">
      <Logo className="profile__logo" />
    </div>
    <div className="profile__sidebar-top-user">
      <Avatar className="profile__sidebar-top-user-avatar" user={user} />
      <div>
        <p className="profile__sidebar-top-user-username">{user?.username}</p>
        <p className="profile__sidebar-top-user-role">{user?.role}</p>
      </div>
    </div>
  </div>
)

export default MyProfileTop
