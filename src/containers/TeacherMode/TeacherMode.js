import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'
import { fetchCategoriesRequest } from '../../store/actions/categoriesActions'
import Card from '../../components/UI/Cards/Card/Card'
import Title from '../../components/UI/Title/Title'
import MainButton from '../../components/UI/MainButton/MainButton'
import CreateCourseModal from '../../components/Modals/CreateCourseModal/CreateCourseModal'
import addIcon from '../../assets/icons/addIcon.svg'
import './TeacherMode.scss'

const TeacherMode = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(fetchCoursesRequest())
    dispatch(fetchCategoriesRequest())
  }, [dispatch])

  const OpenModal = () => setShow(true)

  const goToEditCourse = id => {
    history.push(`/course/${id}`)
  }

  return (
    <div className="all-card">
      <Card className="WhiteCard all-card__teacher">
        <MainButton className="WhiteButton" text={<img src={addIcon} alt="add" onClick={OpenModal} />} />

        <span className="course-card__profession">Создать курс</span>
      </Card>
      {courses &&
        courses.map(item => (
          <Card key={item._id} className="WhiteCard all-card__teacher">
            <span className="course-card__profession">профессия</span>
            <Title>{item.title}</Title>
            <MainButton className="GreenButton" text="Изменить курс" onClick={() => goToEditCourse(item._id)} />
          </Card>
        ))}

      {show && <CreateCourseModal setOpen={setShow} />}
    </div>
  )
}

export default TeacherMode
