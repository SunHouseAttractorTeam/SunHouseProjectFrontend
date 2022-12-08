import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createLessonRequest } from '../../../store/actions/lessonsActions'
import Modal from '../../UI/Modal2/Modal'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'
import lesson from '../../../assets/icons/lesson.svg'
import './CreateLessonModal.scss'

const CreateLessonModal = ({ setOpen, courseId, moduleId }) => {
  const dispatch = useDispatch()
  const [lessonData, setLessonData] = useState({ title: '' })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createLessonRequest({ courseId, moduleId, lessonData })))
    setOpen(false)
    setLessonData({ title: '' })
  }

  return (
    <Modal setOpen={setOpen}>
      <div className="content">
        <img src={lesson} alt="lesson" className="content__lesson__img" />
        <span className="content__lesson__title">Настройте занятие</span>
        <div className="content__lesson">
          <form className="content__lesson__form">
            <span className="content__lesson__label">Введите название занятия</span>
            <FormInput
              onChange={e => inputChangeHandler(e, setLessonData)}
              value={lessonData.title}
              name="title"
              placeholder="Название"
              className="inputModal"
            />
            <MainButton
              className="GreenButton content__lesson__button"
              text="Создать занятие"
              onClick={e => handlerClick(e)}
              type="submit"
            />
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default CreateLessonModal
