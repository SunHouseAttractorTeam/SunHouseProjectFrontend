import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessonRequest } from '../../store/actions/lessonsActions'

const LessonPassing = () => {
  const dispatch = useDispatch()
  const { lessonId } = useParams()
  const lesson = useSelector(state => state.lessons.lesson)

  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  return (
    lesson && (
      <div>
        <h3>{lesson.title}</h3>
        {lesson.data.map((content, index) => {
          switch (Object.keys(content)[0]) {
            case 'text':
              // eslint-disable-next-line react/no-danger
              return <div key={`${index}textDW`} dangerouslySetInnerHTML={{ __html: lesson.data[0].text }} />
            case 'video':
              return <p key={`${index}textDW`}>Тут будет ВИДЕО</p>
            case 'audio':
              return <p key={`${index}textDW`}>Тут будет АУДИО</p>
            default:
              return null
          }
        })}
        {lesson.file && <p>Тут будет файл</p>}
      </div>
    )
  )
}

export default LessonPassing
