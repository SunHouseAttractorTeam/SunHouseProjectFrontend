import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoursesRequest } from '../../store/actions/coursesActions'
import Card from '../../components/UI/Cards/Card/Card'
import Title from '../../components/UI/Title/Title'
import MainButton from '../../components/UI/MainButton/MainButton'
import addIcon from '../../assets/icons/addIcon.svg'
import './TeacherMode.scss'

const TeacherMode = () => {
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  useEffect(() => {
    dispatch(fetchCoursesRequest())
  }, [dispatch])

  const goToEditCourse = () => {}

  const goToNewCourse = () => {}

  return (
    <div className="AllCard">
      {courses &&
        courses.map(item => (
          <Card key={item._id} className="WhiteCard AllCard__teacher">
            <span className="course-card__profession">профессия</span>
            <Title>{item.title}</Title>
            <MainButton className="GreenButton" text="Изменить курс" onClick={goToEditCourse} />
          </Card>
        ))}
      <Card className="WhiteCard AllCard__teacher">
        <MainButton className="WhiteButton" text={<img src={addIcon} alt="add" onClick={goToNewCourse} />} />
        <span className="course-card__profession">Создать курс</span>
      </Card>
    </div>
  )
}

export default TeacherMode
