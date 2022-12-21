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
  editTestQuestionsRequest,
  editTestQuestionsSuccess,
  editTestQuestionsFailure,
  deleteTestRequest,
  deleteTestSuccess,
  deleteTestFailure,
} = testsSlice.actions
