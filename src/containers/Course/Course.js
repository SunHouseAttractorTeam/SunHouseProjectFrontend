import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header2 from '../../components/Header2/Header2'
import Footer from '../../components/Footer/Footer'
import { clearCourse, fetchCourseRequest, updateCourseRequest } from '../../store/actions/coursesActions'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import './Course.scss'
import CourseHomepage from './CourseHomepage/CourseHomepage'
import CourseSettings from './CourseSettings/CourseSettings'
import CourseEdit from './CourseEdit/CourseEdit'
import { ProtectedRoute } from '../../utils/utils'
import CoursePassing from '../../components/CoursePassing/CoursePassing'

const Course = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseRequest(id))
    }

    return () => {
      dispatch(clearCourse())
    }
  }, [dispatch, id, user])

  const handleSave = courseData => {
    dispatch(updateCourseRequest({ courseData, id }))
  }

  const teacherCheck = course?.teachers.includes(user?._id)
  const courseCheck = course?.users.includes(user?._id)

  return (
    <>
      <Header2 />
      {course && (
        <div className="course">
          <CourseBanner course={course} handleSave={handleSave} teacherCheck={teacherCheck} />
          <div className="course__bottom">
            <Switch>
              <Route
                path="/course/:id"
                exact
                render={() => <CourseHomepage teacherCheck={teacherCheck} courseCheck={courseCheck} />}
              />
              <Route path="/course/:id/settings" exact component={CourseSettings} />
              <Route path="/course/:id/edit" exact render={() => <CourseEdit teacherCheck={teacherCheck} />} />
              <ProtectedRoute
                isAllowed={courseCheck}
                redirectTo="/"
                path="/course/:id/pass"
                component={CoursePassing}
              />
            </Switch>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Course
