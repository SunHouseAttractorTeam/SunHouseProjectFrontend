import coursesSlice from '../slices/coursesSlice'

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  fetchCourseRequest,
  fetchCourseSuccess,
  fetchCourseFailure,
  createCourseRequest,
  createCourseSuccess,
  createCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFailure,
} = coursesSlice.actions
