import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'
import coursesSlice from './slices/coursesSlice'
import categoriesSlice from './slices/categoriesSlice'
import lessonsSlice from './slices/lessonsSlice'
import notificationsSlice from './slices/notificationsSlice'
import reviewsSlice from './slices/reviewsSlice'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  courses: coursesSlice.reducer,
  categories: categoriesSlice.reducer,
  lessons: lessonsSlice.reducer,
  notifications: notificationsSlice.reducer,
  reviews: reviewsSlice.reducer,
})

export default rootReducer
