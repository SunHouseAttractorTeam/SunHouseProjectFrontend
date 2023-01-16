import lendingTeachersSlice from '../slices/lendingTeachersSlice'

export const {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure,
  deleteTeachersRequest,
  deleteTeachersSuccess,
  deleteTeachersFailure,
} = lendingTeachersSlice.actions
