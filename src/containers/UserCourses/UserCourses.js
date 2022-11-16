import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../../components/UI/Title/Title'
import BurgerMenu from '../../components/UI/BurgerMenu/BurgerMenu'
import './UserCourses.scss'
import { fetchUserCoursesRequest } from '../../store/actions/coursesActions'
import CourseCard from '../../components/CourseCard/CourseCard'

const UserCourses = () => {
  const user = useSelector(state => state.users.user)
  const courses = useSelector(state => state.courses.courses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserCoursesRequest(user?._id))
  }, [])

  return (
    <div className="user-courses">
      <div className="user-courses__top">
        <Title>Мои курсы</Title>
        <BurgerMenu />
      </div>
      <div className="user-courses__bottom">
        <div className="user-courses__bottom-courses">
          <CourseCard title="Web-дизайнер" price="5500 сом" date="24 месяца" />
          <CourseCard title="UX-UI дизайнер" price="5500 сом" date="24 месяца" />
          {courses.map(course => (
            <CourseCard title={course.title} price={course.price} date={course.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserCourses
