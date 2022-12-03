import React from 'react'
import Modal from '../../UI/Modal2/Modal'
import MainButton from '../../UI/MainButton/MainButton'
import lesson from '../../../assets/icons/lesson.svg'
import task from '../../../assets/icons/task.svg'
import test from '../../../assets/icons/test.svg'

const ModalAddContent = ({ setOpen, handleClick, setContentType }) => {
  const changeContentType = content => {
    // setContentType(content)
    content.target.className = 'GreenButton'
  }

  return (
    <Modal setOpen={setOpen}>
      <h6>Добавить контент</h6>

      <div>
        <div>
          <MainButton
            className="WhiteButton"
            text={
              <>
                <img src={lesson} alt="lesson" />
                <h6>Занятие</h6>
              </>
            }
            onClick={e => changeContentType(e)}
            type="text"
          />
        </div>
        <div>
          <MainButton
            className="WhiteButton"
            text={
              <>
                <img src={task} alt="task" />
                <h6>Задание</h6>
              </>
            }
            onClick={e => changeContentType(e)}
            type="text"
          />
        </div>
        <div>
          <MainButton
            className="WhiteButton"
            text={
              <>
                <img src={test} alt="test" />
                <h6>Тест</h6>
              </>
            }
            onClick={e => changeContentType(e)}
            type="text"
          />
        </div>
      </div>
      <MainButton className="GreenButton" text="Далее" onClick={handleClick} type="text" />
    </Modal>
  )
}

export default ModalAddContent
