import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SelectionHelpForm from '../../components/SelectionHelpForm/SelectionHelpForm'
import Rates from '../../components/Rates/Rates'
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
    <Rates />
    <SelectionHelpForm />
    <Footer />
  </div>
)

export default Main
