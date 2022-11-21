import { createSlice } from '@reduxjs/toolkit'

const name = 'courses'

export const initialState = {
  courses: [],
  course: null,
  loading: false,
  error: null,
}

const coursesSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchCoursesRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchCoursesSuccess(state, action) {
      state.loading = false
      state.courses = action.payload
    },
    fetchCoursesFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    fetchCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchCourseSuccess(state, action) {
      state.loading = false
      state.course = action.payload
    },
    fetchCourseFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    fetchUserCoursesRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchUserCoursesSuccess(state, action) {
      state.loading = false
      state.courses = action.payload
    },
    fetchUserCoursesFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    createCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    createCourseSuccess(state) {
      state.loading = false
    },
    createCourseFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    updateCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    updateCourseSuccess(state) {
      state.loading = false
    },
    updateCourseFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    deleteCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    deleteCourseSuccess(state) {
      state.loading = false
    },
    deleteCourseFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default coursesSlice
