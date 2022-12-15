import React from 'react'
import './WhatLearn.scss'
import LearnCardText from './LearnCardText/LearnCardText'
import Paragraph from '../Paragraph/Paragraph'

const WhatLearn = () => (
  <div className="learn-plan-block">
    <Paragraph title="Чему вы научитесь" subtitle="добавьте описании если необходимо" />
    <div className="learn-plan-block__cards">
      <LearnCardText />
      <LearnCardText />
      <LearnCardText />
      <LearnCardText />
    </div>
  </div>
)

export default WhatLearn
