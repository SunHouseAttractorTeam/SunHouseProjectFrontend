import React from 'react'
import { useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import MyProfileTop from './MyProfileTop/MyProfileTop'
import MyProfileBottom from './MyProfileBottom/MyProfileBottom'
import UserCourses from '../UserCourses/UserCourses'
import TeacherMode from '../TeacherMode/TeacherMode'
import Notifications from '../Notifications/Notifications'
import Certificates from '../Certificates/Certificates'
import Settings from '../Settings/Settings'
import Footer from '../../components/Footer/Footer'
import './MyProfile.scss'
import { ProtectedRoute } from '../../utils/utils'

const MyProfile = () => {
  const user = useSelector(state => state.users.user)
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__inner">
          <div className="profile__sidebar">
            <MyProfileTop user={user} />
            <MyProfileBottom />
          </div>
          <div className="profile__right">
            <Switch>
              <ProtectedRoute
                isAllowed={user?.token}
                redirectTo="/login"
                path="/user/teacher_mode"
                component={TeacherMode}
              />
              <ProtectedRoute
                isAllowed={user?.token}
                redirectTo="/login"
                path="/user/courses"
                component={UserCourses}
              />
              <ProtectedRoute
                isAllowed={user?.token}
                redirectTo="/login"
                path="/user/notifications"
                component={Notifications}
              />
              <ProtectedRoute
                isAllowed={user?.token}
                redirectTo="/login"
                path="/user/certificates"
                component={Certificates}
              />
              <ProtectedRoute isAllowed={user?.token} redirectTo="/login" path="/user/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyProfile
