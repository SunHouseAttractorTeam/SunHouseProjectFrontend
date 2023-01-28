import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from "sweetalert2";
import axiosApi from '../../axiosApi'
import {
  createTeachersFailure,
  createTeachersRequest,
  createTeachersSuccess,
  deleteTeachersFailure,
  deleteTeachersRequest,
  deleteTeachersSuccess,
  fetchTeachersFailure,
  fetchTeachersRequest,
  fetchTeachersSuccess,
} from '../actions/lendingTeachersActions'


const Toast = Swal.mixin({
  toast: true,
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
})

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

export function* createTeachersSaga({ payload: data }) {
  try {
    yield put(showLoading())
    yield axiosApi.post('/lending_teachers', data)
    yield put(createTeachersSuccess())
    yield put(hideLoading())
    yield put(fetchTeachersRequest())
    yield Toast.fire({
      icon: 'success',
      title: 'Создано',
    })
  } catch (e) {
    yield put(hideLoading())
    yield put(createTeachersFailure(e))
  }
}

export function* deleteTeachersSaga({ payload: id }) {
  try {
    yield axiosApi.delete(`/lending_teachers/${id}`)
    yield put(deleteTeachersSuccess())
    yield put(hideLoading())
    yield put(fetchTeachersRequest())
  } catch (e) {
    yield put(hideLoading())
    yield put(deleteTeachersFailure(e))
  }
}

const lendingTeachersSagas = [
  takeEvery(fetchTeachersRequest, fetchTeachersSaga),
  takeEvery(deleteTeachersRequest, deleteTeachersSaga),
  takeEvery(createTeachersRequest, createTeachersSaga),
]

export default lendingTeachersSagas
