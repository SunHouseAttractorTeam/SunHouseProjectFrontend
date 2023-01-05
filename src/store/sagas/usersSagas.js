import { put, takeEvery } from 'redux-saga/effects'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import axiosApi from '../../axiosApi'
import { historyPush } from '../actions/historyActions'
import {
  banUnbanFailure,
  banUnbanRequest,
  banUnbanSuccess,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  facebookLoginFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  getAllUsersFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
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
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  verifyUserFailure,
  verifyUserRequest,
  verifyUserSuccess,
  vkLoginFailure,
  vkLoginRequest,
  vkLoginSuccess,
} from '../actions/usersActions'

export function* getAllUsersSaga() {
  try {
    const { data } = yield axiosApi('/users')
    yield put(getAllUsersSuccess(data))
  } catch (e) {
    yield put(getAllUsersFailure(e.response.data))
  }
}

export function* registrationUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users', userData)
    yield put(registrationSuccess(response.data))
    yield Swal.fire({
      icon: 'success',
      title: `На почту ${response.data.email} отправлено подтверждение`,
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(registrationFailure(e.response.data))
      yield Swal.fire({
        icon: 'error',
        title: 'Данный пользователь уже зарегистрирован',
        showConfirmButton: false,
      })
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
    yield Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Вы успешно вошли в свой аккаунт',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(loginUserFailure(e.response.data))
      yield Swal.fire({
        icon: 'error',
        title: 'Введены неверные данные',
        showConfirmButton: false,
      })
    }
  }
}

export function* facebookLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/facebookLogin/', userData)
    yield put(facebookLoginSuccess(response.data))
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
    yield put(googleLoginSuccess(response.data))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(googleLoginFailure(e.response.data))
    }
  }
}

export function* vkLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/vkLogin/', userData)
    yield put(vkLoginSuccess(response.data))
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
    yield put(historyPush('/'))
    yield Cookies.remove('jwt')
    yield Swal.fire({
      // timer: 3000,
      toast: true,
      icon: 'info',
      title: 'Вы вышли из своего аккаунта',
      showConfirmButton: false,
      timerProgressBar: true,
    })
  } catch (e) {}
}

export function* deleteUserSaga({ payload: id }) {
  try {
    yield axiosApi.delete(`users/${id}`)
    yield put(deleteUserSuccess())
    yield put(getAllUsersRequest())
  } catch (e) {
    yield put(deleteUserFailure(e))
  }
}

export function* verifyUserSaga(confirmationCode) {
  try {
    const response = yield axiosApi.get(`/users/confirm/${confirmationCode.payload}`)
    yield put(verifyUserSuccess(response.data))
  } catch (e) {
    yield put(verifyUserFailure(e))
  }
}

export function* banUnbanSaga({ payload }) {
  const { id, newRole } = payload
  try {
    yield axiosApi.patch(`users/${id}/ban?role=${newRole}`)
    yield put(banUnbanSuccess())
    yield put(getAllUsersRequest())
  } catch (e) {
    yield put(banUnbanFailure(e))
  }
}

export function* forgotPasswordSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/forgot', userData)
    yield put(forgotPasswordSuccess(response.data))
  } catch (e) {
    yield put(forgotPasswordFailure(e))
    yield toast.error('error', {
      position: 'top-right',
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

export function* resetPasswordSaga({ payload: hash }) {
  try {
    const response = yield axiosApi.post(`/users/reset/`, { hash })
    yield put(resetPasswordSuccess(response.data))
  } catch (e) {
    yield put(resetPasswordFailure(e))
  }
}

const userSagas = [
  takeEvery(banUnbanRequest, banUnbanSaga),
  takeEvery(deleteUserRequest, deleteUserSaga),
  takeEvery(getAllUsersRequest, getAllUsersSaga),
  takeEvery(registrationRequest, registrationUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logoutUser, logoutUserSaga),
  takeEvery(facebookLoginRequest, facebookLoginSaga),
  takeEvery(googleLoginRequest, googleLoginSaga),
  takeEvery(vkLoginRequest, vkLoginSaga),
  takeEvery(verifyUserRequest, verifyUserSaga),
  takeEvery(forgotPasswordRequest, forgotPasswordSaga),
  takeEvery(resetPasswordRequest, resetPasswordSaga),
]

export default userSagas
