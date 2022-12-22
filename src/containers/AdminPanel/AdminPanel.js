import React from 'react'
import { useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import Cookies from 'js-cookie'
import MyProfileTop from '../../components/UI/MyProfileTop/MyProfileTop'
import AdminPanelBottom from './AdminPanelBottom/AdminPanelBottom'
import { ProtectedRoute } from '../../utils/utils'
import AllUsers from '../../components/AllUsers/AllUsers'
import GetNotification from '../../components/GetNotification/GetNotification'
import LendingReviews from '../../components/LendingReviews/LendingReviews'
import AdminCoursesControl from '../../components/AdminCoursesControl/AdminCoursesControl'

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
          <div className="profile__right">
            <Switch>
              <ProtectedRoute
                isAllowed={Cookies.get('jwt')}
                redirectTo="/login"
                path="/admin_panel/all_users"
                component={AllUsers}
              />
              <ProtectedRoute
                isAllowed={Cookies.get('jwt')}
                redirectTo="/login"
                path="/admin_panel/notifications"
                component={GetNotification}
              />
              <ProtectedRoute
                isAllowed={Cookies.get('jwt')}
                redirectTo="/login"
                path="/admin_panel/courses"
                component={AdminCoursesControl}
              />
              <ProtectedRoute
                isAllowed={Cookies.get('jwt')}
                redirectTo="/login"
                path="/admin_panel/reviews"
                component={LendingReviews}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
