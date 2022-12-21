import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import coursesData from './coursesData'
import './CoursesCatalog.scss'
import CustomSlider from '../UI/CustomSlider/CustomSlider'

const sliderSettings = [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
    },
  },
]

const CoursesCatalog = () => (
  <section className="courses-section">
    <div className="container courses-section__container">
      <h2 className="courses-section__title">Каталог курсов</h2>
      <div className="courses-section__cards">
        {coursesData.map(item => (
          <CourseCard key={item.title} title={item.title} date={item.date} isLast={item.isLast} list={item.list} />
        ))}
      </div>
      <div className="slider">
        <CustomSlider response={sliderSettings}>
          {coursesData.map(item => (
            <div className="slider__item" key={item.title}>
              <CourseCard title={item.title} date={item.date} isLast={item.isLast} list={item.list} />
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  </section>
)

export default CoursesCatalog
