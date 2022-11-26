import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../../../components/UI/Form/FormInput/FormInput'
import { deleteCourseRequest, updateCourseRequest } from '../../../store/actions/coursesActions'

const CourseSettings = () => {
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  const [state, setState] = useState({
    title: '',
    description: '',
    category: course.category,
    price: course.price,
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target

    setState(prev => ({ ...prev, [name]: value }))
  }

  const handleDelete = () => {
    dispatch(deleteCourseRequest(course._id))
  }

  const submitFormHandler = e => {
    e.preventDefault()

    dispatch(updateCourseRequest({ courseData: state, id: course._id }))
  }

  return (
    <div className="course-settings">
      <div className="course-settings__left">
        <div className="course-settings__left-card">
          <img src={course.image} alt={course.title} className="course-settings__left-card-image" />
          <p className="course-settings__left-card-status">{course.publish}</p>
          <p className="course-settings__left-card-title">{course.title}</p>
          <p className="course-settings__left-card-description">{course.description}</p>
        </div>
      </div>
      <div className="course-settings__right">
        <form className="course-settings__right-form" onSubmit={submitFormHandler}>
          <div>
            <FormInput onChange={inputChangeHandler} name="title" placeholder="Название курса" value={state.title} />
            <FormInput
              onChange={inputChangeHandler}
              name="description"
              placeholder="Описание курса"
              value={state.description}
            />
            <button type="button" onClick={handleDelete}>
              Удалить курс
            </button>
          </div>
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
    </div>
  )
}

export default CourseSettings
