import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import { createModuleFailure, createModuleRequest, createModuleSuccess } from '../actions/modulesActions'
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

const modulesSagas = [takeEvery(createModuleRequest, createModule)]

export default modulesSagas
