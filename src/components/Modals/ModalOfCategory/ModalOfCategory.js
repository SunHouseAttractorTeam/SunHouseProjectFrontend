import React from 'react'
import './ModalOfCategory.scss'
import { useSelector } from 'react-redux'

const ModalOfCategory = ({ selectedCategory }) => {
  const categories = useSelector(state => state.categories.categories)

  return (
    <ul className="modal-category">
      <h4 className="modal-category__title">Категории:</h4>
      <div className="modal-category__block">
        {categories &&
          categories.map(list => (
            <li key={list._id} className="modal-category__list" onClick={() => selectedCategory(list.title)}>
              {list.title}
            </li>
          ))}
      </div>
    </ul>
  )
}

export default ModalOfCategory
