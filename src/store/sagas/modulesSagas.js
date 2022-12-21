import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createModuleFailure,
  createModuleRequest,
  createModuleSuccess,
  fetchModuleSuccess,
  fetchModuleRequest,
  fetchModuleFailure,
  fetchModulesRequest,
  fetchModulesSuccess,
  fetchModulesFailure,
} from '../actions/modulesActions'
import { fetchCourseRequest } from '../actions/coursesActions'

export function* createModule({ payload }) {
  const { id, moduleData } = payload

  try {
    yield axiosApi.post(`/modules?course=${id}`, moduleData)
    yield put(createModuleSuccess())
    yield put(fetchCourseRequest(id))
  } catch (e) {
    yield put(createModuleFailure(e))
  }
}

export function* fetchModules() {
  try {
    const response = yield axiosApi(`/modules`)
    yield put(fetchModulesSuccess(response.data))
  } catch (e) {
    yield put(fetchModulesFailure(e))
  }
}

export function* fetchModule({ payload: id }) {
  try {
    const response = yield axiosApi(`/modules/${id}`)
    yield put(fetchModuleSuccess(response.data))
  } catch (e) {
    yield put(fetchModuleFailure(e))
  }
}

const modulesSagas = [
  takeEvery(createModuleRequest, createModule),
  takeEvery(fetchModuleRequest, fetchModule),
  takeEvery(fetchModulesRequest, fetchModules),
]

export default modulesSagas
