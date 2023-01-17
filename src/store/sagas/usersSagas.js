import { put, takeEvery } from 'redux-saga/effects'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import { historyPush } from '../actions/historyActions'
import {
  banUnbanFailure,
  banUnbanRequest,
  banUnbanSuccess,
  checkUserTaskFailure,
  checkUserTaskRequest,
  checkUserTaskSuccess,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  editFailure,
  editRequest,
  editSuccess,
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  getAllUsersFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  logoutUser,
  passwordFailure,
  passwordRequest,
  passwordSuccess,
  registrationFailure,
  registrationRequest,
  registrationSuccess,
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  verifyUserFailure,
  verifyUserRequest,
  verifyUserSuccess,
} from '../actions/usersActions'

const Toast = Swal.mixin({
  toast: true,
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
})

export function* getAllUsersSaga() {
  try {
    yield put(showLoading())
    const { data } = yield axiosApi('/users')
    yield put(getAllUsersSuccess(data))
    yield put(hideLoading())
  } catch (e) {
    yield put(getAllUsersFailure(e.response.data))
  }
}

export function* registrationUserSaga({ payload: userData }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi.post('/users', userData)
    yield put(registrationSuccess(response.data))
    yield Swal.fire({
      toast: false,
      icon: 'success',
      title: `На почту ${response.data.email} отправлено подтверждение`,
    })
    yield put(hideLoading())
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(registrationFailure(e.response.data))
      yield Toast.fire({
        icon: 'error',
        title: 'Данный пользователь уже зарегистрирован',
      })
    }
  }
}

export function* loginUserSaga({ payload }) {
  try {
    yield put(showLoading())
    let response
    if (!payload) {
      response = yield axiosApi.post(`/users/sessions`)
    }
    if (payload) {
      response = yield axiosApi.post(`/users/sessions?path=${payload.path}`, payload.userData)
    }
    yield put(loginUserSuccess(response.data))
    yield put(hideLoading())
    if (payload.userData) {
      yield put(historyPush('/'))
    }
    yield Toast.fire({
      icon: 'success',
      title: 'Вы успешно вошли в свой аккаунт',
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(loginUserFailure(e.response.data))
      yield Toast.fire({
        icon: 'error',
        title: 'Введены неверные данные',
      })
    }
  }
}

export function* logoutUserSaga() {
  try {
    yield put(showLoading())

    yield axiosApi.delete('users/sessions')
    yield put(hideLoading())

    yield put(historyPush('/'))
    yield Cookies.remove('jwt')
    yield Toast.fire({
      icon: 'info',
      title: 'Вы вышли из своего аккаунта',
    })
  } catch (e) {}
}

export function* deleteUserSaga({ payload: id }) {
  try {
    yield put(showLoading())

    yield axiosApi.delete(`users/${id}`)
    yield put(deleteUserSuccess())
    yield put(hideLoading())

    yield put(getAllUsersRequest())
    yield put(hideLoading())
  } catch (e) {
    yield put(deleteUserFailure(e))
  }
}

export function* verifyUserSaga(confirmationCode) {
  try {
    yield put(showLoading())

    const response = yield axiosApi.get(`/users/confirm/${confirmationCode.payload}`)
    yield put(verifyUserSuccess(response.data))
    yield put(hideLoading())
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
    yield put(showLoading())

    const response = yield axiosApi.post('/users/forgot', userData)
    yield put(forgotPasswordSuccess(response.data))
    yield put(hideLoading())
    yield Toast.fire({
      icon: 'info',
      title: response.data.message,
    })
  } catch (e) {
    yield put(forgotPasswordFailure(e))
  }
}

export function* resetPasswordSaga({ payload: hash }) {
  try {
    yield put(showLoading())

    const response = yield axiosApi.post(`/users/reset/`, { hash })
    yield put(resetPasswordSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(resetPasswordFailure(e))
  }
}

export function* editUserProfileSaga({ payload: userData }) {
  try {
    yield put(showLoading())

    const response = yield axiosApi.put('/users/edit', userData)
    yield put(editSuccess(response.data))
    yield put(hideLoading())
    yield Toast.fire({
      icon: 'success',
      title: 'Данные успешно сохранены',
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(editFailure(e.response.data))
      yield Toast.fire({
        icon: 'error',
        title: e.response.data.error,
      })
    }
  }
}

export function* editUserPasswordSaga({ payload: passwords }) {
  try {
    yield put(showLoading())

    yield axiosApi.put('/users/edit_password', { password: passwords.password, newPassword: passwords.newPassword })
    yield put(passwordSuccess())
    yield put(hideLoading())
    yield Toast.fire({
      icon: 'success',
      title: 'Пароль успешно изменен',
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(passwordFailure(e.response.data))
      yield Toast.fire({
        icon: 'error',
        title: e.response.data.error,
      })
    }
  }
}

export function* checkUserTask({ payload: data }) {
  try {
    yield put(showLoading())

    console.log(data)
    yield axiosApi.patch(
      `/users/${data.userId}/update_status?content=${data.taskId}&params=task&course=${data.courseId}&choice=${data.value}`,
    )
    yield put(checkUserTaskSuccess())

    yield put(hideLoading())
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(checkUserTaskFailure(e.response.data))
      yield Toast.fire({
        icon: 'error',
        title: e.response.data.error,
      })
    }
  }
}

const userSagas = [
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(banUnbanRequest, banUnbanSaga),
  takeEvery(deleteUserRequest, deleteUserSaga),
  takeEvery(getAllUsersRequest, getAllUsersSaga),
  takeEvery(registrationRequest, registrationUserSaga),
  takeEvery(logoutUser, logoutUserSaga),
  takeEvery(verifyUserRequest, verifyUserSaga),
  takeEvery(forgotPasswordRequest, forgotPasswordSaga),
  takeEvery(resetPasswordRequest, resetPasswordSaga),
  takeEvery(editRequest, editUserProfileSaga),
  takeEvery(passwordRequest, editUserPasswordSaga),
  takeEvery(checkUserTaskRequest, checkUserTask),
]

export default userSagas
