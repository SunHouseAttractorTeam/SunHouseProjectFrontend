import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import MyProfileTop from './MyProfileTop/MyProfileTop'
import MyProfileBottom from './MyProfileBottom/MyProfileBottom'
import UserCourses from '../UserCourses/UserCourses'
import TeacherMode from '../TeacherMode/TeacherMode'
import Notifications from '../Notifications/Notifications'
import Certificates from '../Certificates/Certificates'
import Settings from '../Settings/Settings'
import Footer from '../../components/Footer/Footer'
import './MyProfile.scss'

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
              <Route path="/user/teacher_mode" component={TeacherMode} />
              <Route path="/user/courses" component={UserCourses} />
              <Route path="/user/notifications" component={Notifications} />
              <Route path="/user/certificates" component={Certificates} />
              <Route path="/user/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyProfile
