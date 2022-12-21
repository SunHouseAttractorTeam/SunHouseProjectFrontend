import reviewsSlice from '../slices/reviewsSlice'

export const {
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
  fetchReviewRequest,
  fetchReviewSuccess,
  fetchReviewFailure,
  createReviewRequest,
  createReviewSuccess,
  createReviewFailure,
  editReviewRequest,
  editReviewSuccess,
  editReviewFailure,
  deleteReviewRequest,
  deleteReviewSuccess,
  deleteReviewFailure,
} = reviewsSlice.actions
