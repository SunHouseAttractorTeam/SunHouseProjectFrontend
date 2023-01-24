import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from 'sweetalert2'
import axiosApi from '../../axiosApi'
import {
  clearLesson,
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

const Toast = Swal.mixin({
  toast: true,
  icon: 'success',
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
})

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

    yield Toast.fire({
      title: 'Занятие успешно создано',
    })
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
    yield put(clearLesson())
    yield put(fetchLessonRequest(contentId))

    yield Toast.fire({
      title: 'Занятие успешно изменено',
    })
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

    yield Toast.fire({
      title: 'Занятие успешно удалено',
    })
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
