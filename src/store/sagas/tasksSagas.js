import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import { createTaskFailure, createTaskRequest, createTaskSuccess } from '../actions/tasksActions'
import { fetchCourseRequest } from '../actions/coursesActions'

export function* createTask({ payload }) {
  const { courseId, moduleId, taskData } = payload

  try {
    yield axiosApi.post(`/tasks?module=${moduleId}`, taskData)
    yield put(createTaskSuccess())
    yield put(fetchCourseRequest(courseId))
  } catch (e) {
    yield put(createTaskFailure(e))
  }
}

const tasksSagas = [takeEvery(createTaskRequest, createTask)]

export default tasksSagas
