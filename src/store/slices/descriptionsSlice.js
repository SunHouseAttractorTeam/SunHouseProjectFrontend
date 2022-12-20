import { createSlice } from '@reduxjs/toolkit'

const name = 'events'

export const initialState = {
  descriptions: {},
  updateEventLoading: false,
  updateEventError: null,
  fetchEventLoading: false,
  fetchEventError: null,
}

const descriptionSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateDescriptionRequest(state, action) {
      state.updateDescriptionLoading = true
      state.updateDescriptionError = null
    },
    updateDescriptionSuccess(state, { payload: updatedDescription }) {
      state.updateDescriptionLoading = false
      state.descriptions[updatedDescription.section] = updatedDescription.text
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
      state.descriptions = action.payload
    },
    fetchDescriptionFailure(state, action) {
      state.fetchDescriptionLoading = false
      state.fetchDescriptionError = action.payload
    },
  },
})

export default descriptionSlice
