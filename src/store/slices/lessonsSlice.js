import { createSlice } from '@reduxjs/toolkit'

const name = 'lessons'

export const initialState = {
  lesson: null,
  loading: false,
  error: null,
}

const lessonsSlice = createSlice({
  name,
  initialState,
  reducers: {
    createLessonRequest(state) {
      state.loading = true
      state.error = null
    },
    createLessonSuccess(state) {
      state.loading = false
    },
    createLessonFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default lessonsSlice
