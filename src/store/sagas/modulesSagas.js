import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from 'sweetalert2'
import axiosApi from '../../axiosApi'
import { createModuleFailure, createModuleRequest, createModuleSuccess } from '../actions/modulesActions'
import { fetchCourseRequest } from '../actions/coursesActions'

export function* createModule({ payload }) {
  const { id, moduleData } = payload

  try {
    yield put(showLoading())
    yield axiosApi.post(`/modules?course=${id}`, moduleData)
    yield put(createModuleSuccess())
    yield put(hideLoading())
    yield put(fetchCourseRequest(id))

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Модуль успешно создан',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    yield put(createModuleFailure(e))
  }
}

const modulesSagas = [takeEvery(createModuleRequest, createModule)]

export default modulesSagas
