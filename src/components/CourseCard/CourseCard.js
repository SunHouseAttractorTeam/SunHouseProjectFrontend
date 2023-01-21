import React from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../config'
import courseDefaultAvatar from '../../assets/images/courseDefaultAvatar.png'
import './CourseCard.scss'

const CourseCard = ({ id, title, image, price }) => (
  <Link className="course-card" to={`/course/${id}`}>
    <img src={image ? `${apiUrl}/${image}` : courseDefaultAvatar} alt={title} className="course-card__image" />
    <h5 className="course-card__title">{title}</h5>
    {price && <span className="course-card__price">{price} сом</span>}
  </Link>
)
export default CourseCard
