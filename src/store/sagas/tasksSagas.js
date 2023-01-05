import { put, takeEvery } from 'redux-saga/effects'
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

export function* fetchTask({ payload: id }) {
  try {
    const response = yield axiosApi(`/tasks/${id}`)
    yield put(fetchTaskSuccess(response.data))
  } catch (e) {
    yield put(fetchTaskFailure(e))
  }
}

export function* createTask({ payload }) {
  const { courseId, moduleId, taskData } = payload

  try {
    const response = yield axiosApi.post(`/tasks?module=${moduleId}`, taskData)
    yield put(createTaskSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(historyPush(`/course/${courseId}/edit/task/${response.data._id}`))
  } catch (e) {
    yield put(createTaskFailure(e))
  }
}

export function* editTask({ payload }) {
  const { courseId, contentId, data } = payload

  try {
    yield axiosApi.put(`/tasks/${contentId}?course=${courseId}`, data)
    yield put(editTaskSuccess())
    yield put(fetchTaskRequest(contentId))
  } catch (e) {
    yield put(editTaskFailure(e))
  }
}

export function* deleteTask({ payload }) {
  const { taskId, courseId } = payload

  try {
    yield axiosApi.delete(`/tasks/${taskId}?course=${courseId}`)
    yield put(deleteTaskSuccess())
    yield put(fetchCourseRequest(courseId))
    yield put(historyPush(`/course/${courseId}/edit`))
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
