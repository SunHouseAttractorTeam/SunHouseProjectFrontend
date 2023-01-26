import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileSidebarLink = ({ children, to }) => (
  <li className="profile__sidebar-bottom-nav-list-item">
    <NavLink
      className="profile__sidebar-bottom-nav-list-item-link"
      to={to}
      activeClassName="profile__sidebar-bottom-nav-list-item-link--active"
    >
      {children}
    </NavLink>
  </li>
)

export default ProfileSidebarLink
