import { createSlice } from '@reduxjs/toolkit'

const name = 'visibility'

export const initialState = {
  visibility: false,
  loading: false,
  error: null,
}

const visibilitySlice = createSlice({
  name,
  initialState,
  reducers: {
    editVisibilityRequest(state) {
      state.loading = true
      state.error = null
    },
    editVisibilitySuccess(state, { payload: visibility }) {
      state.loading = false
      state.visibility = visibility
    },
    editVisibilityFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default visibilitySlice
