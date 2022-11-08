import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../../axiosApi";
import {historyPush} from "../actions/historyActions";
import {
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    loginUserSuccess,
    loginUserFailure,
    loginUserRequest,

} from "../actions/usersActions";

export function* registrationUserSaga({payload: userData}) {
    try {
        const response = yield axiosApi.post('/users', userData);
        yield put(registrationSuccess(response.data));
        yield put(historyPush('/'));
    }
    catch (e) {
        if (e.response && e.response.data ){
            yield put(registrationFailure(e.response.data));
        }
    }
}

export function* loginUserSaga({payload: userData}) {
    try {
        const response = yield axiosApi.post('/users/sessions', userData);
        yield put(loginUserSuccess(response.data));
        yield put(historyPush('/'));
    }
    catch (e) {
        if(e.response && e.response.data ){
            yield put(loginUserFailure(e.response.data));
        }
    }
}

const userSagas = [
    takeEvery(registrationRequest, registrationUserSaga),
    takeEvery(loginUserRequest, loginUserSaga),
];

export default userSagas;