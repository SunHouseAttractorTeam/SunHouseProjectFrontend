import React from 'react'
import './ReviewCard.scss'

const ReviewCard = ({ img, name, content, social }) => (
  <div className="review_card">
    <div className="review_card_info">
      <div className="review_card_info_img">{img && <img src={img} alt={name} />}</div>
      <div className="review_card_info_content">
        <p className="review_card_info_content_name">{name}</p>
        <p className="review_card_info_content_social">{social}</p>
      </div>
    </div>
    <div className="review_card_content">
      <p className="review_card_content-text">{content}</p>
    </div>
  </div>
)

export default ReviewCard
