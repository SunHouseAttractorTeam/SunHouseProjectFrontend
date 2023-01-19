import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'
import Header from '../../components/Header/Header'
import CourseCard from '../../components/CourseCard/CourseCard'
import Footer from '../../components/Footer/Footer'
import burgerIcon from '../../assets/icons/BurgerIcon.png'
import filterIcon from '../../assets/icons/FilterIcon.png'
import searchIcon from '../../assets/icons/SearchIcon.png'
import './CatalogOfCourse.scss'
import ModalOfCategory from '../../components/Modals/ModalOfCategory/ModalOfCategory'
import ModalSortCourse from '../../components/Modals/ModalSortCourse/ModalSortCourse'
import { fetchCategoriesRequest } from '../../store/actions/categoriesActions'

const coursePerPage = 5

const CatalogOfCourse = () => {
  const dispatch = useDispatch()
  const query = useLocation().search
  const sortRef = useRef()
  const categoryRef = useRef()
  const [next, setNext] = useState(coursePerPage)
  const coursesCatalog = useSelector(state => state.courses.courses)
  const categories = useSelector(state => state.categories.categories)
  const [toggle, setToggle] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)

  useEffect(() => {
    dispatch(fetchCoursesRequest(query))
    dispatch(fetchCategoriesRequest())
  }, [dispatch, query])

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let handler = e => {
      if (!sortRef.current?.contains(e.target)) {
        setToggleSort(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.addEventListener('mousedown', handler)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let handler = e => {
      if (!categoryRef.current?.contains(e.target)) {
        setToggleFilter(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.addEventListener('mousedown', handler)
    }
  }, [])

  const handleMoreImage = () => {
    setNext(next + coursePerPage)
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="courses-section">
          <div className="courses-section__block">
            <h2 className="courses-section__title">Каталог курсов</h2>
            <div className="icons-block">
              {toggle === true && <input type="text" placeholder="Поиск..." className="icon-value" />}
              <div className={toggle === false ? 'icons-item' : 'icons-item--active'} onClick={() => setToggle(true)}>
                <img src={searchIcon} alt="searchIcon" />
              </div>
              <div ref={sortRef}>
                <div
                  className={
                    toggleSort === false ? 'icons-item filter-icon-item' : 'icons-item--active-icon filter-icon-item'
                  }
                  onClick={() => setToggleSort(toggleSor => !toggleSor)}
                >
                  <img src={filterIcon} alt="filterIcon" />
                </div>
                {toggleSort && <ModalSortCourse />}
              </div>
              <div ref={categoryRef}>
                <div
                  className={toggleFilter === false ? 'icons-item' : 'icons-item--active-icon'}
                  onClick={() => setToggleFilter(toggleFil => !toggleFil)}
                >
                  <img src={burgerIcon} alt="burgerIcon" />
                </div>
                {toggleFilter && <ModalOfCategory categories={categories} />}
              </div>
            </div>
          </div>
          <div className="courses-section__cards">
            {coursesCatalog.map(item => (
              <CourseCard key={item.category._id} title={item.category.title} date={item.dateTime} price={item.price} />
            ))}
          </div>
          {next < coursesCatalog?.length && (
            <button type="button" className="course-btn" onClick={handleMoreImage}>
              Посмотреть все курсы
            </button>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CatalogOfCourse
