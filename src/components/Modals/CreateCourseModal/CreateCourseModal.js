import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCourseRequest } from '../../../store/actions/coursesActions'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import Modal from '../../UI/Modal2/Modal'
import Card from '../../UI/Cards/Card/Card'
import FormInput from '../../UI/Form/FormInput/FormInput'
import FormSelect from '../../UI/Form/FormSelect/FormSelect'
import MainButton from '../../UI/MainButton/MainButton'

const CreateCourseModal = ({ setOpen }) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const [course, setCourse] = useState({
    title: '',
    category: '',
  })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createCourseRequest({ ...course })))
    setOpen(false)
  }

  return (
    <Modal setOpen={setOpen}>
      <Card className="Card WhiteCard">
        <form>
          <FormInput
            onChange={e => inputChangeHandler(e, setCourse)}
            value={course.title}
            name="title"
            placeholder="введите название курса"
          />
          <FormSelect onChange={e => inputChangeHandler(e, setCourse)} items={categories && categories} />
          <MainButton className="GreenButton" text="Создать курс" onClick={e => handlerClick(e)} type="submit" />
        </form>
      </Card>
    </Modal>
  )
}

export default CreateCourseModal
