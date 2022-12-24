import React, { useState } from 'react'
import './WhatLearn.scss'
import { useDispatch } from 'react-redux'
import LearnCardText from './LearnCardText/LearnCardText'
import Paragraph from '../Paragraph/Paragraph'
import Modal from '../UI/Modal2/Modal'
import { updateDescriptionRequest } from '../../store/actions/descriptionsActions'

const WhatLearn = ({ match, accessCheck, section }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState({
    title: '',
    subtitle: '',
    file: null,
  })

  const handleFileChange = e => {
    if (!e.target.files) {
      return
    }
    setDescription(prev => ({
      ...prev,
      file: e.target.files[0],
    }))
  }

  const handlerClick = () => {
    setOpen(true)
  }

  const updateDescription = e => {
    e.preventDefault()
    if (!section) {
      setOpen(false)
      return
    }
    dispatch(
      updateDescriptionRequest({
        section,
        text: description,
      }),
    )
    setOpen(false)
  }

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setDescription(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="learn-plan-block">
      <Paragraph title="Чему вы научитесь" match={match} section="whatLearn" accessCheck={accessCheck} />
      {accessCheck && accessCheck() ? (
        <>
          <button type="button" className="learn-plan-block__btn-plus" onClick={e => handlerClick(e)}>
            +
          </button>
          {open && (
            <Modal setOpen={setOpen}>
              <form onSubmit={updateDescription}>
                <div className="block__modal">
                  <h3 className="block__modal-title">Добавить описание:</h3>
                  <input
                    className="block__add-description"
                    name="title"
                    value={description.title}
                    onChange={inputChangeHandler}
                    placeholder="Введите название..."
                  />
                  <input
                    className="block__add-description"
                    name="subtitle"
                    value={description.subtitle}
                    onChange={inputChangeHandler}
                    placeholder="Введите описание..."
                  />
                  <div className="field__wrapper">
                    <input
                      name="file"
                      type="file"
                      id="field__file-2"
                      className="field field__file"
                      onChange={handleFileChange}
                    />
                    <label className="field__file-wrapper" htmlFor="field__file-2">
                      <div className="field__file-fake">
                        {description.file ? `${description.file.name}` : 'Файл не выбран'}
                      </div>
                      <div className="field__file-button">Выбрать</div>
                    </label>
                  </div>
                  <button className="block__modal-btn" type="submit">
                    Сохранить
                  </button>
                </div>
              </form>
            </Modal>
          )}
        </>
      ) : (
        <div className="learn-plan-block__cards">
          {[1, 2, 3, 4].map(item => (
            <LearnCardText key={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WhatLearn
