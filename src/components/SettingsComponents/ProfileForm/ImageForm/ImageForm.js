import React, { useRef, useState } from 'react'
import ProfileDescription from '../ProfileDescription/ProfileDescription'
import MainButton from '../../../UI/MainButton/MainButton'
import './ImageForm.scss'
import notImage from '../../../../assets/images/notImage.png'

const ImageForm = ({ userAvatar }) => {
  const inputRef = useRef()
  const avatar = notImage

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

  return (
    <div className="image-block">
      <ProfileDescription title="Укажите местоположение" text="Разнообразный и богатый опыт сложившаяся структура" />
      <div className="image-block__form">
        <div className="image-block__form-image-block">
          <img src={avatar} alt="Avatar" />
        </div>
        <input onChange={onFileChange} name="avatar" type="file" className="image-block__form-file" ref={inputRef} />
        <MainButton onClick={activateInput} text="Изменить фото" className="image-block__form-button" />
      </div>
    </div>
  )
}
export default ImageForm
