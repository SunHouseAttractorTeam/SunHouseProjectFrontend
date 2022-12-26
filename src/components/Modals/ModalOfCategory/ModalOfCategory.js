import React from 'react'
import './ModalOfCategory.scss'

const ModalOfCategory = ({ selectedCategory }) => {
  const categoryArray = [
    { key: 'all', name: 'Все' },
    { key: 'Платный курс', name: 'Платные курсы', id: 1 },
    { key: 'Бесплатный курс', name: 'Бесплатный курс', id: 2 },
  ]

  return (
    <ul className="modal-category">
      <h4 className="modal-category__title">Категории:</h4>
      <div className="modal-category__block">
        {categoryArray &&
          categoryArray.map(list => (
            <li key={list.id} className="modal-category__list" onClick={() => selectedCategory(list.key)}>
              {list.name}
            </li>
          ))}
      </div>
    </ul>
  )
}

export default ModalOfCategory
