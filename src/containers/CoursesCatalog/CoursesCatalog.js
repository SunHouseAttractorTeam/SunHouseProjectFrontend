import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import coursesData from './coursesData'
import './CoursesCatalog.scss'

const CoursesCatalog = () => (
  <section className="courses-section">
    <div className="container courses-section__container">
      <h2 className="courses-section__title">Каталог курсов</h2>
      <div className="courses-section__cards">
        {coursesData.map(item => (
          <CourseCard key={item.title} title={item.title} date={item.date} isLast={item.isLast} />
        ))}
      </div>
    </div>
  </section>
)

export default CoursesCatalog
