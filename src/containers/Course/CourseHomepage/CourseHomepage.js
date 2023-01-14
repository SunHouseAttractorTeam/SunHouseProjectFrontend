import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import CourseTitle from '../../../components/CourseTitle/CourseTitle'
import WhatLearn from '../../../components/WhatLearn/WhatLearn'
import TeachersBlock from '../../../components/TeachersBlock/TeachersBlock'
import { teachers } from '../../../data/teachers'
import CourseProgram from '../../../components/CourseProgram/CourseProgram'
import MainButton from '../../../components/UI/MainButton/MainButton'

const CourseHomepage = ({ teacherCheck, courseCheck }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)
  const modules = useSelector(state => state.modules.module)

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
            courseCheck={courseCheck}
          />
          <div className="container">
            <div className="course-homepage__bottom">
              <WhatLearn teacherCheck={teacherCheck} />
              <TeachersBlock title="Преподователи" teachers={teachers} teacherCheck={teacherCheck} />
              <CourseProgram teacherCheck={teacherCheck} modules={modules} />
              {teacherCheck ? (
                <MainButton type="button" className="course__save-btn GreenButton" text="Сохранить изменения" />
              ) : (
                <>
                  {!courseCheck && (
                    <MainButton type="button" className="course__save-btn GreenButton" text="Записаться на курс" />
                  )}
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
