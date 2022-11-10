import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlices'

const rootReducer = combineReducers({
  users: usersSlice.reducer,
})

export default rootReducer
