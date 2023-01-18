import React, { useState } from 'react'
import './ButtonsContent.scss'

const ButtonsContent = ({ titleOne, titleTwo, childrenOne, childrenTwo, onClickOne, onClickTwo }) => {
  const [active, setActive] = useState(true)

  return (
    <div className="title-block">
      <div className="title-block__buttons">
        <div onClick={onClickOne}>
          <button
            type="button"
            onClick={() => setActive(true)}
            className={
              active ? 'title-block__buttons-button title-block__buttons-button--active' : 'title-block__buttons-button'
            }
          >
            {titleOne}
          </button>
        </div>
        <div onClick={onClickTwo}>
          <button
            type="button"
            onClick={() => setActive(false)}
            className={
              active ? 'title-block__buttons-button' : 'title-block__buttons-button title-block__buttons-button--active'
            }
          >
            {titleTwo}
          </button>
        </div>
      </div>
      <div>{active ? <>{childrenOne}</> : <>{childrenTwo}</>}</div>
    </div>
  )
}

export default ButtonsContent
