import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'

const TeacherMode = () => {
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  useEffect(() => {
    dispatch(fetchCoursesRequest())
  }, [dispatch])

  return (
    <>
      <div>Teacher mode</div>
      <p>Teacher mode</p>
    </>
  )
}

export default TeacherMode
