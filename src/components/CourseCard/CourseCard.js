import React from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../config'
import MainButton from '../UI/MainButton/MainButton'
import imgNotFound from '../../assets/images/banner.jpg'
import './CourseCard.scss'

const CourseCard = ({ isLast, title, list, onClick, image, teacherMode }) => (
  <div className={isLast ? 'course-card course-card--is-last' : 'course-card'} onClick={onClick}>
    <img src={image ? `${apiUrl}/${image}` : imgNotFound} alt={title} className="course-card__image" />
    <div className="course-card__content">
      <h3 className="course-card__title">{title}</h3>
      {isLast && list && (
        <ul className="course-card__list">
          {list.map(item => (
            <li key={item} className="course-card__list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      {teacherMode && (
        <MainButton type="button" className="GreenButton course-card__edit-button" text="Редактировать курс" />
      )}
      {isLast && (
        <Link to="/course-catalog" className="course-card__link">
          <MainButton className="course-card__button" text="Подробнее" />
        </Link>
      )}
    </div>
  </div>
)

export default CourseCard
