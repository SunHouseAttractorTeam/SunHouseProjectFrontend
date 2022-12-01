import { createSlice } from '@reduxjs/toolkit'

const name = 'tasks'

export const initialState = {
  tasks: null,
  loading: false,
  error: null,
}

const tasksSlice = createSlice({
  name,
  initialState,
  reducers: {
    createTaskRequest(state) {
      state.loading = true
      state.error = null
    },
    createTaskSuccess(state) {
      state.loading = false
    },
    createTaskFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default tasksSlice
