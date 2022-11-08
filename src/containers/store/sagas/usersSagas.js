import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../../axiosApi";
import {
    registrationRequest,
    registrationSuccess,
    registrationFailure,

} from "../actions/usersActions";

export function* registrationUserSaga({payload: userData}) {
    try {
        const response = yield axiosApi.post('/users', userData);
        yield put(registrationSuccess(response.data));
    }
    catch (e) {
        if (e.response && e.response.data ){
            yield put(registrationFailure(e.response.data));
        }
    }
}

const userSagas = [
    takeEvery(registrationRequest, registrationUserSaga),
];

export default userSagas;