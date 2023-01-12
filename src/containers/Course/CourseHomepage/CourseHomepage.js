import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCourse, fetchCourseRequest } from '../../../store/actions/coursesActions'
import CourseTitle from '../../../components/CourseTitle/CourseTitle'
import WhatLearn from '../../../components/WhatLearn/WhatLearn'
import TeachersBlock from '../../../components/TeachersBlock/TeachersBlock'
import { teachers } from '../../../data/teachers'
import CourseProgram from '../../../components/CourseProgram/CourseProgram'

const CourseHomepage = ({ match }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)
  const user = useSelector(state => state.users.user)
  const modules = useSelector(state => state.modules.module)

  useEffect(() => {
    if (user) {
      dispatch(fetchCourseRequest(id))
    }
    return () => {
      dispatch(clearCourse())
    }
  }, [dispatch, id, user])

  const teacherCheck = () => course.teachers.find(teacher => teacher === user?._id)

  const courseCheck = () => course.users.find(userId => userId === user._id)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, course, id])

  return (
    <>
      {course && (
        <div className="course-homepage">
          <CourseTitle
            courseId={id}
            title={course.title}
            description={course.description}
            image={course.image}
            teacherCheck={teacherCheck}
          />
          <div className="container">
            <div className="course-homepage__bottom">
              <WhatLearn match={match} teacherCheck={teacherCheck} />
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
          </div>
        </div>
      )}
    </>
  )
}

export default CourseHomepage
