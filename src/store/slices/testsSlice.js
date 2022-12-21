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
    fetchTestRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchTestSuccess(state, { payload: test }) {
      state.loading = false
      state.test = test
    },
    fetchTestFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
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
    editTestRequest(state) {
      state.loading = true
      state.error = null
    },
    editTestSuccess(state) {
      state.loading = false
    },
    editTestFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    editTestQuestionsRequest(state) {
      state.loading = true
      state.error = null
    },
    editTestQuestionsSuccess(state) {
      state.loading = false
    },
    editTestQuestionsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    deleteTestRequest(state) {
      state.loading = true
      state.error = null
    },
    deleteTestSuccess(state) {
      state.loading = false
    },
    deleteTestFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default testsSlice
