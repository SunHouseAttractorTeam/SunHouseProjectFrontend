import coursesSlice from '../slices/coursesSlice'

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  fetchCourseRequest,
  fetchCourseSuccess,
  fetchCourseFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  publishCourseRequest,
  publishCourseSuccess,
  publishCourseFailure,
  fetchUserCoursesRequest,
  fetchUserCoursesSuccess,
  fetchUserCoursesFailure,
  createCourseRequest,
  createCourseSuccess,
  createCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
  updateCourseFailure,
  editCourseHeaderImageRequest,
  editCourseHeaderImageSuccess,
  editCourseHeaderImageFailure,
  addUsersCourseRequest,
  addUsersCourseSuccess,
  addUsersCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFailure,
  clearCourse,
} = coursesSlice.actions
