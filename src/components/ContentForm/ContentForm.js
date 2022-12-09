import React from 'react'
import './ContentForm.scss'
import FilesUploader from '../FilesUploader/FilesUploader'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import AddContentBlock from '../AddContentBlock/AddContentBlock'

const ContentForm = ({ title = 'Title', type = 'lesson' }) => (
  <>
    <div className="content-form">
      <h1 className="content-form__title">{title}</h1>
      <button className="content-form__remove" type="button" />
      <div className="content-form__editor content-form__item">
        <p className="content-form__editor-title">Содержимое занятия</p>
        <SunEditorWYSIWYG />
      </div>
      {type === 'lesson' ? (
        <>
          <FilesUploader type="video" className="content-form__item" />
          <FilesUploader type="audio" className="content-form__item" />
        </>
      ) : null}
      <AddContentBlock className="content-form__item" />
      <div className="content-form__files ">
        <p className="content-form__files-title ">Прикреплённые файлы</p>
        <FilesUploader type="file" />
      </div>
    </div>
    <button className="MainButton GreenButton content-form-save" type="button">
      Сохранить
    </button>
  </>
)

export default ContentForm
