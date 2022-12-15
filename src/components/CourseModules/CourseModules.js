import React from 'react'
import { Link } from 'react-router-dom'

const CourseModules = ({ id, course, handleAddContent, handleAddModule }) => (
  <div className="course-edit__left-card">
    <h6 className="course-edit__left-card-title">Структура курса</h6>
    {course.modules.length > 0 &&
      course.modules.map(module => (
        <div key={module._id}>
          <h6 className="course-edit__left-card-module-title">{module.title}</h6>
          <ul className="course-edit__left-card-module-list">
            {module.data.map(item => (
              <li
                key={item.id}
                className={`course-edit__left-card-module-list-item course-edit__left-card-module-list-item--${item.type}`}
              >
                <Link to={`/course/${id}/edit/${item.type}/${item.id}`}> {item.title}</Link>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => handleAddContent(module._id)}>
            + Занятие
          </button>
        </div>
      ))}
    <button type="button" onClick={handleAddModule}>
      + Модуль
    </button>
  </div>
)

export default CourseModules
