import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import { createLessonFailure, createLessonRequest, createLessonSuccess } from '../actions/lessonsActions'
import { fetchCourseRequest } from '../actions/coursesActions'

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

const lessonsSagas = [takeEvery(createLessonRequest, createLesson)]

export default lessonsSagas
