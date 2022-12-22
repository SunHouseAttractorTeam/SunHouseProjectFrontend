import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchCoursesRequest, publishCourseRequest } from '../../store/actions/coursesActions'
import Title from '../UI/Title/Title'
import MainButton from '../UI/MainButton/MainButton'
import './AdminCourseControl.scss'

const AdminCoursesControl = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)
  useEffect(() => {
    dispatch(fetchCoursesRequest())
  }, [dispatch])
  const handleCourse = id => {
    history.push(`/course/${id}`)
  }
  const publishCourse = id => {
    dispatch(publishCourseRequest(id))
  }
  return (
    <>
      <Title>Курсы</Title>
      <div className="course-control">
        <table className="course-control__table">
          <thead>
            <tr className="course-control__table-tr">
              <td>Название</td>
              <td>Цена</td>
              <td>Описание</td>
              <td>Опубликовано</td>
            </tr>
          </thead>
          {courses.map(course => (
            <tbody key={course._id}>
              <tr>
                <td>{course.title}</td>
                <td>{course.price}</td>
                <td>
                  <p className="course-control__table-text">{course.description}</p>
                </td>
                <td>{course.publish ? 'Да' : 'Нет'}</td>
              </tr>
              <tr>
                <td>
                  <MainButton text="Посмотреть курс" onClick={() => handleCourse(course._id)} className="GreenButton" />
                </td>
                <td>
                  <MainButton
                    text="Publish/Unpublish"
                    onClick={() => publishCourse(course._id)}
                    className={!course.publish ? 'GreenButton' : 'course-control__table-button'}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default AdminCoursesControl
