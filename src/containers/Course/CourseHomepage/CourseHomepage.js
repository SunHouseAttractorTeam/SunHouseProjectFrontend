import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest, visibilityRequest } from '../../../store/actions/coursesActions'
import CourseTitle from '../../../components/CourseTitle/CourseTitle'
import WhatLearn from '../../../components/WhatLearn/WhatLearn'
import TeachersBlock from '../../../components/TeachersBlock/TeachersBlock'
import CourseProgram from '../../../components/CourseProgram/CourseProgram'

const CourseHomepage = ({ match }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)
  const user = useSelector(state => state.users.user)
  const [courseLending, setCourseLending] = useState(null)

  useEffect(() => {
    if (course) {
      setCourseLending({
        blockLearn: course.blockLearn,
        blockTeachers: course.blockTeachers,
        blockModules: course.blockModules,
        willLearn: [],
        lendingTeachers: [],
      })
    }
  }, [course])

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, course, id])

  const teacherCheck = () => course.teachers.find(teacher => teacher === user?._id)

  const courseCheck = () => course.users.find(userId => userId === user?._id)

  const onVisibilityBlock = (type, content, name) => {
    if (type === 'lendingTeachers') {
      setCourseLending(prev => ({
        ...prev,
        [type]: content,
      }))
      return
    }

    if (type === 'willLearn') {
      setCourseLending(prev => ({
        ...prev,
        [type]: content,
      }))
      return
    }

    if (type === 'description') {
      setCourseLending(prev => ({
        ...prev,
        [name]: { visibility: prev[name].visibility, description: content },
      }))
      return
    }

    setCourseLending(prev => ({
      ...prev,
      [type]: { visibility: content, description: prev[type].description },
    }))
  }

  const onSave = () => {
    const formData = new FormData()

    courseLending.willLearn.forEach(elem => {
      Object.keys(elem).forEach(key => {
        if (key === 'image') {
          return formData.append(key, elem[key])
        }

        return null
      })
    })

    formData.append('payload', JSON.stringify(courseLending))

    dispatch(visibilityRequest({ formData, id }))
  }

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
              {teacherCheck() ? (
                courseLending && (
                  <>
                    <WhatLearn
                      match={match}
                      block={courseLending.blockLearn}
                      willLearn={course.willLearn}
                      newWillLearn={courseLending.willLearn}
                      teacherCheck={teacherCheck}
                      onVisibilityBlock={onVisibilityBlock}
                    />
                    <TeachersBlock
                      title="Преподаватели"
                      subtitle={courseLending.blockTeachers && courseLending.blockTeachers.description}
                      block={courseLending.blockTeachers}
                      teachers={course.lendingTeachers}
                      newTeachers={courseLending.lendingTeachers}
                      teacherCheck={teacherCheck}
                      onVisibilityBlock={onVisibilityBlock}
                    />
                    <CourseProgram
                      block={courseLending.blockModules}
                      teacherCheck={teacherCheck}
                      modules={course.modules}
                      onVisibilityBlock={onVisibilityBlock}
                    />
                    <button type="button" className="course__save-btn MainButton GreenButton" onClick={onSave}>
                      Сохранить изменения
                    </button>
                  </>
                )
              ) : (
                <>
                  {courseLending && (
                    <>
                      {courseLending.blockLearn && courseLending.blockLearn.visibility && (
                        <WhatLearn
                          match={match}
                          block={courseLending.blockLearn}
                          willLearn={course.willLearn}
                          newWillLearn={courseLending.willLearn}
                          teacherCheck={teacherCheck}
                          onVisibilityBlock={onVisibilityBlock}
                        />
                      )}
                      {courseLending.blockTeachers && courseLending.blockTeachers.visibility && (
                        <TeachersBlock
                          title="Преподаватели"
                          subtitle={courseLending.blockTeachers && courseLending.blockTeachers.description}
                          block={courseLending.blockTeachers}
                          teachers={course.lendingTeachers}
                          newTeachers={courseLending.lendingTeachers}
                          teacherCheck={teacherCheck}
                          onVisibilityBlock={onVisibilityBlock}
                        />
                      )}
                      {courseLending.blockModules && courseLending.blockModules.visibility && (
                        <CourseProgram
                          block={courseLending.blockModules}
                          teacherCheck={teacherCheck}
                          modules={course.modules}
                          onVisibilityBlock={onVisibilityBlock}
                        />
                      )}
                    </>
                  )}
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
