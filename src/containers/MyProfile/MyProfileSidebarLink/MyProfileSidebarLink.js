import React from 'react'
import { Link } from 'react-router-dom'

const MyProfileSidebarLink = ({ className, children, to }) => (
  <li className="profile__sidebar-bottom-nav-list-item">
    <Link className={`profile__sidebar-bottom-nav-list-item-link ${className}`} to={to}>
      {children}
    </Link>
  </li>
)

export default MyProfileSidebarLink
