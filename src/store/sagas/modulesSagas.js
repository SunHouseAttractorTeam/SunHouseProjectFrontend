import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
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
  } catch (e) {
    yield put(createModuleFailure(e))
  }
}

const modulesSagas = [takeEvery(createModuleRequest, createModule)]

export default modulesSagas
