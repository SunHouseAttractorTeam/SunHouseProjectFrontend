import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header2 from '../../components/Header2/Header2'
import Footer from '../../components/Footer/Footer'
import CourseHomepage from './CourseHomepage/CourseHomepage'
import { clearCourse, fetchCourseRequest, updateCourseRequest } from '../../store/actions/coursesActions'
import CourseSettings from './CourseSettings/CourseSettings'
import CourseEdit from './CourseEdit/CourseEdit'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import './Course.scss'
import WhatLearn from '../../components/WhatLearn/WhatLearn'
import TeachersBlock from '../../components/TeachersBlock/TeachersBlock'
import CourseProgram from '../../components/CourseProgram/CourseProgram'
import { teachers } from '../../data/teachers'
import CoursePassing from '../../components/CoursePassing/CoursePassing'

const Course = ({ match }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.courses.course)
  const modules = useSelector(state => state.modules.module)

  useEffect(() => {
    if (user) {
      dispatch(fetchCourseRequest(id))
    }
    return () => {
      dispatch(clearCourse())
    }
  }, [dispatch, id, user])

  const handleSave = courseData => {
    dispatch(updateCourseRequest({ courseData, id }))
  }

  const teacherCheck = () => course.teachers.find(teacher => teacher === user?._id)

  const courseCheck = () => course.users.find(userId => userId === user._id)

  return (
    <>
      {course && (
        <div className="course">
          <Header2 />
          <CourseBanner course={course} user={user?._id} handleSave={handleSave} teacherCheck={teacherCheck} />
          <div className="course__bottom">
            <Switch>
              <Route
                path="/course/:id"
                exact={!user?.myCourses.find(userCourse => userCourse.course === course._id)}
                render={() =>
                  user?.myCourses.find(userCourse => userCourse.course === course._id) ? (
                    <CoursePassing />
                  ) : (
                    <CourseHomepage teacherCheck={teacherCheck} />
                  )
                }
              />
              <Route path="/course/:id/settings" exact component={CourseSettings} />
              <Route path="/course/:id/edit" component={CourseEdit} />
            </Switch>
          </div>
          <div className="course container">
            <WhatLearn match={match} accessCheck={teacherCheck} />
            <TeachersBlock title="Преподователи" teachers={teachers} teacherCheck={teacherCheck} />
            <CourseProgram teacherCheck={teacherCheck} modules={modules} />
            {teacherCheck() ? (
              <button type="button" className="course__save-btn MainButton GreenButton">
                Сохранить изменения
              </button>
            ) : (
              <>
                {courseCheck() ? (
                  <button type="button" className="course__save-btn MainButton GreenButton">
                    Записаться на курс
                  </button>
                ) : null}
              </>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Course
