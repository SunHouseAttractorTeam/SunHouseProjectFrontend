import React from 'react'

import './CourseCard.scss'
import MainButton from '../UI/MainButton/MainButton'

const CourseCard = ({ isLast, title, date }) => (
  <div className={isLast ? 'course-card course-card--is-last' : 'course-card'}>
    <div className="course-card__content">
      {!isLast && <span className="course-card__profession">профессия</span>}
      <h3 className="course-card__title">{title}</h3>
      {!isLast && date && <span className="course-card__date">{date}</span>}
      {isLast && (
        <ul className="course-card__list">
          <li className="course-card__list-item">Программирование</li>
          <li className="course-card__list-item">Дизайн и UX</li>
          <li className="course-card__list-item">Маркетинг</li>
        </ul>
      )}
      {isLast && <MainButton className="course-card__button" text="Подробнее" />}
    </div>
  </div>
)

export default CourseCard
