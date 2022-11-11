import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'
import coursesSlice from './slices/coursesSlice'
import categoriesSlice from './slices/categoriesSlice'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  courses: coursesSlice.reducer,
  categories: categoriesSlice.reducer,
})

export default rootReducer
