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

    // const checkContentType = () => {
    //   const content = course.modules[0].data[0]
    //
    //   history.push(`/course/${id}/pass/${content.type}/${content._id}`)
    // }
    //
    // if (course) {
    //   checkContentType()
    // }
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
                  <Route path="/course/:courseId/pass/lesson/:lessonId" component={LessonPassing} />
                  <Route path="/course/:courseId/pass/task/:taskId" component={TaskPassing} />
                  <Route path="/course/:courseId/pass/test/:testId" component={TestPassing} />
                </Switch>
                <div className="course-passing__controls">
                  <button disabled={disabledWord === 'previous'} onClick={previousEvent} type="button">
                    <svg width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.70994 9.87998L2.82994 5.99998L6.70994 2.11998C7.09994 1.72998 7.09994 1.09998 6.70994 0.70998C6.31994 0.31998 5.68994 0.31998 5.29994 0.70998L0.709941 5.29998C0.319942 5.68998 0.319942 6.31998 0.709941 6.70998L5.29994 11.3C5.68994 11.69 6.31994 11.69 6.70994 11.3C7.08994 10.91 7.09994 10.27 6.70994 9.87998Z" />
                    </svg>
                  </button>
                  <button disabled={disabledWord === 'next'} onClick={nextEvent} type="button">
                    <svg width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.29006 9.87998L5.17006 5.99998L1.29006 2.11998C0.900059 1.72998 0.900059 1.09998 1.29006 0.70998C1.68006 0.31998 2.31006 0.31998 2.70006 0.70998L7.29006 5.29998C7.68006 5.68998 7.68006 6.31998 7.29006 6.70998L2.70006 11.3C2.31006 11.69 1.68006 11.69 1.29006 11.3C0.910059 10.91 0.900059 10.27 1.29006 9.87998Z" />
                    </svg>
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
