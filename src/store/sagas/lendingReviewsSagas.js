import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import {
  createReviewFailure,
  createReviewRequest,
  createReviewSuccess,
  deleteReviewFailure,
  deleteReviewRequest,
  deleteReviewSuccess,
  fetchReviewsFailure,
  fetchReviewsRequest,
  fetchReviewsSuccess,
} from '../actions/lendingReviewsActions'
import { historyPush } from '../actions/historyActions'

export function* fetchReviews() {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/lending_reviews`)
    yield put(fetchReviewsSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchReviewsFailure(e))
  }
}

export function* createReview({ payload: reviewData }) {
  try {
    yield put(showLoading())
    yield axiosApi.post(`/lending_reviews`, reviewData)
    yield put(createReviewSuccess())
    yield put(hideLoading())
    yield put(historyPush('/'))
  } catch (e) {
    yield put(createReviewFailure(e))
  }
}

export function* deleteReview({ payload }) {
  const { reviewId } = payload

  try {
    yield put(showLoading())
    yield axiosApi.delete(`/lending_reviews/${reviewId}`)
    yield put(deleteReviewSuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(deleteReviewFailure(e))
  }
}

const lendingReviewsSagas = [
  takeEvery(fetchReviewsRequest, fetchReviews),
  takeEvery(createReviewRequest, createReview),
  takeEvery(deleteReviewRequest, deleteReview),
]

export default lendingReviewsSagas
