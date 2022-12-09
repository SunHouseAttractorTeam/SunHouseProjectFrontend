import React, { useState } from 'react'
import './ContentForm.scss'
import FilesUploader from '../FilesUploader/FilesUploader'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import AddContentBlock from '../AddContentBlock/AddContentBlock'

const ContentForm = ({ title = 'Title', type = 'lesson' }) => {
  const [data, setData] = useState([])
  return (
    <>
      <div className="content-form">
        <h1 className="content-form__title">{title}</h1>
        <button className="content-form__remove" type="button" />
        <p className="content-form__editor-title">Содержимое занятия</p>
        {data.map((content, index) => {
          switch (content.type) {
            case 'text':
              return (
                <div key={index} className="content-form__editor content-form__item">
                  <SunEditorWYSIWYG value={content.description} />
                </div>
              )
            case 'video':
              return (
                <>
                  <FilesUploader type="video" key={index} className="content-form__item" />
                </>
              )
            case 'audio':
              return (
                <>
                  <FilesUploader type="audio" key={index} className="content-form__item" />
                </>
              )
            default:
              return null
          }
        })}
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
}

export default ContentForm
