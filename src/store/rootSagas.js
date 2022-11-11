import { all } from 'redux-saga/effects'
import userSagas from './sagas/usersSagas'
import historySagas from './sagas/historySagas'
import history from '../history'
import coursesSagas from './sagas/coursesSagas'
import categoriesSaga from './sagas/categoriesSaga'

export default function* rootSagas() {
  yield all([...userSagas, ...coursesSagas, ...categoriesSaga, ...historySagas(history)])
}
