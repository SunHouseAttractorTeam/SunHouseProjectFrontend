import React from 'react'
import { useSelector } from 'react-redux'
import MyProfileTop from '../../components/UI/MyProfileTop/MyProfileTop'
import AdminPanelBottom from './AdminPanelBottom/AdminPanelBottom'

const AdminPanel = () => {
  const user = useSelector(state => state.users.user)
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__inner">
          <div className="profile__sidebar">
            <MyProfileTop user={user} />
            <AdminPanelBottom />
          </div>
          <p>test</p>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
