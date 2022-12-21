import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'
import coursesSlice from './slices/coursesSlice'
import categoriesSlice from './slices/categoriesSlice'
import lessonsSlice from './slices/lessonsSlice'
import tasksSlice from './slices/tasksSlice'
import testsSlice from './slices/testsSlice'
import descriptionsSlice from './slices/descriptionsSlice'
import notificationsSlice from './slices/notificationsSlice'
import lendingReviewsSlice from './slices/lendingReviewsSlice'
import modulesSlice from './slices/modulesSlice'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  courses: coursesSlice.reducer,
  categories: categoriesSlice.reducer,
  lessons: lessonsSlice.reducer,
  tasks: tasksSlice.reducer,
  tests: testsSlice.reducer,
  description: descriptionsSlice.reducer,
  notifications: notificationsSlice.reducer,
  reviews: lendingReviewsSlice.reducer,
  modules: modulesSlice.reducer,
})

export default rootReducer
