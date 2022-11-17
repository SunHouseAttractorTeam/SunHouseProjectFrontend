import React from 'react'
import './Notifications.scss'

const Notifications = () => (
  <div className="notifications-card__content">
    <h2 className="notifications-card__title">Уведомления</h2>
    <div className="notifications-card__view-status">
      <button className="notifications-card__view-status__view active">Просмотренные</button>
      <button className="notifications-card__view-status__unview new-notifications">Непросмотренные</button>
    </div>
    <p className="notifications-card__text">
      Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие
      в формировании существенных финансовых и административных условий.
    </p>
  </div>
)

export default Notifications
