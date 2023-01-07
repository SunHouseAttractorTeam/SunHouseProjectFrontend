import React from 'react'
import './ModalOfCategory.scss'

const ModalOfCategory = ({ selectedCategory }) => {
  // const categories = useSelector(state => state.categories.categories)
  const categories = [
    { category: 'все', id: 0 },
    { category: 'Web-дизайнер', id: 1 },
    { category: 'Front-end разработчик', id: 2 },
    { category: 'Backend разработчик', id: 3 },
    { category: 'Обучение горничных', id: 4 },
  ]

  return (
    <ul className="modal-category">
      <h4 className="modal-category__title">Категории:</h4>
      <div className="modal-category__block">
        {categories &&
          categories.map(list => (
            <li key={list.id} className="modal-category__list" onClick={() => selectedCategory(list.category)}>
              {list.category}
            </li>
          ))}
      </div>
    </ul>
  )
}

export default ModalOfCategory
