import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createLessonFailure,
  createLessonRequest,
  createLessonSuccess,
  deleteLessonFailure,
  deleteLessonSuccess,
  editLessonFailure,
  editLessonRequest,
  editLessonSuccess,
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

export function* editLesson({ payload }) {
  const { courseId, lessonId, data } = payload

  try {
    yield axiosApi.put(`/lessons/${lessonId}?course=${courseId}`, data)
    yield put(editLessonSuccess())
    yield put(fetchLessonRequest(lessonId))
  } catch (e) {
    yield put(editLessonFailure(e))
  }
}

export function* deleteLesson({ payload: lessonId }) {
  try {
    yield axiosApi.delete(`/lessons/${lessonId}`)
    yield put(deleteLessonSuccess())
    yield put(fetchLessonRequest(lessonId))
  } catch (e) {
    yield put(deleteLessonFailure(e))
  }
}

const lessonsSagas = [
  takeEvery(fetchLessonRequest, fetchLesson),
  takeEvery(createLessonRequest, createLesson),
  takeEvery(editLessonRequest, editLesson),
]

export default lessonsSagas
