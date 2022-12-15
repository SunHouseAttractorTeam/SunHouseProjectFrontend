import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'
import coursesSlice from './slices/coursesSlice'
import categoriesSlice from './slices/categoriesSlice'
import lessonsSlice from './slices/lessonsSlice'
import tasksSlice from './slices/tasksSlice'
import testsSlice from './slices/testsSlice'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  courses: coursesSlice.reducer,
  categories: categoriesSlice.reducer,
  lessons: lessonsSlice.reducer,
  tasks: tasksSlice.reducer,
  tests: testsSlice.reducer,
})

export default rootReducer
