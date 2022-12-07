import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createTaskRequest } from '../../../store/actions/tasksActions'
import Modal from '../../UI/Modal2/Modal'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'
import task from '../../../assets/icons/task.svg'
import './ModalTaskSetting.scss'

const ModalTaskSetting = ({ setOpen, courseId, moduleId }) => {
  const dispatch = useDispatch()
  const [taskData, setTaskData] = useState({ title: '' })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createTaskRequest({ courseId, moduleId, taskData })))
    setOpen(false)
  }

  return (
    <Modal setOpen={setOpen}>
      <div className="content">
        <div className="content__block">
          <img src={task} alt="task" className="content__block__img" />
          <h6 className="content__title">Настройте задание</h6>
          <form>
            <span className="content__block__label">Название задания</span>
            <FormInput
              onChange={e => inputChangeHandler(e, setTaskData)}
              value={taskData.title}
              name="title"
              placeholder="Название"
              className="content__block__input"
            />
            <MainButton
              className="GreenButton content__block__button"
              text="Добавить задание"
              onClick={e => handlerClick(e)}
              type="submit"
            />
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default ModalTaskSetting
