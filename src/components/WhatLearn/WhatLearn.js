import React from 'react'
import './WhatLearn.scss'
import LearnCardText from './LearnCardText/LearnCardText'
import Paragraph from '../Paragraph/Paragraph'

const WhatLearn = ({ match }) => (
  <div className="learn-plan-block">
    <Paragraph title="Чему вы научитесь" match={match} section="whatLearn" />
    <div className="learn-plan-block__cards">
      <LearnCardText />
      <LearnCardText />
      <LearnCardText />
      <LearnCardText />
    </div>
  </div>
)

export default WhatLearn
