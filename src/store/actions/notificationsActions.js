import notificationsSlice from '../slices/notificationsSlice'

export const {
  fetchNotificationsRequest,
  fetchNotificationsSuccess,
  fetchNotificationsFailure,
  fetchNotificationRequest,
  fetchNotificationSuccess,
  fetchNotificationFailure,
  createNotificationRequest,
  createNotificationSuccess,
  createNotificationFailure,
  editNotificationRequest,
  editNotificationSuccess,
  editNotificationFailure,
  deleteNotificationRequest,
  deleteNotificationSuccess,
  deleteNotificationFailure,
} = notificationsSlice.actions
