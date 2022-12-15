import React from 'react'
import {useSelector} from 'react-redux'
import {Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import MyProfileTop from '../../components/UI/MyProfileTop/MyProfileTop'
import AdminPanelBottom from './AdminPanelBottom/AdminPanelBottom'
import {ProtectedRoute} from '../../utils/utils'

const AdminPanel = () => {
    const user = useSelector(state => state.users.user)
    return (
        <div className="profile">
            <div className="container">
                <div className="profile__inner">
                    <div className="profile__sidebar">
                        <MyProfileTop user={user}/>
                        <AdminPanelBottom/>
                    </div>
                    <div className="profile__right">
                        <Switch>
                            <ProtectedRoute
                                isAllowed={Cookies.get('jwt')}
                                redirectTo="/login"
                                path="/admin_panel/all_users"
                                component={}
                            />
                            <ProtectedRoute
                                isAllowed={Cookies.get('jwt')}
                                redirectTo="/login"
                                path="/admin_panel/notifications"
                                component={}
                            />
                            <ProtectedRoute
                                isAllowed={Cookies.get('jwt')}
                                redirectTo="/login"
                                path="/admin_panel/courses"
                                component={}
                            />
                            <ProtectedRoute
                                isAllowed={Cookies.get('jwt')}
                                redirectTo="/login"
                                path="/admin_panel/reviews"
                                component={}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
