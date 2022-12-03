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
    const active = event.target.parentNode
    if (active.className !== 'modal__content' && active.className !== 'content') {
      active.classList.toggle('cont__active')
    }
  }

  const backToClass = event => {
    event.target.classList.remove('cont__active')
    event.target.classList.add('cont')
  }

  return (
    <Modal setOpen={setOpen}>
      <h6 className="content__title">Добавить контент</h6>
      <div className="content">
        <button
          className="cont"
          onClick={e => changeContentTypeAndClass(e, 'lesson')}
          onBlur={backToClass}
          type="button"
        >
          <img src={lesson} alt="lesson" className="cont__img" />
          <h6 className="cont__sub">Занятие</h6>
        </button>

        <button className="cont" onClick={e => changeContentTypeAndClass(e, 'task')} onBlur={backToClass} type="button">
          <img src={task} alt="task" className="cont__img" />
          <h6 className="cont__sub">Задание</h6>
        </button>

        <button className="cont" onClick={e => changeContentTypeAndClass(e, 'test')} onBlur={backToClass} type="button">
          <img src={test} alt="test" className="cont__img" />
          <h6 className="cont__sub">Тест</h6>
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
