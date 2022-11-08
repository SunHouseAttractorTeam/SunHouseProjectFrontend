import {all} from 'redux-saga/effects';
import userSagas from "./sagas/usersSagas";

export default function* rootSagas(){
  yield all([
    ...userSagas,
  ]);
}