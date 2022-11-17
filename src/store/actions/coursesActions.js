import coursesSlice from '../slices/coursesSlice'

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  fetchCourseRequest,
  fetchCourseSuccess,
  fetchCourseFailure,
  fetchUserCoursesRequest,
  fetchUserCoursesSuccess,
  fetchUserCoursesFailure,
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
