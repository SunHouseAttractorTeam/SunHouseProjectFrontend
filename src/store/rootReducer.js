import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'
import coursesSlice from './slices/coursesSlice'
import categoriesSlice from './slices/categoriesSlice'
import lessonsSlice from './slices/lessonsSlice'
import tasksSlice from './slices/tasksSlice'
import testsSlice from './slices/testsSlice'
import notificationsSlice from './slices/notificationsSlice'
import lendingReviewsSlice from './slices/lendingReviewsSlice'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  courses: coursesSlice.reducer,
  categories: categoriesSlice.reducer,
  lessons: lessonsSlice.reducer,
  tasks: tasksSlice.reducer,
  tests: testsSlice.reducer,
  notifications: notificationsSlice.reducer,
  reviews: lendingReviewsSlice.reducer,
})

export default rootReducer
