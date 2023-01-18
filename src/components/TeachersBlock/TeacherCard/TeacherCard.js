import React from 'react'
import './TeacherCard.scss'
import Avatar from '../../UI/Avatar/Avatar'

const TeacherCard = ({ user, description }) => (
  <div className="teacher_card">
    <div className="teacher_card_content">
      <div className="teacher_card_avatar">
        <Avatar user={user && user} className="teacher_card_avatar_image" />
      </div>
      <div className="teacher_card_text">
        <span className="teacher_card_text_name">{user && user.username}</span>
        {description && <p className="teacher_card_text_description">{description}</p>}
      </div>
    </div>
  </div>
)

export default TeacherCard
