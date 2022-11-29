import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createCourseFailure,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  fetchCourseFailure,
  fetchCourseRequest,
  fetchCoursesFailure,
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCourseSuccess,
  fetchUserCoursesFailure,
  fetchUserCoursesRequest,
  fetchUserCoursesSuccess,
  updateCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
} from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

export function* fetchCourses() {
  try {
    const response = yield axiosApi('/courses')
    yield put(fetchCoursesSuccess(response.data))
  } catch (e) {
    yield put(fetchCoursesFailure(e))
  }
}

export function* fetchCourse({ payload: id }) {
  try {
    const response = yield axiosApi(`/courses/${id}`)
    yield put(fetchCourseSuccess(response.data))
  } catch (e) {
    yield put(fetchCourseFailure(e))
  }
}

export function* fetchUserCourses({ payload: userId }) {
  try {
    const response = yield axiosApi(`/courses?user=${userId}`)
    yield put(fetchUserCoursesSuccess(response.data))
  } catch (e) {
    yield put(fetchUserCoursesFailure(e))
  }
}

export function* createCourse({ payload: courseData }) {
  try {
    const response = yield axiosApi.post('/courses', courseData)
    yield put(createCourseSuccess())

    yield historyPush(`/course/${response.data._id}`)
  } catch (e) {
    yield put(createCourseFailure(e))
  }
}

export function* updateCourse({ payload }) {
  const { courseData, id } = payload

  try {
    yield axiosApi.put(`/courses/${id}`, courseData)
    yield put(updateCourseSuccess())
    yield put(fetchCourseRequest(id))

    yield put(historyPush(`/course/${id}`))
  } catch (e) {
    yield put(updateCourseFailure(e))
  }
}

export function* deleteCourse({ payload: id }) {
  try {
    yield axiosApi.delete(`/courses/${id}`)
    yield put(deleteCourseSuccess())
  } catch (e) {
    yield put(deleteCourseFailure(e))
  }
}

const coursesSagas = [
  takeEvery(fetchCoursesRequest, fetchCourses),
  takeEvery(fetchCourseRequest, fetchCourse),
  takeEvery(fetchUserCoursesRequest, fetchUserCourses),
  takeEvery(createCourseRequest, createCourse),
  takeEvery(updateCourseRequest, updateCourse),
  takeEvery(deleteCourseRequest, deleteCourse),
]

export default coursesSagas
