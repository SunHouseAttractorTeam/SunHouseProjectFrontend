import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import TeachersBlock from '../../components/TeachersBlock/TeachersBlock'
import Promo from '../../components/Promo/Promo'
import CoursesCatalog from '../CoursesCatalog/CoursesCatalog'
import Partners from '../Partners/Partners'
import './Main.scss'

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <CoursesCatalog />
    <About />
    <TeachersBlock />
    <Partners />
    <Footer />
  </div>
)

export default Main
