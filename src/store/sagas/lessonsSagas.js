import { put, takeEvery } from 'redux-saga/effects'
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
    const response = yield axiosApi(`/lessons/${id}`)
    yield put(fetchLessonSuccess(response.data))
  } catch (e) {
    yield put(fetchLessonFailure(e))
  }
}

export function* createLesson({ payload }) {
  const { courseId, moduleId, lessonData } = payload

  try {
    const response = yield axiosApi.post(`/lessons?module=${moduleId}`, lessonData)
    yield put(createLessonSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(historyPush(`/course/${courseId}/edit/lesson/${response.data._id}`))
  } catch (e) {
    yield put(createLessonFailure(e))
  }
}

export function* editLesson({ payload }) {
  const { courseId, contentId, data } = payload

  try {
    yield axiosApi.put(`/lessons/${contentId}?course=${courseId}`, data)
    yield put(editLessonSuccess())
    yield put(fetchLessonRequest(contentId))
  } catch (e) {
    yield put(editLessonFailure(e))
  }
}

export function* deleteLesson({ payload }) {
  const { lessonId, courseId } = payload

  try {
    yield axiosApi.delete(`/lessons/${lessonId}`)
    yield put(deleteLessonSuccess())
    yield put(fetchCourseRequest(courseId))
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
