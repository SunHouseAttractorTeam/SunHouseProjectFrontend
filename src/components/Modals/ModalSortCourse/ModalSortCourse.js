import React from 'react'

const ModalSortCourse = ({ sortCourse }) => {
  const sortArray = [
    { key: 'сбросить', name: 'сбросить', id: 1 },
    { key: 'новые', name: 'сначало новые', id: 2 },
    { key: 'старые', name: 'сначало старые', id: 3 },
  ]

  return (
    <ul className="modal-category">
      <h4 className="modal-category__title">Сортировать:</h4>
      <div className="modal-category__block">
        {sortArray &&
          sortArray.map(list => (
            <li key={list.id} className="modal-category__list" onClick={() => sortCourse(list.key)}>
              {list.name}
            </li>
          ))}
      </div>
    </ul>
  )
}

export default ModalSortCourse
