import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'
import coursesCatalog from './catalogOfCourseData'
import Header from '../../components/Header/Header'
import CourseCard from '../../components/CourseCard/CourseCard'
import Footer from '../../components/Footer/Footer'
import burgerIcon from '../../assets/icons/BurgerIcon.png'
import filterIcon from '../../assets/icons/FilterIcon.png'
import searchIcon from '../../assets/icons/SearchIcon.png'
import ModalOfCategory from '../../components/Modals/ModalOfCategory/ModalOfCategory'
import ModalSortCourse from '../../components/Modals/ModalSortCourse/ModalSortCourse'
import './CatalogOfCourse.scss'

const coursePerPage = 5

const CatalogOfCourse = () => {
  const dispatch = useDispatch()
  const sortRef = useRef()
  const categoryRef = useRef()
  const [next, setNext] = useState(coursePerPage)
  const [toggle, setToggle] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('все')
  const [sort, setSort] = useState('сбросить')

  useEffect(() => {
    dispatch(fetchCoursesRequest('/courses'))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const selectedCategory = valueCategory => {
    setCategory(valueCategory)
  }

  const sortCourse = valueSort => {
    setSort(valueSort)
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="courses-section">
          <div className="courses-section__block">
            <h2 className="courses-section__title">Каталог курсов</h2>
            <div className="icons-block">
              {toggle === true && (
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="icon-value"
                  onChange={e => setSearch(e.target.value)}
                />
              )}
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
                {toggleSort && <ModalSortCourse sortCourse={sortCourse} />}
              </div>
              <div ref={categoryRef}>
                <div
                  className={toggleFilter === false ? 'icons-item' : 'icons-item--active-icon'}
                  onClick={() => setToggleFilter(toggleFil => !toggleFil)}
                >
                  <img src={burgerIcon} alt="burgerIcon" />
                </div>
                {toggleFilter && <ModalOfCategory selectedCategory={selectedCategory} />}
              </div>
            </div>
          </div>
          <div className="courses-section__cards">
            {category === 'все' && sort === 'сбросить'
              ? coursesCatalog
                  ?.slice(0, next)
                  ?.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
                  ?.map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)
              : coursesCatalog
                  ?.filter(el => el.title === category || el.filter === sort)
                  ?.map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)}
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
