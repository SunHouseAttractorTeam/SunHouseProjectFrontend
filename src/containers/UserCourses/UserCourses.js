import React from 'react'
import Title from '../../components/UI/Title/Title'
import BurgerMenu from '../../components/UI/BurgerMenu/BurgerMenu'
import './UserCourses.scss'

const UserCourses = () => (
  <div className="user-courses">
    <div className="user-courses__top">
      <Title>Мои курсы</Title>
      <BurgerMenu />
    </div>
  </div>
)

export default UserCourses
