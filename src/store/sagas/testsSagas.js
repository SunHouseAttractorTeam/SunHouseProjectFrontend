import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import {
  createTestFailure,
  createTestRequest,
  createTestSuccess,
  deleteTestFailure,
  deleteTestRequest,
  deleteTestSuccess,
  editTestFailure,
  editTestQuestionsFailure,
  editTestQuestionsRequest,
  editTestQuestionsSuccess,
  editTestRequest,
  editTestSuccess,
  fetchTestFailure,
  fetchTestRequest,
  fetchTestSuccess,
} from '../actions/testsActions'
import { fetchCourseRequest } from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

export function* fetchTest({ payload: id }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/tests/${id}`)
    yield put(fetchTestSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchTestFailure(e))
  }
}

export function* createTest({ payload }) {
  const { courseId, moduleId, testData } = payload

  try {
    yield put(showLoading())
    const response = yield axiosApi.post(`/tests?module=${moduleId}`, testData)
    yield put(createTestSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit/test/${response.data._id}`))
  } catch (e) {
    yield put(createTestFailure(e))
  }
}

export function* editTest({ payload }) {
  const { courseId, contentId, data } = payload
  try {
    yield put(showLoading())
    yield axiosApi.put(`/tests/${contentId}?course=${courseId}`, data)
    yield put(editTestSuccess())
    yield put(fetchTestRequest(contentId))
    yield put(hideLoading())
  } catch (e) {
    yield put(editTestFailure(e))
  }
}

export function* editTestQuestions({ payload }) {
  const { courseId, contentId, questions } = payload
  try {
    yield put(showLoading())
    yield axiosApi.put(`/tests/${contentId}/questions?course=${courseId}`, questions)
    yield put(editTestQuestionsSuccess())
    yield put(fetchTestRequest(contentId))
    yield put(hideLoading())
  } catch (e) {
    yield put(editTestQuestionsFailure(e))
  }
}

export function* deleteTest({ payload }) {
  const { testId, courseId } = payload

  try {
    yield put(showLoading())
    yield axiosApi.delete(`/tests/${testId}`)
    yield put(deleteTestSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit`))
  } catch (e) {
    yield put(deleteTestFailure(e))
  }
}

const testsSagas = [
  takeEvery(createTestRequest, createTest),
  takeEvery(fetchTestRequest, fetchTest),
  takeEvery(editTestRequest, editTest),
  takeEvery(editTestQuestionsRequest, editTestQuestions),
  takeEvery(deleteTestRequest, deleteTest),
]

export default testsSagas
