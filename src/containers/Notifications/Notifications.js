import React, { useEffect, useState } from 'react'
import './Notifications.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotificationsRequest } from '../../store/actions/notificationsActions'

const Notifications = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const notifications = useSelector(state => state.notifications.notifications)
  const [active, setActive] = useState(true)
  const [viewStatus, setViewStatus] = useState(true)

  useEffect(() => {
    if (user) dispatch(fetchNotificationsRequest(user._id))
  }, [dispatch, user])

  const onActiveBtn = () => {
    setActive(!active)
    setViewStatus(!viewStatus)
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
      {/* eslint-disable-next-line no-nested-ternary */}
      {active && notifications
        ? notifications.map(notific =>
            notific.view ? (
              <div className="notifications-card__textBlock">
                <p className="notifications-card__textBlock__text">{notific.description}</p>
              </div>
            ) : null,
          )
        : notifications
        ? notifications.map(notific =>
            notific.view === false ? (
              <div className="notifications-card__textBlock">
                <p className="notifications-card__textBlock__text">{notific.description}</p>
              </div>
            ) : null,
          )
        : null}
    </div>
  )
}

export default Notifications
