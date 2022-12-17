import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../store/actions/coursesActions'
import CourseTitle from '../CourseTitle/CourseTitle'
import LessonPassing from '../LessonPassing/LessonPassing'

const CoursePassing = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, course, id])

  return (
    <>
      {course && (
        <div className="course-passing">
          <CourseTitle courseId={id} title={course.title} description={course.description} image={course.image} />
          <div className="container">
            <div className="course-passing__bottom">
              <div className="course-passing__left">
                {course.modules.map(module => (
                  <div key={module._id}>
                    <p>{module.title}</p>
                    <ul>
                      {module.data.map(item => (
                        <li key={item._id}>{item.title}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="course-passing__right">
                <Switch>
                  <Route path="/course/:courseId/lesson/:lessonId" component={LessonPassing} />
                </Switch>
                <div>
                  <button type="button">{'<'}</button>
                  <button type="button">{'>'}</button>
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
