import React, { useRef, useState } from 'react'
import './FilesUploader.scss'

const FilesUploader = ({ type, title }) => {
  const inputRef = useRef()
  const [filename, setFilename] = useState('')

  const onFileChange = e => {
    if (e.target.files[0]) {
      setFilename(e.target.files[0].name)
    } else {
      setFilename('')
    }
  }

  const activateInput = () => {
    inputRef.current.click()
  }

  if (type === 'video') {
    return (
      <div className="video-card uploader-block">
        <input type="file" onChange={onFileChange} ref={inputRef} />
        <p className="uploader-block_label">{title || 'Перетащите видеофайл или нажмите для загрузки'}</p>
        <button className="MainButton GreenButton uploader-block_button" onClick={activateInput}>
          Выбрать файл
        </button>
      </div>
    )
  }

  if (type === 'audio') {
    return (
      <div className="audio-card uploader-block">
        <input type="file" onChange={onFileChange} ref={inputRef} />
        <p className="uploader-block_label">{title || 'Перетащите .mp3 аудиофайл или нажмите для загрузки'}</p>
        <button className="MainButton GreenButton uploader-block_button" onClick={activateInput}>
          Выбрать файл
        </button>
      </div>
    )
  }

  return (
    <div className="file-card">
      <input type="file" onChange={onFileChange} ref={inputRef} />
      <button className="file-card_button MainButton" onClick={activateInput}>
        Прикрепить файл
      </button>
      <p className="file-card_placeholder">
        Любые файлы размером <br /> не более 2 гигабайт
      </p>
    </div>
  )
}

export default FilesUploader
