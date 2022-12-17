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
  console.log(state)
  return (
    <div className="reviews">
      <Title>Отзывы</Title>
      <form>
        <div className="reviews__wrapper">
          <h4 className="reviews__subtitle">Добавить отзыв</h4>
          <FormInput
            type="text"
            name="name"
            value={state.name}
            placeholder="Имя"
            onChange={e => inputChangeHandler(e, setState)}
          />
          <FormInput
            type="text"
            name="socialNetwork"
            value={state.socialNetwork}
            placeholder="instagram"
            onChange={e => inputChangeHandler(e, setState)}
          />
          <FormArea
            name="description"
            value={state.description}
            cols="50"
            rows="10"
            onChange={e => inputChangeHandler(e, setState)}
          />
        </div>
        <MainButton text="Добавить" onClick={e => handlerClick(e)} type="submit" className="GreenButton" />
      </form>
    </div>
  )
}

export default LendingReviews
