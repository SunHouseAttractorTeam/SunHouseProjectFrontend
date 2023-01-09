import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import { historyPush } from '../actions/historyActions'
import { createRatingFailure, createRatingRequest, createRatingSuccess } from '../actions/ratingActions'

export function* createRating({ payload: data }) {
  try {
    yield put(showLoading())
    yield axiosApi.post(`/`, data)
    yield put(createRatingSuccess())
    yield put(hideLoading())
    yield put(historyPush('/'))
  } catch (e) {
    yield put(createRatingFailure(e))
  }
}

const ratingSagas = [takeEvery(createRatingRequest, createRating)]

export default ratingSagas
