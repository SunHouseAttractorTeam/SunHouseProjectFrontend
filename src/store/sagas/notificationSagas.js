import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createNotificationFailure,
  createNotificationRequest,
  createNotificationSuccess,
  deleteNotificationFailure,
  deleteNotificationRequest,
  deleteNotificationSuccess,
  editNotificationFailure,
  editNotificationRequest,
  editNotificationSuccess,
  fetchNotificationFailure,
  fetchNotificationRequest,
  fetchNotificationsFailure,
  fetchNotificationsRequest,
  fetchNotificationsSuccess,
  fetchNotificationSuccess,
} from '../actions/notificationsActions'

export function* fetchNotifications() {
  try {
    const response = yield axiosApi(`/notifications`)
    yield put(fetchNotificationsSuccess(response.data))
  } catch (e) {
    yield put(fetchNotificationsFailure(e))
  }
}

export function* fetchNotification({ payload: id }) {
  try {
    const response = yield axiosApi(`/notifications/${id}`)
    yield put(fetchNotificationSuccess(response.data))
  } catch (e) {
    yield put(fetchNotificationFailure(e))
  }
}

export function* createNotification({ payload: notificationData }) {
  if (notificationData.email) {
    try {
      yield axiosApi.post(`/notifications`, notificationData)
      yield put(createNotificationSuccess())
    } catch (e) {
      yield put(createNotificationFailure(e))
    }
  } else {
    try {
      yield axiosApi.post(`/notifications?params=all`, notificationData)
      yield put(createNotificationSuccess())
    } catch (e) {
      yield put(createNotificationFailure(e))
    }
  }
}

export function* editNotification({ payload }) {
  const { id, notificationData } = payload

  try {
    yield axiosApi.put(`/notifications/${id}`, notificationData)
    yield put(editNotificationSuccess())
  } catch (e) {
    yield put(editNotificationFailure(e))
  }
}

export function* deleteNotification({ payload }) {
  const { notificationId } = payload

  try {
    yield axiosApi.delete(`/notifications/${notificationId}`)
    yield put(deleteNotificationSuccess())
  } catch (e) {
    yield put(deleteNotificationFailure(e))
  }
}

const notificationSagas = [
  takeEvery(fetchNotificationsRequest, fetchNotifications),
  takeEvery(fetchNotificationRequest, fetchNotification),
  takeEvery(createNotificationRequest, createNotification),
  takeEvery(editNotificationRequest, editNotification),
  takeEvery(deleteNotificationRequest, deleteNotification),
]

export default notificationSagas
