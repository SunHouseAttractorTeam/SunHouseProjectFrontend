import React from 'react'
import { apiUrl } from '../../../config'

const LearnCardText = ({ title, description, image }) => (
  <div className="learn-plan-block__card">
    {image && (
      <div>
        <img src={typeof image === 'string' ? `${apiUrl}/${image}` : URL.createObjectURL(image)} alt={title} />
      </div>
    )}
    <div className="learn-plan-block__card-description">
      <p className="learn-plan-block__card-title">{title}</p>
      <p className="learn-plan-block__add-link">{description}</p>
    </div>
  </div>
)

export default LearnCardText
