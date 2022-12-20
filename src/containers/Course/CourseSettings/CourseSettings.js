import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCourseRequest, updateCourseRequest } from '../../../store/actions/coursesActions'
import './CourseSettings.scss'
import CourseSettingsLeft from './CourseSettingsLeft/CourseSettingsLeft'
import CourseSettingsRight from './CourseSettingsRight/CourseSettingsRight'
import CourseSettingsCard from './CourseSettingsCard/CourseSettingsCard'

const CourseSettings = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, id, course])

  const [active, setActive] = useState(true)

  const [state, setState] = useState({
    title: course?.title || '',
    description: course?.description || '',
    category: course.category,
    price: course.price,
    image: course?.image,
  })

  const submitFormHandler = e => {
    e.preventDefault()

    dispatch(updateCourseRequest({ courseData: state, id: course._id }))
  }
  console.log(state)
  return (
    <div className="container">
      {course && (
        <div className="course-settings">
          <div className="course-settings__left">
            <CourseSettingsCard course={course} setCourse={setState} />
          </div>
          <div className="course-settings__right">
            <div className="course-settings__right__buttons-block">
              <button
                type="button"
                onClick={() => setActive(true)}
                className={
                  active
                    ? 'course-settings__right__buttons-block_button active'
                    : 'course-settings__right__buttons-block_button'
                }
              >
                Основные настройки
              </button>
              <button
                type="button"
                onClick={() => setActive(false)}
                className={
                  active
                    ? 'course-settings__right__buttons-block_button'
                    : 'course-settings__right__buttons-block_button active'
                }
              >
                Настройки курса
              </button>
            </div>
            {active ? (
              <CourseSettingsLeft course={course} setCourse={setState} />
            ) : (
              <CourseSettingsRight course={course} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseSettings
