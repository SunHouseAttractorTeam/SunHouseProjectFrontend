import React, { useState } from 'react'
import Title from '../UI/Title/Title'
import './LendingReviews.scss'
import MainButton from '../UI/MainButton/MainButton'
import FormInput from '../UI/Form/FormInput/FormInput'
import { inputChangeHandler } from '../UI/Form/Handlers/Handlers'
import FormArea from '../UI/Form/FormArea/FormArea'

const LendingReviews = () => {
  const [state, setState] = useState({ image: '', name: '', socialNetwork: '', description: '' })
  const handlerClick = e => {
    e.preventDefault()
    console.log('test')
  }
  const fileChangeHandler = e => {
    const { name } = e.target
    const file = e.target.files[0]
    setState(prev => ({ ...prev, [name]: file }))
  }

  return (
    <div className="reviews">
      <Title>Отзывы</Title>
      <div className="reviews__wrapper">
        <h4 className="reviews__subtitle">Добавить отзыв</h4>
        <div className="reviews__wrapper-inner">
          <div className="reviews__wrapper-inner2">
            <div className="reviews__input-label">
              <input type="file" name="image" className="reviews__input-file" onChange={fileChangeHandler} />
              <i className="reviews__input-img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333ZM7.86667 14.64L10.6667 18.0133L14.8 12.6933C15.0667 12.3467 15.6 12.3467 15.8667 12.7067L20.5467 18.9467C20.88 19.3867 20.56 20.0133 20.0133 20.0133H4.02667C3.46667 20.0133 3.16 19.3733 3.50667 18.9333L6.82667 14.6667C7.08 14.32 7.58667 14.3067 7.86667 14.64Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>
            <div className="reviews__wrapper-inner3">
              <FormInput
                required
                type="text"
                name="name"
                value={state.name}
                placeholder="Имя"
                className="reviews__input"
                onChange={e => inputChangeHandler(e, setState)}
              />
              <FormInput
                type="text"
                name="socialNetwork"
                value={state.socialNetwork}
                className="reviews__input"
                placeholder="instagram"
                onChange={e => inputChangeHandler(e, setState)}
              />
            </div>
          </div>
          <div className="test">
            <FormArea
              required
              name="description"
              value={state.description}
              cols="50"
              rows="10"
              placeholder="Тут будет текст отзыва"
              className="reviews__textarea"
              onChange={e => inputChangeHandler(e, setState)}
              max="350"
            />
            <span
              className={
                state.description.length !== 350 ? 'reviews__textarea-counter' : 'reviews__textarea-counter-red'
              }
            >
              Количество символов: {state.description.length}/350
            </span>
          </div>
        </div>
      </div>
      <MainButton
        text="Добавить"
        onClick={e => handlerClick(e)}
        type="submit"
        className="GreenButton reviews__button"
      />
    </div>
  )
}

export default LendingReviews
