import { createSlice } from '@reduxjs/toolkit'

const name = 'users'

export const initialState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
}

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
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
  },
})

export default usersSlice
