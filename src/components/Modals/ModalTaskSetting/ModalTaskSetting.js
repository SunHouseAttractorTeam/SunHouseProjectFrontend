import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createTaskRequest } from '../../../store/actions/tasksActions'
import Modal from '../../UI/Modal2/Modal'
import Card from '../../UI/Cards/Card/Card'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'

const ModalTaskSetting = ({ clicked }) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState({ title: '' })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createTaskRequest({ ...task })))
    clicked(false)
  }

  return (
    <Modal setOpen={clicked}>
      <Card className="Card WhiteCard">
        <h6>Настройте задание</h6>
        <form>
          <FormInput
            onChange={e => inputChangeHandler(e, setTask)}
            value={task.title}
            name="title"
            placeholder="введите название задания"
          />
          <MainButton className="GreenButton" text="Создать задание" onClick={e => handlerClick(e)} type="submit" />
        </form>
      </Card>
    </Modal>
  )
}

export default ModalTaskSetting
