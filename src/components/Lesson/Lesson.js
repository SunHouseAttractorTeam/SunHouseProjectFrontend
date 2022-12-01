import React from 'react'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'
import AddContentBlock from '../AddContentBlock/AddContentBlock'

const Lesson = () => (
  <div>
    <div className="lesson-block">
      <h1>Первый урок</h1>
      <p>Содержимое занятия</p>
      <SunEditorWYSIWYG />
      <FilesUploader type="video" />
      <FilesUploader type="audio" />
      <FilesUploader />
      <AddContentBlock />
    </div>
  </div>
)

export default Lesson
