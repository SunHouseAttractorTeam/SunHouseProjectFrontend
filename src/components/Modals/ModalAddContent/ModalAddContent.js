import React from 'react'
import Modal from '../../UI/Modal2/Modal'
import MainButton from '../../UI/MainButton/MainButton'
import lesson from '../../../assets/icons/lesson.svg'
import task from '../../../assets/icons/task.svg'
import test from '../../../assets/icons/test.svg'
import './ModalAddContent.scss'

const ModalAddContent = ({ setOpen, handleClick, setContentType }) => {
  const changeContentTypeAndClass = (event, content) => {
    event.preventDefault()
    setContentType(content)
    event.currentTarget.classList.toggle('content__select-button__active')
  }

  const backToClass = event => {
    event.target.classList.remove('content__select-button__active')
    event.target.classList.add('content__select-button')
  }

  return (
    <Modal setOpen={setOpen}>
      <h6 className="content__title">Добавить контент</h6>
      <div className="content">
        <button
          className="content__select-button"
          onClick={e => changeContentTypeAndClass(e, 'lesson')}
          onBlur={backToClass}
          type="button"
        >
          <img src={lesson} alt="lesson" className="content__select-button__img" />
          <h6 className="content__select-button__sub">Занятие</h6>
        </button>

        <button
          className="content__select-button"
          onClick={e => changeContentTypeAndClass(e, 'task')}
          onBlur={backToClass}
          type="button"
        >
          <img src={task} alt="task" className="content__select-button__img" />
          <h6 className="content__select-button__sub">Задание</h6>
        </button>

        <button
          className="content__select-button"
          onClick={e => changeContentTypeAndClass(e, 'test')}
          onBlur={backToClass}
          type="button"
        >
          <img src={test} alt="test" className="content__select-button__img" />
          <h6 className="content__select-button__sub">Тест</h6>
        </button>
      </div>
      <p className="content__text">
        <strong>Занятие</strong> этих проблем настолько очевидна, что рамки и место обучения кадров позволяет оценить
        значение
      </p>
      <div className="content__butt">
        <MainButton className="WhiteButton cont__btn" text="Отмена" onClick={() => setOpen(false)} type="text" />
        <MainButton className="GreenButton" text="Далее" onClick={handleClick} type="text" />
      </div>
    </Modal>
  )
}

export default ModalAddContent
