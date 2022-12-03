import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'
import AddContentBlock from '../AddContentBlock/AddContentBlock'
import { addContentInLessonRequest, fetchLessonRequest } from '../../store/actions/lessonsActions'

const Lesson = () => {
  const { lessonId } = useParams()
  const dispatch = useDispatch()
  const lesson = useSelector(state => state.lessons.lesson)

  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  const handleAddContent = type => {
    dispatch(addContentInLessonRequest({ lessonId, type }))
  }

  return (
    <>
      {lesson && (
        <div className="lesson-blank">
          <div className="lesson-block">
            <button className="lesson-block__remove" type="button" />
            <h1 className="lesson-block__title">{lesson.title}</h1>
            <div className="lesson-block__editor">
              <p className="lesson-block__editor-title">{lesson.description}</p>
              <SunEditorWYSIWYG />
            </div>
            <FilesUploader type="video" />
            <FilesUploader type="audio" />
            <AddContentBlock addContent={handleAddContent} />
            <div className="lesson-block__files">
              <p className="lesson-block__files-title">Прикреплённые файлы</p>
              <FilesUploader />
            </div>
          </div>
          <button className="MainButton GreenButton lesson-save-button" type="button">
            Сохранить
          </button>
        </div>
      )}
    </>
  )
}

export default Lesson
