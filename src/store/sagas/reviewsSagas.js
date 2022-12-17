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
  fetchReviewFailure,
  fetchReviewRequest,
  fetchReviewsFailure,
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewSuccess,
} from '../actions/reviewsActions'

export function* fetchReviews() {
  try {
    const response = yield axiosApi(`/reviews`)
    yield put(fetchReviewsSuccess(response.data))
  } catch (e) {
    yield put(fetchReviewsFailure(e))
  }
}

export function* fetchReview({ payload: reviewId }) {
  try {
    const response = yield axiosApi(`/reviews/${reviewId}`)
    yield put(fetchReviewSuccess(response.data))
  } catch (e) {
    yield put(fetchReviewFailure(e))
  }
}

export function* createReview({ payload: reviewData }) {
  try {
    yield axiosApi.post(`/reviews`, reviewData)
    yield put(createReviewSuccess())
  } catch (e) {
    yield put(createReviewFailure(e))
  }
}

export function* editReview({ payload }) {
  const { reviewId, reviewData } = payload

  try {
    yield axiosApi.put(`/reviews/${reviewId}`, reviewData)
    yield put(editReviewSuccess())
  } catch (e) {
    yield put(editReviewFailure(e))
  }
}

export function* deleteReview({ payload }) {
  const { reviewId } = payload

  try {
    yield axiosApi.delete(`/reviews/${reviewId}`)
    yield put(deleteReviewSuccess())
  } catch (e) {
    yield put(deleteReviewFailure(e))
  }
}

const reviewsSagas = [
  takeEvery(fetchReviewsRequest, fetchReviews),
  takeEvery(fetchReviewRequest, fetchReview),
  takeEvery(createReviewRequest, createReview),
  takeEvery(editReviewRequest, editReview),
  takeEvery(deleteReviewRequest, deleteReview),
]

export default reviewsSagas
