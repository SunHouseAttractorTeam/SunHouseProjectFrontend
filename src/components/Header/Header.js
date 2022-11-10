import React from 'react'
import { useDispatch } from 'react-redux'
import Nav from '../UI/Nav/Nav'
import MainButton from '../UI/MainButton/MainButton'
import Logo from '../UI/Logo/Logo'
import './Header.scss'
import { historyPush } from '../../store/actions/historyActions'

const Header = () => {
  const dispatch = useDispatch()
  const onHeaderButton = () => {
    dispatch(historyPush('/login'))
  }

  return (
    <header className=" header">
      <div className="container header__container">
        <Logo className="header_logo" />
        <Nav />
        <MainButton className="header_MainButton" onClick={onHeaderButton} text="Войти" />
      </div>
    </header>
  )
}

export default Header
