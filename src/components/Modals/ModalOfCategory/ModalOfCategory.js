import React from 'react'
import './ModalOfCategory.scss'

const ModalOfCategory = () => {
  const category = [{ category: 'Платные курсы' }, { category: 'Беслатные курсы' }]

  return (
    <ul className="modal-category">
      <h4 className="modal-category__title">Категории:</h4>
      <div className="modal-category__block">
        {category &&
          category.map(list => (
            <li key={list._id} className="modal-category__list">
              {list.category}
            </li>
          ))}
      </div>
    </ul>
  )
}

export default ModalOfCategory
