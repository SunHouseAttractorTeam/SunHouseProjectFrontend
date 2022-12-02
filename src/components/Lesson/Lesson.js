import React from 'react'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'
import AddContentBlock from '../AddContentBlock/AddContentBlock'

const Lesson = ({ title }) => (
  <div className="lesson-container container">
    <div className="lesson-module">Блок добавления модуля</div>
    <div className="lesson-blank">
      <div className="lesson-block">
        <button className="lesson-block_remove" type="button" />
        <h1 className="lesson-block_title">Тут будет title</h1>
        <div className="lesson-block_editor">
          <p className="lesson-block_editor_title">Содержимое занятия</p>
          <SunEditorWYSIWYG />
        </div>
        <FilesUploader type="video" />
        <FilesUploader type="audio" />
        <AddContentBlock />
        <div className="lesson-block_files">
          <p className="lesson-block_files_title">Прикреплённые файлы</p>
          <FilesUploader />
        </div>
      </div>
      <button className="MainButton GreenButton lesson-save-button">Сохранить</button>
    </div>
  </div>
)

export default Lesson
