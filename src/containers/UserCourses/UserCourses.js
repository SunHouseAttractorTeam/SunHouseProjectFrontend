import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'
import './UserCourses.scss'
import { fetchUserCoursesRequest } from '../../store/actions/coursesActions'
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
  }, [dispatch, user])

  const handleCourse = id => {
    history.push(`/course/${id}`)
  }

  return (
    <div className="user-courses">
      <div className="user-courses__top">
        <Title>Мои курсы</Title>
      </div>
      <div className="user-courses__bottom">
        <div className="user-courses__bottom-courses">
          {courses.map(course => (
            <CourseCard
              key={course._id}
              title={course.title}
              price={course.price}
              date={course.date}
              onClick={() => handleCourse(course._id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserCourses
