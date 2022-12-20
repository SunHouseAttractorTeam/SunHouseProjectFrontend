import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header2 from '../../components/Header2/Header2'
import Footer from '../../components/Footer/Footer'
import CourseHomepage from './CourseHomepage/CourseHomepage'
import { fetchCourseRequest, updateCourseRequest } from '../../store/actions/coursesActions'
import CourseSettings from './CourseSettings/CourseSettings'
import CourseEdit from './CourseEdit/CourseEdit'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import './Course.scss'
import WhatLearn from '../../components/WhatLearn/WhatLearn'
import TeachersBlock from '../../components/TeachersBlock/TeachersBlock'
import CourseProgram from '../../components/CourseProgram/CourseProgram'
import { teachers } from '../../data/teachers'

const Course = ({ match }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const course = useSelector(state => state.courses.course)

  useEffect(() => {
    if (user) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, id, user])

  const handleSave = courseData => {
    dispatch(updateCourseRequest({ courseData, id }))
  }

  return (
    <>
      {course && (
        <>
          <Header2 />
          <CourseBanner course={course} user={user?._id} handleSave={handleSave} />
          {course && (
            <div className="course__bottom">
              <Switch>
                <Route path="/course/:id" exact component={CourseHomepage} />
                <Route path="/course/:id/settings" exact component={CourseSettings} />
                <Route path="/course/:id/edit" component={CourseEdit} />
              </Switch>
            </div>
          )}
          <div className="course container">
            <WhatLearn match={match} />
            <TeachersBlock title="Преподователи" teachers={teachers} />
            <CourseProgram />
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default Course
