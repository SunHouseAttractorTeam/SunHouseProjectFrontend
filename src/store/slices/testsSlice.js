import { createSlice } from '@reduxjs/toolkit'

const name = 'tests'

export const initialState = {
  test: null,
  loading: false,
  error: null,
}

const testsSlice = createSlice({
  name,
  initialState,
  reducers: {
    createTestRequest(state) {
      state.loading = true
      state.error = null
    },
    createTestSuccess(state) {
      state.loading = false
    },
    createTestFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default testsSlice
