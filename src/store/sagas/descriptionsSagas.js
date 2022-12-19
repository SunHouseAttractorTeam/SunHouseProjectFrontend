import { put, takeEvery } from 'redux-saga/effects'
import { historyPush } from '../actions/historyActions'

import axiosApi from '../../axiosApi'
import {
  fetchDescriptionFailure,
  fetchDescriptionRequest,
  fetchDescriptionSuccess,
  updateDescriptionFailure,
  updateDescriptionRequest,
  updateDescriptionSuccess,
} from '../actions/descriptionsActions'

export function* updateDescriptionSaga({ payload: data }) {
  try {
    const response = yield axiosApi.put(`/description/update/${data._id}`, { ...data })
    yield put(updateDescriptionSuccess(response.data))
    yield put(historyPush(`/`))
  } catch (e) {
    yield put(updateDescriptionFailure(e.response.data))
  }
}

export function* fetchDescriptionSaga({ payload: id }) {
  try {
    const response = yield axiosApi.get(`/descriptions/${id}`)
    yield put(fetchDescriptionSuccess(response.data))
  } catch (e) {
    yield put(fetchDescriptionFailure(e.response.data))
  }
}

const descriptionsSagas = [
  takeEvery(updateDescriptionRequest, updateDescriptionSaga),
  takeEvery(fetchDescriptionRequest, fetchDescriptionSaga),
]

export default descriptionsSagas
