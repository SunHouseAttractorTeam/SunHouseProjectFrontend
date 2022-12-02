import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createModuleRequest } from '../../../store/actions/modulesActions'
import Modal from '../../UI/Modal2/Modal'
import Card from '../../UI/Cards/Card/Card'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'

const ModuleCreateModal = ({ setOpen, id }) => {
  const dispatch = useDispatch()
  const [moduleData, setModuleData] = useState({ title: '' })

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createModuleRequest({ id, moduleData })))
    setOpen(false)
    setModuleData({ title: '' })
  }

  return (
    <Modal setOpen={setOpen}>
      <Card className="Card WhiteCard">
        <form>
          <FormInput
            onChange={e => inputChangeHandler(e, setModuleData)}
            value={moduleData.title}
            name="title"
            placeholder="введите название модуля"
          />
          <MainButton className="GreenButton" text="Создать модуль" onClick={e => handlerClick(e)} type="submit" />
        </form>
      </Card>
    </Modal>
  )
}

export default ModuleCreateModal
