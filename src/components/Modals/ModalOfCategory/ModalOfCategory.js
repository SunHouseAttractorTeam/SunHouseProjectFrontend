import React from 'react'
import './ModalOfCategory.scss'
import { Link } from 'react-router-dom'

const ModalOfCategory = ({ categories }) => (
  <ul className="modal-category">
    <h4 className="modal-category__title">Категории:</h4>
    <div className="modal-category__block">
      {categories.map(category => (
        <div key={category._id}>
          <Link className="modal-category__list" to={`course-catalog?category=${category._id}`}>
            {category.title}
          </Link>
        </div>
      ))}
    </div>
  </ul>
)

export default ModalOfCategory
