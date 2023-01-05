import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = ({ user }) => (
  <nav className="main-nav">
    <input id="menu-toggle" type="checkbox" />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="menu-button-container" htmlFor="menu-toggle">
      <div className="menu-button" />
    </label>
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <NavLink to="/course-catalog" className="main-nav__link">
          <span className="main-nav__link">Каталог курсов</span>
        </NavLink>
      </li>
      <li className="main-nav__item">
        <a href="#" className="main-nav__link">
          Бесплатные курсы
        </a>
      </li>
      <li className="main-nav__item">
        <a href="#" className="main-nav__link">
          О школе
        </a>
      </li>
      <li className="main-nav__item">
        <a href="#" className="main-nav__link">
          Отзывы
        </a>
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
export default Nav
