import React from 'react'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'
import AddContentBlock from '../AddContentBlock/AddContentBlock'

const Lesson = ({ title }) => (
  <div className="lesson-blank">
    <div className="lesson-block">
      <button className="lesson-block__remove" type="button" />
      <h1 className="lesson-block__title">Тут будет title</h1>
      <div className="lesson-block__editor">
        <p className="lesson-block__editor-title">Содержимое занятия</p>
        <SunEditorWYSIWYG />
      </div>
      <FilesUploader type="video" />
      <FilesUploader type="audio" />
      <AddContentBlock />
      <div className="lesson-block__files">
        <p className="lesson-block__files-title">Прикреплённые файлы</p>
        <FilesUploader />
      </div>
    </div>
    <button className="MainButton GreenButton lesson-save-button" type="button">
      Сохранить
    </button>
  </div>
)

export default Lesson
