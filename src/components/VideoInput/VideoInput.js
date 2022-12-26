import React from 'react'
import FormInput from '../UI/Form/FormInput/FormInput'

const VideoInput = ({ onChange }) => (
  <div className="video-card uploader-block content-form__item">
    <p className="uploader-block__label">Вставьте ссылку из YouTube </p>
    <FormInput placeholder="Ссылка на видео" onChange={onChange} name="video" />
  </div>
)

export default VideoInput
