import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createLessonRequest } from '../../../store/actions/lessonsActions'
import Modal from '../../UI/Modal2/Modal'
import Card from '../../UI/Cards/Card/Card'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'

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
      <Card className="Card WhiteCard">
        <h6>Настройте занятие</h6>
        <form>
          <FormInput
            onChange={e => inputChangeHandler(e, setLessonData)}
            value={lessonData.title}
            name="title"
            placeholder="введите название занятия"
          />
          <MainButton className="GreenButton" text="Создать занятие" onClick={e => handlerClick(e)} type="submit" />
        </form>
      </Card>
    </Modal>
  )
}

export default CreateLessonModal
