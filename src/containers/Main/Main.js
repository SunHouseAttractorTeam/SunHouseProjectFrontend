import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import TeachersBlock from '../../components/TeachersBlock/TeachersBlock'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../../components/CoursesCatalog/CoursesCatalog'
import Partners from '../../components/Partners/Partners'
import './Main.scss'
import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock'
import { teachers } from '../../data/teachers'

const Main = () => (
  <div className="main">
    <ToastContainer />
    <Header />
    <Promo />
    <CoursesCatalog />
    <About />
    <div className="container">
      <TeachersBlock
        title="Преподаватели — <span>практикующие эксперты</span>"
        subtitle="Доверьте свое обучение специалистам"
        teachers={teachers}
      />
    </div>
    <Partners />
    <ReviewsBlock />
    <Footer />
  </div>
)

export default Main
