import React from 'react'
import { Link } from 'react-router-dom'

const MyProfileSidebarLink = ({ className, children, to }) => (
  <li className="profile_sidebar_bottom_nav_list_item">
    <Link className={`profile_sidebar_bottom_nav_list_item_link ${className}`} to={to}>
      {children}
    </Link>
  </li>
)

export default MyProfileSidebarLink
