import lessonsSlice from '../slices/lessonsSlice'

export const {
  fetchLessonRequest,
  fetchLessonSuccess,
  fetchLessonFailure,
  createLessonRequest,
  createLessonSuccess,
  createLessonFailure,
  addContentInLessonRequest,
  addContentInLessonSuccess,
  addContentInLessonFailure,
} = lessonsSlice.actions
