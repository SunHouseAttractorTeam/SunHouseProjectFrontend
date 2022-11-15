import React from 'react'
import MyProfileSidebarLink from '../MyProfileSidebarLink/MyProfileSidebarLink'

const MyProfileBottom = () => (
  <div className="profile_sidebar_bottom">
    <nav className="profile_sidebar_bottom_nav">
      <ul className="profile_sidebar_bottom_nav_list">
        <MyProfileSidebarLink to="/" className="profile_sidebar_bottom_nav_list_item_link_home">
          Главная
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/teacher_mode" className="profile_sidebar_bottom_nav_list_item_link_teacher">
          Режим преподователя
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/courses" className="profile_sidebar_bottom_nav_list_item_link_courses">
          Мои курсы
        </MyProfileSidebarLink>
        <MyProfileSidebarLink
          to="/user/notifications"
          className="profile_sidebar_bottom_nav_list_item_link_notification"
        >
          Уведомления
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/certificates" className="profile_sidebar_bottom_nav_list_item_link_certificate">
          Мои сертификаты
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/settings" className="profile_sidebar_bottom_nav_list_item_link_settings">
          Насройки профиля
        </MyProfileSidebarLink>
        <MyProfileSidebarLink className="profile_sidebar_bottom_nav_list_item_link_logout">Выйти</MyProfileSidebarLink>
      </ul>
    </nav>
  </div>
)

export default MyProfileBottom
