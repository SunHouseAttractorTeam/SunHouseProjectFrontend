import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../UI/Logo/Logo'
import MainButton from '../UI/MainButton/MainButton'
import PromoImage from '../../assets/promo/Promo_image.png'
import './Promo.scss'

const title = 'Онлайн - школа'
const text =
  'Образовательная платформа №1 по качеству обучения.' +
  'Вы получите знания, которые помогут вам освоить профессию мечты и изменить жизнь'

const Promo = () => {
  const onPromoButtonClick = () => {}

  return (
    <div className="promo">
      <div className="container">
        <div className="promo_inner">
          <div className="promo_column_left">
            <h1 className="promo_title">{title}</h1>
            <Logo className="promo_logo" />
            <p className="promo_text">{text}</p>
            <Link to="/registration" className="form_loginLink_span">
              <MainButton className="GreenButton promo_button" text="Зарегистрироваться" onClick={onPromoButtonClick} />
            </Link>
          </div>
          <div className="promo_column_right">
            <div className="promo_image">
              <img src={PromoImage} alt="Promo" className="promo_image_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
