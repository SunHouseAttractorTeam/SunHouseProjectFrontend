import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
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
import visibilitySlice from './slices/visibilitySlice'

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
  visibility: visibilitySlice.reducer,
  loadingBar: loadingBarReducer,
})

export default rootReducer
