import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import { createTestFailure, createTestRequest, createTestSuccess } from '../actions/testsActions'
import { fetchCourseRequest } from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

export function* createTest({ payload }) {
  const { courseId, moduleId, testData } = payload

  try {
    const response = yield axiosApi.post(`/tests?module=${moduleId}`, testData)
    yield put(createTestSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(historyPush(`/course/${courseId}/edit/test/${response.data._id}`))
  } catch (e) {
    yield put(createTestFailure(e))
  }
}

const testsSagas = [takeEvery(createTestRequest, createTest)]

export default testsSagas
