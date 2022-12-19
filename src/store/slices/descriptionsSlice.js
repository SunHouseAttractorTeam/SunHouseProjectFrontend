import { createSlice } from '@reduxjs/toolkit'

const name = 'events'

export const initialState = {
  text: [],
  updateEventLoading: false,
  updateEventError: null,
  fetchEventLoading: false,
  fetchEventError: null,
}

const descriptionSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateDescriptionRequest(state) {
      state.updateDescriptionLoading = true
      state.updateDescriptionError = null
    },
    updateDescriptionSuccess(state, { payload: updatedDescription }) {
      state.updateDescriptionLoading = false
      state.text = updatedDescription
    },
    updateDescriptionFailure(state, action) {
      state.updateDescriptionLoading = false
      state.updateDescriptionError = action.payload
    },

    fetchDescriptionRequest(state) {
      state.fetchDescriptionLoading = true
      state.fetchDescriptionError = null
    },
    fetchDescriptionSuccess(state, action) {
      state.fetchDescriptionLoading = false
      state.text = action.payload
    },
    fetchDescriptionFailure(state, action) {
      state.fetchDescriptionLoading = false
      state.fetchDescriptionError = action.payload
    },
  },
})

export default descriptionSlice
