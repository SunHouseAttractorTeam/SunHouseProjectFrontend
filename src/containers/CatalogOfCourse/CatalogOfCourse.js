import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

const coursePerPage = 5

const CatalogOfCourse = () => {
  const dispatch = useDispatch()
  const [next, setNext] = useState(coursePerPage)
  const courses = useSelector(state => state.courses.courses)
  const [toggle, setToggle] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('all')
  const [sort, setSort] = useState('сбросить')

  useEffect(() => {
    dispatch(fetchCoursesRequest('/courses'))
  }, [])

  const handleMoreImage = () => {
    setNext(next + coursePerPage)
  }

  const selectedCategory = valueCategory => {
    setTitle(valueCategory)
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
              {toggle && (
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="icon-value"
                  onChange={e => setSearch(e.target.value)}
                />
              )}
              <div className="icons-item" onClick={() => setToggle(toggleInput => !toggleInput)}>
                <img src={searchIcon} alt="searchIcon" />
              </div>
              <div className="icons-item filter-icon-item" onClick={() => setToggleSort(toggleSor => !toggleSor)}>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              {toggleSort && <ModalSortCourse sortCourse={sortCourse} />}
              <div className="icons-item" onClick={() => setToggleFilter(toggleFil => !toggleFil)}>
                <img src={burgerIcon} alt="burgerIcon" />
              </div>
              {toggleFilter && <ModalOfCategory selectedCategory={selectedCategory} />}
            </div>
          </div>
          <div className="courses-section__cards">
            {title === 'all' && sort === 'сбросить'
              ? courses
                  ?.slice(0, next)
                  ?.filter(course => course.category.title.toLowerCase().includes(search.toLowerCase()))
                  ?.map(item => (
                    <CourseCard
                      key={item.category._id}
                      title={item.category.title}
                      date={item.dateTime}
                      price={item.price}
                    />
                  ))
              : courses
                  .filter(el => el.category.title === title)
                  .map(item => (
                    <CourseCard
                      key={item.category._id}
                      title={item.category.title}
                      date={item.dateTime}
                      price={item.price}
                    />
                  ))}
          </div>
          {next < courses?.length && (
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
