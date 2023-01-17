import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../../components/CoursesCatalog/CoursesCatalog'
import Partners from '../../components/Partners/Partners'
import LendingTeacherBlock from '../../components/LendingTeacherBlock/LendingTeacherBlock'
import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock'
import './Main.scss'

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <CoursesCatalog />
    <About />
    <div className="container" />
    <Partners />
    <LendingTeacherBlock />
    <ReviewsBlock />
    <Footer />
  </div>
)

export default Main
