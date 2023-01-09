import { createSlice } from '@reduxjs/toolkit'

const name = 'rating'

export const initialState = {
  ratingForm: [],
  loading: false,
  error: null,
}

const ratingSlice = createSlice({
  name,
  initialState,
  reducers: {
    createRatingRequest(state) {
      state.loading = true
      state.error = null
    },
    createRatingSuccess(state) {
      state.loading = false
    },
    createRatingFailure(state, action) {
      state.loading = true
      state.error = action.payload
    },
  },
})

export default ratingSlice
