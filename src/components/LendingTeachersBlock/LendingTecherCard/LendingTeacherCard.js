import React from 'react'
import './LendingTeacherCard.scss'

const LendingTeacherCard = ({ image, name, description }) => (
  <div className="lending-teacher__card">
    <div className="lending-teacher__card-content">
      <div className="lending-teacher__card-avatar">
        <img className="lending-teacher__card-avatar-image" src={image} alt={name} />
      </div>
      <div className="lending-teacher__card-text">
        <span className="lending-teacher__card-text-name">{name}</span>
        <p className="lending-teacher__card-text-description">{description}</p>
      </div>
    </div>
  </div>
)

export default LendingTeacherCard
