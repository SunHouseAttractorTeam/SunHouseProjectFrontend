import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const category = useSelector(state => state.categories.categories)

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <span className="main-nav__link">Каталог курсов</span>

          <ul className="main-nav__item__menu">
            {category &&
              category.map(list => (
                <li key={list._id}>
                  <NavLink className="main-nav__item__menu__link" to={`/${list._id}`}>
                    {list.title}
                  </NavLink>
                </li>
              ))}
          </ul>
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
