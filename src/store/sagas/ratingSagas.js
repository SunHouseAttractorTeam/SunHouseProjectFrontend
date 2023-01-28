// import { put, takeEvery } from 'redux-saga/effects'
// import { hideLoading, showLoading } from 'react-redux-loading-bar'
// import axiosApi from '../../axiosApi'
// import { createRatingFailure, createRatingRequest, createRatingSuccess } from '../actions/ratingActions'
//
// export function* createRating({ payload: { courseId, data } }) {
//   try {
//     yield put(showLoading())
//     const response = yield axiosApi.post(`/courses/${courseId}/rating_course`, data)
//     yield put(createRatingSuccess(response.data))
//     yield put(hideLoading())
//   } catch (e) {
//     yield put(createRatingFailure(e))
//   }
// }
//
// const ratingSagas = [takeEvery(createRatingRequest, createRating)]
//
// export default ratingSagas
