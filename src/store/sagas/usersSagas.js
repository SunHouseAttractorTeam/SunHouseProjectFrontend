import { put, takeEvery } from 'redux-saga/effects'
import Cookies from 'js-cookie'
import axiosApi from '../../axiosApi'
import { historyPush } from '../actions/historyActions'
import {
  appleLoginFailure,
  appleLoginRequest,
  appleLoginSuccess,
  facebookLoginFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  googleLoginFailure,
  googleLoginRequest,
  googleLoginSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  logoutUser,
  registrationFailure,
  registrationRequest,
  registrationSuccess,
  vkLoginFailure,
  vkLoginRequest,
  vkLoginSuccess,
} from '../actions/usersActions'

export function* registrationUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users', userData)
    yield put(registrationSuccess(response.data))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(registrationFailure(e.response.data))
    }
  }
}

export function* loginUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/sessions', userData)
    yield put(loginUserSuccess(response.data))
    if (userData) {
      yield put(historyPush('/'))
    }
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(loginUserFailure(e.response.data))
    }
  }
}

export function* facebookLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/facebookLogin/', userData)
    yield put(facebookLoginSuccess(response.data.user))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(facebookLoginFailure(e.response.data))
    }
  }
}

export function* googleLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/googleLogin/', userData)
    yield put(googleLoginSuccess(response.data.user))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(googleLoginFailure(e.response.data))
    }
  }
}

export function* appleLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/appleLogin/', userData)
    yield put(appleLoginSuccess(response.data.user))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(appleLoginFailure(e.response.data))
    }
  }
}

export function* vkLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/vkLogin/', userData)
    yield put(vkLoginSuccess(response.data.user))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(vkLoginFailure(e.response.data))
    }
  }
}

export function* logoutUserSaga() {
  try {
    yield axiosApi.delete('users/sessions')
    yield Cookies.remove('jwt')
    yield put(historyPush('/'))
  } catch (e) {}
}

const userSagas = [
  takeEvery(registrationRequest, registrationUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logoutUser, logoutUserSaga),
  takeEvery(facebookLoginRequest, facebookLoginSaga),
  takeEvery(googleLoginRequest, googleLoginSaga),
  takeEvery(appleLoginRequest, appleLoginSaga),
  takeEvery(vkLoginRequest, vkLoginSaga),
]

export default userSagas
