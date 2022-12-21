import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createReviewFailure,
  createReviewRequest,
  createReviewSuccess,
  deleteReviewFailure,
  deleteReviewRequest,
  deleteReviewSuccess,
  editReviewFailure,
  editReviewRequest,
  editReviewSuccess,
  fetchReviewsFailure,
  fetchReviewsRequest,
  fetchReviewsSuccess,
} from '../actions/lendingReviewsActions'
import { historyPush } from '../actions/historyActions'

export function* fetchReviews() {
  try {
    const response = yield axiosApi(`/lending_reviews`)
    yield put(fetchReviewsSuccess(response.data))
  } catch (e) {
    yield put(fetchReviewsFailure(e))
  }
}

export function* createReview({ payload: reviewData }) {
  try {
    yield axiosApi.post(`/lending_reviews`, reviewData)
    yield put(createReviewSuccess())
    yield put(historyPush('/'))
  } catch (e) {
    yield put(createReviewFailure(e))
  }
}

export function* editReview({ payload }) {
  const { reviewId, reviewData } = payload

  try {
    yield axiosApi.put(`/lending_reviews/${reviewId}`, reviewData)
    yield put(editReviewSuccess())
  } catch (e) {
    yield put(editReviewFailure(e))
  }
}

export function* deleteReview({ payload }) {
  const { reviewId } = payload

  try {
    yield axiosApi.delete(`/lending_reviews/${reviewId}`)
    yield put(deleteReviewSuccess())
  } catch (e) {
    yield put(deleteReviewFailure(e))
  }
}

const lendingReviewsSagas = [
  takeEvery(fetchReviewsRequest, fetchReviews),
  takeEvery(createReviewRequest, createReview),
  takeEvery(editReviewRequest, editReview),
  takeEvery(deleteReviewRequest, deleteReview),
]

export default lendingReviewsSagas
