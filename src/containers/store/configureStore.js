import {combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import rootSagas from "./rootSagas";
import usersSlice from "./slices/usersSlices";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});

sagaMiddleware.run(rootSagas);


axiosApi.interceptors.request.use(config => {
  try {
    config.headers['Authorization'] = store.getState().users.user.user.token;
  } catch (e) {}

  return config;
});

axiosApi.interceptors.response.use(res => res, e => {
  if (!e.response.data) {
    e.response = {data: {global: 'No internet!'}};
  }

  throw e;
});

export default store;