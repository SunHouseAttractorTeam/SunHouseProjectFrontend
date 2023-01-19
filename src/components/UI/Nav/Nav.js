import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = ({ user }) => {
  const [scrolling, setScrolling] = useState(null)

  if (scrolling !== null) {
    window.scroll({ left: 0, top: scrolling, behavior: 'smooth' })
  }
  return (
    <nav className="main-nav">
      <input id="menu-toggle" type="checkbox" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink to="/course-catalog" className="main-nav__link" activeClassName="main-nav__link_active">
            Каталог курсов
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            to="/about"
            className="main-nav__link"
            activeClassName="main-nav__link_active"
            onClick={() => setScrolling(1620)}
          >
            О школе
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to="/page-teachers" className="main-nav__link" activeClassName="main-nav__link_active">
            Преподавателям
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            to="/reviews"
            className="main-nav__link"
            activeClassName="main-nav__link_active"
            onClick={() => setScrolling(3400)}
          >
            Отзывы
          </NavLink>
        </li>
        {!user && (
          <li className="main-nav__item">
            <NavLink to="/registration" className="main-nav__link">
              Регистрация
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Nav
