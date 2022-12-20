import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import './CourseProgram.scss'
import CardProgram from './CardProgram/CardProgram'

const CourseProgram = () => (
  <div className="program-block">
    <Paragraph title="Программа курса" section="courseProgram" />
    <div className="program-block__cards">
      <CardProgram />
      <CardProgram />
      <CardProgram />
      <CardProgram />
      <button className="program-block__btn MainButton GreenButton">Записаться на курс</button>
    </div>
  </div>
)

export default CourseProgram
