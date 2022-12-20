import { createSlice } from '@reduxjs/toolkit'

const name = 'users'

export const initialState = {
  user: null,
  users: null,
  getUsersLoading: false,
  getUsersError: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
}

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    getAllUsersRequest(state) {
      state.getUsersLoading = true
      state.getUsersError = null
    },
    getAllUsersSuccess(state, { payload: users }) {
      state.getUsersLoading = false
      state.getUsersError = null
      state.users = users
    },
    getAllUsersFailure(state, action) {
      state.getUsersLoading = false
      state.getUsersError = action.payload
    },
    registrationRequest(state) {
      state.registerLoading = true
      state.registerError = null
    },
    registrationSuccess(state, action) {
      state.registerLoading = false
      state.user = action.payload
    },
    registrationFailure(state, action) {
      state.registerLoading = false
      state.registerError = action.payload
    },
    loginUserRequest(state) {
      state.loginLoading = true
      state.loginError = null
    },
    loginUserSuccess(state, action) {
      state.loginLoading = false
      state.user = action.payload
    },
    loginUserFailure(state, action) {
      state.loginLoading = false
      state.loginError = action.payload
    },
    facebookLoginRequest(state) {
      state.loginLoading = true
      state.loginError = null
    },
    facebookLoginSuccess(state, action) {
      state.loginLoading = false
      state.user = action.payload
    },
    facebookLoginFailure(state, action) {
      state.loginLoading = false
      state.loginError = action.payload
    },
    googleLoginRequest(state) {
      state.loginLoading = true
      state.loginError = null
    },
    googleLoginSuccess(state, action) {
      state.loginLoading = false
      state.user = action.payload
    },
    googleLoginFailure(state, action) {
      state.loginLoading = false
      state.loginError = action.payload
    },
    vkLoginRequest(state) {
      state.loginLoading = true
      state.loginError = null
    },
    vkLoginSuccess(state, action) {
      state.loginLoading = false
      state.user = action.payload
    },
    vkLoginFailure(state, action) {
      state.loginLoading = false
      state.loginError = action.payload
    },
    logoutUser(state) {
      state.user = null
    },
    verifyUserRequest(state) {
      state.verifyUserLoading = true
      state.verifyUserError = null
    },
    verifyUserSuccess(state, action) {
      state.verifyUserLoading = false
      state.verifyUserError = action.payload
    },
    verifyUserFailure(state, action) {
      state.verifyUserLoading = false
      state.verifyUserError = action.payload
    },
    forgotPasswordRequest(state) {
      state.forgotPasswordLoading = true
      state.forgotPasswordError = null
    },
    forgotPasswordSuccess(state, action) {
      state.forgotPasswordLoading = false
      state.forgotPasswordError = action.payload
    },
    forgotPasswordFailure(state, action) {
      state.forgotPasswordLoading = false
      state.forgotPasswordError = action.payload
    },
    resetPasswordRequest(state) {
      state.resetPasswordLoading = true
      state.resetPasswordError = null
    },
    resetPasswordSuccess(state, action) {
      state.resetPasswordLoading = false
      state.resetPasswordError = action.payload
    },
    resetPasswordFailure(state, action) {
      state.resetPasswordLoading = false
      state.resetPasswordError = action.payload
    },
  },
})

export default usersSlice
