import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../../../../components/UI/Form/FormInput/FormInput'
import { inputChangeHandler } from '../../../../components/UI/Form/Handlers/Handlers'
import { deleteCourseRequest } from '../../../../store/actions/coursesActions'

const CourseSettingsLeft = ({ course, setCourse }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    title: course?.title,
    description: course?.description,
    private: course?.private,
  })

  const changeInputState = e => {
    inputChangeHandler(e, setState)
    inputChangeHandler(e, setCourse)
  }
  const handleDelete = () => {
    dispatch(deleteCourseRequest(course._id))
  }

  return (
    <div>
      <form className="course-settings__right-form">
        <div>
          <FormInput onChange={changeInputState} name="title" placeholder="Название курса" value={state.title} />
          <FormInput
            onChange={changeInputState}
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
  )
}
export default CourseSettingsLeft
