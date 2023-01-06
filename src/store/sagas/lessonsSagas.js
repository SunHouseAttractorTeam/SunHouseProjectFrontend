import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import {
  createLessonFailure,
  createLessonRequest,
  createLessonSuccess,
  deleteLessonFailure,
  deleteLessonRequest,
  deleteLessonSuccess,
  editLessonFailure,
  editLessonRequest,
  editLessonSuccess,
  fetchLessonFailure,
  fetchLessonRequest,
  fetchLessonSuccess,
} from '../actions/lessonsActions'
import { fetchCourseRequest } from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

export function* fetchLesson({ payload: id }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/lessons/${id}`)
    yield put(fetchLessonSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchLessonFailure(e))
  }
}

export function* createLesson({ payload }) {
  const { courseId, moduleId, lessonData } = payload

  try {
    yield put(showLoading())
    const response = yield axiosApi.post(`/lessons?module=${moduleId}`, lessonData)
    yield put(createLessonSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit/lesson/${response.data._id}`))
  } catch (e) {
    yield put(createLessonFailure(e))
  }
}

export function* editLesson({ payload }) {
  const { courseId, contentId, data } = payload

  try {
    yield put(showLoading())
    yield axiosApi.put(`/lessons/${contentId}?course=${courseId}`, data)
    yield put(editLessonSuccess())
    yield put(hideLoading())
    yield put(fetchLessonRequest(contentId))
  } catch (e) {
    yield put(editLessonFailure(e))
  }
}

export function* deleteLesson({ payload }) {
  const { lessonId, courseId } = payload

  try {
    yield put(showLoading())
    yield axiosApi.delete(`/lessons/${lessonId}?course=${courseId}`)
    yield put(deleteLessonSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit`))
  } catch (e) {
    yield put(deleteLessonFailure(e))
  }
}

const lessonsSagas = [
  takeEvery(fetchLessonRequest, fetchLesson),
  takeEvery(createLessonRequest, createLesson),
  takeEvery(editLessonRequest, editLesson),

  takeEvery(deleteLessonRequest, deleteLesson),
]

export default lessonsSagas
