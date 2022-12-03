import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  addContentInLessonFailure,
  addContentInLessonRequest,
  addContentInLessonSuccess,
  createLessonFailure,
  createLessonRequest,
  createLessonSuccess,
  fetchLessonFailure,
  fetchLessonRequest,
  fetchLessonSuccess,
} from '../actions/lessonsActions'
import { fetchCourseRequest } from '../actions/coursesActions'

export function* fetchLesson({ payload: id }) {
  try {
    const response = yield axiosApi(`/lessons/${id}`)
    yield put(fetchLessonSuccess(response.data))
  } catch (e) {
    yield put(fetchLessonFailure(e))
  }
}

export function* createLesson({ payload }) {
  const { courseId, moduleId, lessonData } = payload

  try {
    yield axiosApi.post(`/lessons?module=${moduleId}`, lessonData)
    yield put(createLessonSuccess())
    yield put(fetchCourseRequest(courseId))
  } catch (e) {
    yield put(createLessonFailure(e))
  }
}

export function* addContentInLesson({ payload }) {
  const { lessonId, type } = payload

  try {
    yield axiosApi.put(`/lessons/${lessonId}?type=${type}`)
    yield put(addContentInLessonSuccess())
    yield put(fetchLessonRequest(lessonId))
  } catch (e) {
    yield put(addContentInLessonFailure(e))
  }
}

const lessonsSagas = [
  takeEvery(fetchLessonRequest, fetchLesson),
  takeEvery(createLessonRequest, createLesson),
  takeEvery(addContentInLessonRequest, addContentInLesson),
]

export default lessonsSagas
