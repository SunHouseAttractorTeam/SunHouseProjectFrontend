import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from 'sweetalert2'
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
  sendTestAnswersFailure,
  sendTestAnswersRequest,
  sendTestAnswersSuccess,
} from '../actions/testsActions'
import { fetchCourseRequest } from '../actions/coursesActions'
import { loginUserSuccess } from '../actions/usersActions'
import { historyPush } from '../actions/historyActions'

const Toast = Swal.mixin({
  toast: true,
  icon: 'success',
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
})

export function* fetchTest({ payload: id }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/tests/${id}`)
    yield put(fetchTestSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchTestFailure(e))
    yield put(hideLoading())
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

    yield Toast.fire({
      title: 'Тест успешно создан',
    })
  } catch (e) {
    yield put(createTestFailure(e))
    yield put(hideLoading())
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

    yield Toast.fire({
      title: 'Тест успешно изменен',
    })
  } catch (e) {
    yield put(editTestFailure(e))
    yield put(hideLoading())
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
    yield put(hideLoading())
  }
}

export function* deleteTest({ payload }) {
  const { testId, courseId } = payload

  try {
    yield put(showLoading())
    yield axiosApi.delete(`/tests/${testId}?course=${courseId}`)
    yield put(deleteTestSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit`))

    yield Toast.fire({
      title: 'Тест успешно удален',
    })
  } catch (e) {
    yield put(deleteTestFailure(e))
    yield put(hideLoading())
  }
}

export function* sendTestAnswersSaga({ payload: { testId, state } }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi.patch(`/tests/${testId}`, { test: state })
    yield put(sendTestAnswersSuccess())
    yield put(loginUserSuccess(response.data))
    yield put(hideLoading())

    yield Toast.fire({
      title: 'Ответы успешно сохранены',
    })
  } catch (e) {
    yield put(sendTestAnswersFailure(e))
    yield put(hideLoading())
  }
}

const testsSagas = [
  takeEvery(createTestRequest, createTest),
  takeEvery(fetchTestRequest, fetchTest),
  takeEvery(editTestRequest, editTest),
  takeEvery(editTestQuestionsRequest, editTestQuestions),
  takeEvery(deleteTestRequest, deleteTest),
  takeEvery(sendTestAnswersRequest, sendTestAnswersSaga),
]

export default testsSagas
