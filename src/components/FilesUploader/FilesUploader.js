import React from 'react'
import './FilesUploader.scss'

const FilesUploader = ({ type, title }) => {
  if (type === 'video') {
    return (
      <div className="video-card uploader-block">
        <p className="uploader-block_label">{title || 'Перетащите видеофайл или нажмите для загрузки'}</p>
        <button className="MainButton GreenButton uploader-block_button">Выбрать файл</button>
      </div>
    )
  }

  if (type === 'audio') {
    return (
      <div className="audio-card uploader-block">
        <p className="uploader-block_label">{title || 'Перетащите .mp3 аудиофайл или нажмите для загрузки'}</p>
        <button className="MainButton GreenButton uploader-block_button">Выбрать файл</button>
      </div>
    )
  }

  return (
    <div className="file-card">
      <button className="file-card_button MainButton">Прикрепить файл</button>
      <p className="file-card_placeholder">
        Любые файлы размером <br /> не более 2 гигабайт
      </p>
    </div>
  )
}

export default FilesUploader
