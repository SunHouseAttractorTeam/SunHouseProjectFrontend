import React, { useState } from 'react'
import './BurgerMenu.scss'

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
    } else {
      setBurgerClass('burger-bar unclicked')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
    </div>
  )
}

export default BurgerMenu
