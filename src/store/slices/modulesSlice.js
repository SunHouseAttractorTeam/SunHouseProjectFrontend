import { createSlice } from '@reduxjs/toolkit'

const name = 'modules'

export const initialState = {
  module: null,
  modules: [],
  loading: false,
  error: null,
}

const modulesSlice = createSlice({
  name,
  initialState,
  reducers: {
    createModuleRequest(state) {
      state.loading = true
      state.error = null
    },
    createModuleSuccess(state) {
      state.loading = false
    },
    createModuleFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    fetchModulesRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchModulesSuccess(state, action) {
      state.loading = false
      state.modules = action.payload
    },
    fetchModulesFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    fetchModuleRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchModuleSuccess(state, action) {
      state.loading = true
      state.module = action.payload
    },
    fetchModuleFailure(state, action) {
      state.loading = true
      state.error = action.payload
    },
  },
})

export default modulesSlice
