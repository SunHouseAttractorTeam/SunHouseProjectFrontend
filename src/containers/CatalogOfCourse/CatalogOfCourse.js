import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'
import catalogOfCourseData from './catalogOfCourseData'
import CourseCard from '../../components/CourseCard/CourseCard'
import Footer from '../../components/Footer/Footer'
import burgerIcon from '../../assets/icons/BurgerIcon.png'
import filterIcon from '../../assets/icons/FilterIcon.png'
import searchIcon from '../../assets/icons/SearchIcon.png'
import './CatalogOfCourse.scss'

const CatalogOfCourse = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoursesRequest())
  }, [dispatch])

  return (
    <>
      <Header />
      <section className="container">
        <div className="courses-section">
          <div className="courses-section__block">
            <h2 className="courses-section__title">Каталог курсов</h2>
            <div className="icons-block">
              <div className="icons-item">
                <img src={searchIcon} alt="burgerIcon" />
              </div>
              <div className="icons-item filter-icon-item">
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div className="icons-item">
                <img src={burgerIcon} alt="searchIcon" />
              </div>
            </div>
          </div>
          <div className="courses-section__cards">
            {catalogOfCourseData.map(item => (
              <CourseCard key={item.title} title={item.title} date={item.date} />
            ))}
          </div>
          <button type="button" className="course-btn">
            Посмотреть все курсы (10)
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CatalogOfCourse
