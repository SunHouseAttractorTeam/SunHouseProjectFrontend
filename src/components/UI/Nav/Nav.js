import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const category = useSelector(state => state.categories.categories)

  const funcIsOpenMenu = event => {
    event.preventDefault()
    const dropdown = event.target.parentNode
    dropdown.classList.toggle('dropdown__is-open')
  }

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <div className="dropdown">
          <button type="button" className="dropdown__toggle" onClick={funcIsOpenMenu}>
            Каталог курсов
          </button>

          <div className="dropdown__drawer">
            <ul className="menu">
              {category &&
                category.map(list => (
                  <li key={list._id}>
                    <NavLink className="menu__link" to={`/${list._id}`}>
                      {list.title}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
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
        <li className="main-nav__item">
          <NavLink to="/registration" className="main-nav__link">
            Регистрация
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
