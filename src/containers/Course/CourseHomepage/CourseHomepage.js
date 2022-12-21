import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import CourseTitle from '../../../components/CourseTitle/CourseTitle'

const CourseHomepage = ({ accessCheck }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, course, id])

  return (
    <>
      {course && (
        <div className="course-review">
          <CourseTitle
            courseId={id}
            title={course.title}
            description={course.description}
            image={course.image}
            accessCheck={accessCheck}
          />
          <div className="container">
            <div className="course-review__bottom" />
          </div>
        </div>
      )}
    </>
  )
}

export default CourseHomepage
