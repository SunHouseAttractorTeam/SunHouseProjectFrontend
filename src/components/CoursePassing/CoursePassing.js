import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../store/actions/coursesActions'
import CourseTitle from '../CourseTitle/CourseTitle'
import LessonPassing from '../LessonPassing/LessonPassing'
import './CoursePassing.scss'
import CoursePassingModules from '../CoursePassingModule/CoursePassingModule'
import TaskPassing from '../TaskPassing/TaskPassing'
import TestPassing from '../TestPassing/TestPassing'

const CoursePassing = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const course = useSelector(state => state.courses.course)
  const user = useSelector(state => state.users.user)
  const [disabledWord, setDisabledWord] = useState('')
  const path = history.location.pathname
  const thisId = path.split('/').reverse()[0]
  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }

    const checkContentType = () => {
      const content = course.modules[0].data[0]

      history.push(`/course/${id}/${content.type}/${content._id}`)
    }

    if (course) {
      checkContentType()
    }
  }, [dispatch, course, id])

  useEffect(() => {
    const lastModule = course.modules[course.modules.length - 1]
    const lastEvent = lastModule.data[lastModule.data.length - 1]
    const firstModule = course.modules[0]
    const firstEvent = firstModule.data[0]
    setDisabledWord('')
    if (lastEvent._id === thisId) {
      setDisabledWord('next')
    }
    if (firstEvent._id === thisId) {
      setDisabledWord('previous')
    }
  }, [history.location.pathname])
  const accessCheck = course.teachers.find(teacher => teacher === user?._id)
  const nextEvent = () => {
    course.modules.map((elem, i) => {
      elem.data.map((item, index) => {
        if (item._id === thisId) {
          const newPath = path.split('/').slice(0, -2).join('/')
          let nextObj = elem.data[index + 1]
          if (!nextObj) {
            // eslint-disable-next-line prefer-destructuring
            nextObj = course.modules[i + 1].data[0]
          }
          return history.replace(`${newPath}/${nextObj.type}/${nextObj._id}`)
        }
        return item
      })
      return elem
    })
  }
  const previousEvent = () => {
    course.modules.map((elem, i) => {
      elem.data.map((item, index) => {
        if (item._id === thisId) {
          const newPath = path.split('/').slice(0, -2).join('/')
          let nextObj = elem.data[index - 1]
          if (!nextObj) {
            // eslint-disable-next-line prefer-destructuring
            nextObj = course.modules[i - 1].data[course.modules[i - 1].data.length - 1]
          }
          return history.replace(`${newPath}/${nextObj.type}/${nextObj._id}`)
        }
        return item
      })
      return elem
    })
  }
  return (
    <>
      {course && (
        <div className="course-passing">
          <CourseTitle courseId={id} title={course.title} description={course.description} image={course.image} />
          <div className="container">
            <div className="course-passing__bottom">
              <div className="course-edit__left">
                <CoursePassingModules id={id} course={course} accessCheck={accessCheck} />
              </div>
              <div className="course-passing__right">
                <Switch>
                  <Route path="/course/:courseId/lesson/:lessonId" component={LessonPassing} />
                  <Route path="/course/:courseId/task/:lessonId" component={TaskPassing} />
                  <Route path="/course/:courseId/test/:lessonId" component={TestPassing} />
                </Switch>
                <div>
                  <button disabled={disabledWord === 'previous'} onClick={previousEvent} type="button">
                    {'<'}
                  </button>
                  <button disabled={disabledWord === 'next'} onClick={nextEvent} type="button">
                    {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CoursePassing
