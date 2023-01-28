import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseCard from '../CourseCard/CourseCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import MainButton from '../UI/MainButton/MainButton'
import './CoursesCatalog.scss'
import { clearCourses, fetchCoursesRequest } from '../../store/actions/coursesActions'

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

const CoursesCatalog = () => {
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  useEffect(() => {
    dispatch(fetchCoursesRequest())

    return () => {
      dispatch(clearCourses())
    }
  }, [dispatch])

  const allCourses = (
    <div className="courses-section__card">
      <div className="courses-section__card-top">
        <h6 className="courses-section__card-top-title">Все наши курсы</h6>
        <ul className="courses-section__card-top-list">
          <li className="courses-section__card-top-list-item">Программирование</li>
          <li className="courses-section__card-top-list-item">Дизайн и UX</li>
          <li className="courses-section__card-top-list-item">Маркетинг</li>
        </ul>
        <div className="courses-section__card-top-button">
          <MainButton type="button" className="GreenButton" text="Подробнее" />
        </div>
      </div>
    </div>
  )
  const sliceCourses = courses.slice(0, 5).map(item => (
    <div className="slider__item-course" key={item._id}>
      <CourseCard title={item.title} image={item.image} id={item._id} price={item.price} />
    </div>
  ))

  sliceCourses.push(
    <div key="all" className="slider__item-course">
      {allCourses}
    </div>,
  )

  return (
    courses && (
      <section className="courses-section">
        <div className="container courses-section__container">
          <h2 className="courses-section__title">Каталог курсов</h2>
          <div className="courses-section__cards">
            {courses.slice(0, 5).map(item => (
              <CourseCard key={item._id} title={item.title} image={item.image} id={item._id} price={item.price} />
            ))}
            {allCourses}
          </div>
          <div className="slider">
            <CustomSlider response={sliderSettings}>{sliceCourses}</CustomSlider>
          </div>
        </div>
      </section>
    )
  )
}

export default CoursesCatalog
