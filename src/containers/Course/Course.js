import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../store/actions/coursesActions'

const Course = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    dispatch(fetchCourseRequest(id))
  }, [dispatch])

  return <div className="course-block" />
}

export default Course
