import React from 'react'
import './ModalOfCategory.scss'

const ModalOfCategory = () => {
  const categories = [
    { category: 'Платные курсы', id: 1 },
    { category: 'Бесплатные курсы', id: 2 },
    { category: 'Платные курсы', id: 3 },
    { category: 'Бесплатные курсы', id: 4 },
    { category: 'Платные курсы', id: 5 },
    { category: 'Бесплатные курсы', id: 6 },
  ]

  return (
    <div className="modal-category">
      <h4>Категории курсов</h4>
      {categories.map(category => (
        <div>
          <input type="radio" name="category" id="categoryItem" />
          <label htmlFor="categoryItem">{category.category}</label>
        </div>
      ))}
    </div>
  )
}

export default ModalOfCategory
