import React from 'react'

const LearnCardText = () => (
  <div className="learn-plan-block__card">
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#ADFA00" />
    </svg>
    <div className="learn-plan-block__card-description">
      <p className="learn-plan-block__card-title">Здесь будет текст</p>
      <button className="learn-plan-block__add-link">добавьте описании если необходимо</button>
    </div>
  </div>
)

export default LearnCardText
