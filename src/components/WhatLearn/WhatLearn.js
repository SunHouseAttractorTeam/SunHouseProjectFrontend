import React, { useState } from 'react'
import LearnCardText from './LearnCardText/LearnCardText'
import Paragraph from '../Paragraph/Paragraph'
import Modal from '../UI/Modal2/Modal'
import './WhatLearn.scss'

const WhatLearn = ({ match, teacherCheck, willLearn, onVisibilityBlock, block, newWillLearn }) => {
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState({
    title: '',
    description: '',
    image: null,
  })

  const handleFileChange = e => {
    if (!e.target.files) {
      return
    }
    setDescription(prev => ({
      ...prev,
      image: e.target.files[0],
    }))
  }

  const handlerClick = () => {
    setOpen(true)
  }

  const updateDescription = e => {
    e.preventDefault()

    newWillLearn.push(description)

    onVisibilityBlock('willLearn', newWillLearn)
    setDescription({
      title: '',
      description: '',
      image: null,
    })
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
      <Paragraph
        title="Чему вы научитесь"
        match={match}
        subtitle={block.description}
        teacherCheck={teacherCheck}
        type="blockLearn"
        onVisibility={onVisibilityBlock}
        isVisibility={block.visibility}
      />
      {teacherCheck && teacherCheck() ? (
        <>
          <div className="learn-plan-block__cards">
            {willLearn.map(item => (
              <LearnCardText key={item._id} title={item.title} image={item.image} description={item.description} />
            ))}
          </div>
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
                    name="description"
                    value={description.description}
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
                        {description.image ? `${description.image.name}` : 'Файл не выбран'}
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
          {willLearn.map(item => (
            <LearnCardText key={item._id} title={item.title} image={item.image} description={item.description} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WhatLearn
