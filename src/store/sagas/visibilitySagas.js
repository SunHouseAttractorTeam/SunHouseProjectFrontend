import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import { editVisibilityFailure, editVisibilityRequest, editVisibilitySuccess } from '../actions/visibilityActions'
import { fetchCourse } from './coursesSagas'

export function* editVisibility({ payload, id, idContent }) {
  const { data } = payload
  try {
    yield axiosApi.patch(`/courses/${id}/visible?content=${idContent}`, data)
    yield put(editVisibilitySuccess())
    yield put(fetchCourse(id))
  } catch (e) {
    yield put(editVisibilityFailure(e))
  }
}

const visibilitySagas = [takeEvery(editVisibilityRequest, editVisibility)]

export default visibilitySagas
