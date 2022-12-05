import React from 'react'
import './MainButton.scss'

const MainButton = ({ text, onClick, className, type }) => {
  let btnType = 'submit'
  if (type) btnType = type

  return (
    <button className={`MainButton ${className}`} type={btnType} onClick={onClick}>
      {text}
    </button>
  )
}

export default MainButton
