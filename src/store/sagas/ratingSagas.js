import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import { createRatingFailure, createRatingRequest, createRatingSuccess } from '../actions/ratingActions'

export function* createRating({ payload: data }) {
  try {
    yield put(showLoading())
    yield axiosApi.post(`/courses/rating_course`, data)
    yield put(createRatingSuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(createRatingFailure(e))
  }
}

const ratingSagas = [takeEvery(createRatingRequest, createRating)]

export default ratingSagas
