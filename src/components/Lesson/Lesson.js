import React from 'react'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'

const Lesson = () => (
  <div>
    <div className="lesson-block">
      <h1>Первый урок</h1>
      <p>Содержимое занятия</p>
      <SunEditorWYSIWYG />
      <FilesUploader type="video" />
      <FilesUploader type="audio" />
      <FilesUploader />
    </div>
  </div>
)

export default Lesson
