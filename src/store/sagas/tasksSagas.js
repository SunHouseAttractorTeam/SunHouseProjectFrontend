import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import Swal from 'sweetalert2'
import axiosApi from '../../axiosApi'
import {
  createTaskFailure,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  editTaskFailure,
  editTaskRequest,
  editTaskSuccess,
  fetchTaskFailure,
  fetchTaskRequest,
  fetchTaskSuccess,
} from '../actions/tasksActions'
import { fetchCourseRequest } from '../actions/coursesActions'
import { historyPush } from '../actions/historyActions'

const Toast = Swal.mixin({
  toast: true,
  icon: 'success',
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
})

export function* fetchTask({ payload: id }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/tasks/${id}`)
    yield put(fetchTaskSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchTaskFailure(e))
  }
}

export function* createTask({ payload }) {
  const { courseId, moduleId, taskData } = payload

  try {
    yield put(showLoading())
    const response = yield axiosApi.post(`/tasks?module=${moduleId}`, taskData)
    yield put(createTaskSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit/task/${response.data._id}`))

    yield Toast.fire({
      title: 'Задание успешно создано',
    })
  } catch (e) {
    yield put(createTaskFailure(e))
  }
}

export function* editTask({ payload }) {
  const { courseId, contentId, data } = payload

  try {
    yield put(showLoading())
    yield axiosApi.put(`/tasks/${contentId}?course=${courseId}`, data)
    yield put(editTaskSuccess())
    yield put(hideLoading())
    yield put(fetchTaskRequest(contentId))

    yield Toast.fire({
      title: 'Задание успешно изменено',
    })
  } catch (e) {
    yield put(editTaskFailure(e))
  }
}

export function* deleteTask({ payload }) {
  const { taskId, courseId } = payload

  try {
    yield put(showLoading())
    yield axiosApi.delete(`/tasks/${taskId}?course=${courseId}`)
    yield put(deleteTaskSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(hideLoading())
    yield put(historyPush(`/course/${courseId}/edit`))

    yield Toast.fire({
      title: 'Задание успешно удалено',
    })
  } catch (e) {
    yield put(deleteTaskFailure(e))
  }
}

const tasksSagas = [
  takeEvery(createTaskRequest, createTask),
  takeEvery(fetchTaskRequest, fetchTask),
  takeEvery(editTaskRequest, editTask),
  takeEvery(deleteTaskRequest, deleteTask),
]

export default tasksSagas
