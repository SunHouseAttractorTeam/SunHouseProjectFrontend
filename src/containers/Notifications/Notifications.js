import React, { useEffect, useState } from 'react'
import './Notifications.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotificationsRequest } from '../../store/actions/notificationsActions'

const Notifications = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const notifications = useSelector(state => state.notifications.notifications)
  const [active, setActive] = useState(true)
  const [notificationState, setNotificationsState] = useState([])

  const [readMore, setReadMore] = useState(true)
  useEffect(() => {
    if (user) dispatch(fetchNotificationsRequest(user._id))
  }, [dispatch, user])

  const onActiveBtn = () => {
    setActive(!active)
  }

  const onReadMoreBtn = () => {
    setReadMore(!readMore)
  }

  return (
    <div className="notifications-card__content">
      <h2 className="notifications-card__title">Уведомления</h2>
      <div className="notifications-card__view-status">
        <button
          type="button"
          onClick={onActiveBtn}
          className={
            active ? 'notifications-card__view-status__view active' : 'notifications-card__view-status__unview'
          }
        >
          Просмотренные
        </button>
        <button
          type="button"
          onClick={onActiveBtn}
          className={
            active
              ? 'notifications-card__view-status__unview  new-notifications'
              : 'notifications-card__view-status__unview active new-notifications'
          }
        >
          Непросмотренные
        </button>
      </div>
      <div className="notifications-card__textBlock">
        <p className={readMore ? 'notifications-card__textBlock__text hidden' : 'notifications-card__textBlock__text'}>
          Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу (специалистов)
          участие в формировании существенных финансовых и административных условий.kuggbhjjjjjjj
        </p>
        <button className="notifications-card__readBtn" onClick={onReadMoreBtn} id="myBtn">
          Read more
        </button>
      </div>
    </div>
  )
}

export default Notifications
