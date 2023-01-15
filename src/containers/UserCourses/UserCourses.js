import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'
import BurgerMenu from '../../components/UI/BurgerMenu/BurgerMenu'
import './UserCourses.scss'
import { clearCourses, fetchUserCoursesRequest } from '../../store/actions/coursesActions'
import CourseCard from '../../components/CourseCard/CourseCard'

const UserCourses = () => {
  const history = useHistory()
  const user = useSelector(state => state.users.user)
  const courses = useSelector(state => state.courses.courses)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(fetchUserCoursesRequest(user._id))
    }

    return () => {
      dispatch(clearCourses())
    }
  }, [dispatch, user])

  const handleCourse = id => {
    history.push(`/course/${id}`)
  }

  return (
    <div className="user-courses">
      <div className="user-courses__top">
        <Title>Мои курсы</Title>
        <BurgerMenu />
      </div>
      <div className="user-courses__bottom">
        <div className="user-courses__bottom-courses">
          {courses.length ? (
            <>
              {courses.map(course => (
                <CourseCard
                  key={course._id}
                  title={course.title}
                  price={course.price}
                  date={course.date}
                  onClick={() => handleCourse(course._id)}
                />
              ))}
            </>
          ) : (
            <h2>Курсы не найдены</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserCourses
