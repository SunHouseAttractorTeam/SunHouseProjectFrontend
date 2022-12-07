import lessonsSlice from '../slices/lessonsSlice'

export const {
  fetchLessonRequest,
  fetchLessonSuccess,
  fetchLessonFailure,
  createLessonRequest,
  createLessonSuccess,
  createLessonFailure,
  addContentInLesson,
  changeLessonText,
  changeLessonAudio,
  editLessonRequest,
  editLessonSuccess,
  editLessonFailure,
} = lessonsSlice.actions
