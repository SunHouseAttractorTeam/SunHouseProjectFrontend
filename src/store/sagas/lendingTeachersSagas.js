import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import {
  deleteTeachersFailure,
  deleteTeachersRequest,
  deleteTeachersSuccess,
  fetchTeachersFailure,
  fetchTeachersRequest,
  fetchTeachersSuccess,
} from '../actions/lendingTeachersActions'

export function* fetchTeachersSaga() {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/lending_teachers`)
    yield put(fetchTeachersSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(hideLoading())
    yield put(fetchTeachersFailure(e))
  }
}

export function* deleteTeachersSaga({ payload: id }) {
  try {
    axiosApi.delete(`/lending_teachers/${id}`)
    yield put(deleteTeachersSuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(hideLoading())
    yield put(deleteTeachersFailure(e))
  }
}

const lendingTeachersSagas = [
  takeEvery(fetchTeachersRequest, fetchTeachersSaga),
  takeEvery(deleteTeachersRequest, deleteTeachersSaga),
]

export default lendingTeachersSagas
