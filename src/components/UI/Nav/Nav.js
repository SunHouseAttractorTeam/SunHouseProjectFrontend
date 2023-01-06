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
        <NavLink to="/course-catalog" className="main-nav__link" activeClassName="main-nav__link__active">
          Каталог курсов
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink to="/page-teachers" className="main-nav__link" activeClassName="main-nav__link__active">
          Преподавателям
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink to="/" className="main-nav__link" activeClassName="main-nav__link__active">
          О школе
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink to="/" className="main-nav__link" activeClassName="main-nav__link__active">
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
export default Nav
