import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessonRequest } from '../../store/actions/lessonsActions'
import { apiUrl } from '../../config'
import './LessonPassing.scss'

const LessonPassing = () => {
  const dispatch = useDispatch()
  const { courseId, lessonId } = useParams()
  const lesson = useSelector(state => state.lessons.lesson)
  const course = useSelector(state => state.courses.course)
  const [numberOfLesson, setNumberOfLesson] = useState(0)
  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
    course.modules.forEach(item => {
      const lessonIndex = item.data.findIndex(lessonAsd => lessonAsd._id === lessonId)
      if (lessonIndex !== -1) setNumberOfLesson(lessonIndex + 1)
    })
  }, [dispatch, lessonId, courseId])

  return (
    lesson && (
      <div className="lesson">
        <div className="lesson_title">
          <p>Урок № {numberOfLesson}</p>
          <h3>{lesson.title}</h3>
        </div>
        <div className="lesson_block">
          <div className="lesson_block__title">
            <p>Содержимое занятия</p>
          </div>
          <h6 className="lesson_block__subtitle">{lesson.title}</h6>
          {lesson.data.map((content, index) => {
            switch (Object.keys(content)[0]) {
              case 'text':
                // eslint-disable-next-line react/no-danger
                return (
                  <div
                    key={`${index}textDW`}
                    className="lesson_block__text"
                    dangerouslySetInnerHTML={{ __html: lesson.data[0].text }}
                  />
                )
              case 'video':
                // eslint-disable-next-line no-case-declarations
                const link = content.video.replace('watch?v=', 'embed/')
                return (
                  <iframe
                    key={index}
                    width="730"
                    height="400"
                    style={{ margin: '30px 0' }}
                    src={link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              case 'audio':
                return (
                  <audio key={index} controls>
                    <source src={`${apiUrl}/uploads/${content.audio}`} />
                    <track src={content.audio} kind="captions" srcLang="en" label="english_captions" />
                  </audio>
                )
              default:
                return null
            }
          })}
          {lesson.file && (
            <a className="download" href={`${apiUrl}/uploads/${lesson.file}`} target="_blank" rel="noreferrer">
              Скачать файл
            </a>
          )}
        </div>
      </div>
    )
  )
}

export default LessonPassing
