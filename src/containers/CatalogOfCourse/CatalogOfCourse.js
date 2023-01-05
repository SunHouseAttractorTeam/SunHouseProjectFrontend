import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import catalogOfCourseData from './catalogOfCourseData'
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
  const [next, setNext] = useState(coursePerPage)
  const [toggle, setToggle] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)

  const [search, setSearch] = useState('')
  const [array, setArray] = useState(catalogOfCourseData)
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('сбросить')
  const handleMoreImage = () => {
    setNext(next + coursePerPage)
  }

  catalogOfCourseData.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))

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
              <div
                className={toggle === false ? 'icons-item' : 'icons-item active-icon'}
                onClick={() => setToggle(true)}
              >
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
            {category === 'all' && sort === 'сбросить'
              ? array
                  ?.slice(0, next)
                  ?.map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)
              : array
                  .filter(el => el.category === category || el.filter === sort)
                  .map(item => <CourseCard key={item.id} title={item.title} date={item.date} price={item.price} />)}
          </div>
          {next < array?.length && (
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
