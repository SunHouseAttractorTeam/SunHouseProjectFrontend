import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from 'sweetalert2'
import axiosApi from '../../axiosApi'
import {
  addUsersCourseFailure,
  addUsersCourseRequest,
  addUsersCourseSuccess,
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
  publishCourseFailure,
  publishCourseRequest,
  publishCourseSuccess,
  updateCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
} from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

export function* fetchCourses() {
  try {
    yield put(showLoading())
    const response = yield axiosApi('/courses')
    yield put(fetchCoursesSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchCoursesFailure(e))
  }
}

export function* fetchCourse({ payload: id }) {
  try {
    yield put(showLoading())

    const response = yield axiosApi(`/courses/${id}`)
    yield put(fetchCourseSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchCourseFailure(e))
  }
}

export function* fetchUserCourses({ payload: userId }) {
  try {
    yield put(showLoading())

    const response = yield axiosApi(`/courses?user=${userId}`)
    yield put(fetchUserCoursesSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchUserCoursesFailure(e))
  }
}

export function* createCourse({ payload: courseData }) {
  try {
    yield put(showLoading())

    const response = yield axiosApi.post('/courses', courseData)
    yield put(createCourseSuccess())

    yield put(hideLoading())
    yield put(fetchCoursesRequest())
    yield historyPush(`/course/${response.data._id}`)

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Вы успешно создали курс',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(createCourseFailure(e.response.data))
    }
  }
}

export function* publishCourse({ payload: id }) {
  try {
    yield put(showLoading())

    yield axiosApi.post(`/courses/${id}/publish`)
    yield put(publishCourseSuccess())
    yield put(hideLoading())
    yield put(fetchCoursesRequest())

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Курс успешно опубликован',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    yield put(publishCourseFailure(e))
  }
}

export function* updateCourse({ payload }) {
  const { courseData, id } = payload

  try {
    yield put(showLoading())

    yield axiosApi.put(`/courses/${id}`, courseData)
    yield put(updateCourseSuccess())
    yield put(fetchCourseRequest(id))
    yield put(hideLoading())

    yield put(historyPush(`/course/${id}`))

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Курс успешно изменён',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    yield put(updateCourseFailure(e))
  }
}

export function* addUsersCourse({ payload }) {
  const { idCourse, idUser, role } = payload
  yield put(showLoading())

  try {
    if (role === 'teachers') {
      yield axiosApi.put(`/courses/add?course=${idCourse}&owner=${idUser}`)
    }
    if (role === 'users') {
      yield axiosApi.put(`/courses/add?course=${idCourse}&user=${idUser}`)
    }

    yield put(hideLoading())
    yield put(addUsersCourseSuccess())
  } catch (e) {
    yield put(addUsersCourseFailure(e))
  }
}

export function* deleteCourse({ payload: id }) {
  try {
    yield put(showLoading())

    yield axiosApi.delete(`/courses/${id}`)
    yield put(deleteCourseSuccess())
    yield put(hideLoading())

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Курс успешно удалён',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    yield put(deleteCourseFailure(e))
  }
}

const coursesSagas = [
  takeEvery(fetchCoursesRequest, fetchCourses),
  takeEvery(publishCourseRequest, publishCourse),
  takeEvery(fetchCourseRequest, fetchCourse),
  takeEvery(fetchUserCoursesRequest, fetchUserCourses),
  takeEvery(createCourseRequest, createCourse),
  takeEvery(updateCourseRequest, updateCourse),
  takeEvery(addUsersCourseRequest, addUsersCourse),
  takeEvery(deleteCourseRequest, deleteCourse),
]

export default coursesSagas
