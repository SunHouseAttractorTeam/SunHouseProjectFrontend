import React from 'react'
import { teachers } from '../../data/teachers'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../../components/CoursesCatalog/CoursesCatalog'
import LendingTeacherBlock from '../../components/LendingTeacherBlock/LendingTeacherBlock'
import Partners from '../../components/Partners/Partners'
import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock'
import './Main.scss'

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <CoursesCatalog />
    <div id="about" className="about-block">
      <About />
    </div>
    <div className="container">
      <LendingTeacherBlock />
    </div>
    <Partners />
    <div id="review" className="review-block">
      <ReviewsBlock />
    </div>
    <Footer />
  </div>
)

export default Main
