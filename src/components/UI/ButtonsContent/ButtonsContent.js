import React, { useState } from 'react'
import './ButtonsContent.scss'

const ButtonsContent = ({ titleOne, titleTwo, childrenOne, childrenTwo }) => {
  const [active, setActive] = useState(true)
  return (
    <div className="title-block">
      <div className="title-block__buttons">
        <button
          type="button"
          onClick={() => setActive(true)}
          className={active ? 'title-block__buttons_button activeClass' : 'title-block__buttons_button'}
        >
          {titleOne}
        </button>
        <button
          type="button"
          onClick={() => setActive(false)}
          className={active ? 'title-block__buttons_button' : 'title-block__buttons_button activeClass'}
        >
          {titleTwo}
        </button>
      </div>
      <div>{active ? <>{childrenOne}</> : <>{childrenTwo}</>}</div>
    </div>
  )
}

export default ButtonsContent
