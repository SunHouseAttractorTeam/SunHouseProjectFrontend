import testsSlice from '../slices/testsSlice'

export const {
  fetchTestRequest,
  fetchTestSuccess,
  fetchTestFailure,
  createTestRequest,
  createTestSuccess,
  createTestFailure,
  editTestRequest,
  editTestSuccess,
  editTestFailure,
  deleteTestRequest,
  deleteTestSuccess,
  deleteTestFailure,
} = testsSlice.actions
