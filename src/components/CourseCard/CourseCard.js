import React from 'react'
import './CourseCard.scss'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../config'
import courseDefaultAvatar from '../../assets/images/courseDefaultAvatar.png'

const CourseCard = ({ id, title, image }) => (
  <Link className="course-card" to={`/course/${id}`}>
    <img src={image ? `${apiUrl}/${image}` : courseDefaultAvatar} alt={title} className="course-card__image" />
    <h5 className="course-card__title">{title}</h5>
  </Link>
)
export default CourseCard
