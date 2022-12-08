import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createTestRequest } from '../../../store/actions/testsActions'
import Modal from '../../UI/Modal2/Modal'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'

const CreateTestModal = ({ setOpen, courseId, moduleId }) => {
  const dispatch = useDispatch()
  const [testData, setTestData] = useState({ title: '' })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createTestRequest({ courseId, moduleId, testData })))
    setOpen(false)
    setTestData({ title: '' })
  }

  return (
    <Modal setOpen={setOpen}>
      <div className="content">
        <span>Настройте тест</span>
        <div className="content__test">
          <form>
            <span className="">Настройте тест</span>
            <FormInput
              onChange={e => inputChangeHandler(e, setTestData)}
              value={testData.title}
              name="title"
              placeholder="Название"
              className="inputModal"
            />
            <MainButton className="GreenButton" text="Создать тест" onClick={e => handlerClick(e)} type="submit" />
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default CreateTestModal
