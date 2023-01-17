import { createSlice } from '@reduxjs/toolkit'

const name = 'courses'

export const initialState = {
  courses: [],
  course: null,
  loading: false,
  error: null,
  publishLoading: false,
  publishError: null,
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

    fetchTeacherCoursesRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchTeacherCoursesSuccess(state, action) {
      state.loading = false
      state.courses = action.payload
    },
    fetchTeacherCoursesFailure(state, action) {
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
    editCourseHeaderImageRequest(state) {
      state.error = null
    },
    editCourseHeaderImageSuccess() {},
    editCourseHeaderImageFailure(state, action) {
      state.loading = action.payload
    },
    addUsersCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    addUsersCourseSuccess(state) {
      state.loading = false
    },
    addUsersCourseFailure(state, action) {
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
    publishCourseRequest(state) {
      state.publishLoading = true
      state.publishError = null
    },
    publishCourseSuccess(state) {
      state.publishLoading = false
      state.publishError = null
    },
    publishCourseFailure(state, action) {
      state.publishLoading = false
      state.publishError = action.payload
    },
    visibilityRequest(state) {
      state.loading = true
      state.error = null
    },
    visibilitySuccess(state) {
      state.loading = true
    },
    visibilityFailure(state, action) {
      state.loading = true
      state.error = action.payload
    },
    joinTheCourseRequest(state) {
      state.loading = true
      state.error = null
    },
    joinTheCourseSuccess(state) {
      state.loading = true
    },
    joinTheCourseFailure(state, action) {
      state.loading = true
      state.error = action.payload
    },
    clearCourse(state) {
      state.course = null
    },
    clearCourses(state) {
      state.courses = []
    },
  },
})

export default coursesSlice
