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
  editCourseHeaderImageFailure,
  editCourseHeaderImageRequest,
  editCourseHeaderImageSuccess,
  fetchCourseFailure,
  fetchCourseRequest,
  fetchCoursesFailure,
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCourseSuccess,
  fetchUserCoursesFailure,
  fetchUserCoursesRequest,
  fetchUserCoursesSuccess,
  getUserFailure,
  getUserRequest,
  getUserSuccess,
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
    yield put(hideLoading())
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
    yield put(hideLoading())
  }
}

export function* getUser({ payload: email }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/users?email=${email}`)
    yield put(getUserSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(getUserFailure(e))
    yield put(hideLoading())
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
    yield put(hideLoading())
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
    yield put(createCourseFailure(e))
    yield put(hideLoading())
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
    yield put(hideLoading())
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
    yield put(hideLoading())
  }
}

export function* editCourseHeaderImageSaga({ payload }) {
  const { courseId, image } = payload

  try {
    yield put(showLoading())
    yield axiosApi.patch(`/courses/edit_image?course=${courseId}`, image)
    yield put(editCourseHeaderImageSuccess())
    yield put(hideLoading())
    yield put(fetchCourseRequest(courseId))

    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Шапка курса успешно изменена',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    yield put(editCourseHeaderImageFailure())
    yield put(hideLoading())
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
    yield put(hideLoading())
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
    yield put(hideLoading())
  }
}

const coursesSagas = [
  takeEvery(fetchCoursesRequest, fetchCourses),
  takeEvery(publishCourseRequest, publishCourse),
  takeEvery(fetchCourseRequest, fetchCourse),
  takeEvery(getUserRequest, getUser),
  takeEvery(fetchUserCoursesRequest, fetchUserCourses),
  takeEvery(createCourseRequest, createCourse),
  takeEvery(updateCourseRequest, updateCourse),
  takeEvery(editCourseHeaderImageRequest, editCourseHeaderImageSaga),
  takeEvery(addUsersCourseRequest, addUsersCourse),
  takeEvery(deleteCourseRequest, deleteCourse),
]

export default coursesSagas
