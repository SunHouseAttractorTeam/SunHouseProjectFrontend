import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSidebarLink = ({ children, to }) => (
  <li className="profile__sidebar-bottom-nav-list-item">
    <Link className="profile__sidebar-bottom-nav-list-item-link" to={to}>
      {children}
    </Link>
  </li>
)

export default ProfileSidebarLink
