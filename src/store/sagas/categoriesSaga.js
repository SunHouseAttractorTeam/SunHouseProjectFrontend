import { put, takeEvery } from 'redux-saga/effects'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import axiosApi from '../../axiosApi'
import {
  createCategoryFailure,
  createCategoryRequest,
  createCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoryFailure,
  fetchCategoryRequest,
  fetchCategorySuccess,
  updateCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
} from '../actions/categoriesActions'

export function* fetchCategories() {
  try {
    yield put(showLoading())
    const response = yield axiosApi('/categories')
    yield put(fetchCategoriesSuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchCategoriesFailure(e))
  }
}

export function* fetchCategory({ payload: id }) {
  try {
    yield put(showLoading())
    const response = yield axiosApi(`/categories/${id}`)
    yield put(fetchCategorySuccess(response.data))
    yield put(hideLoading())
  } catch (e) {
    yield put(fetchCategoryFailure(e))
  }
}

export function* createCategory({ payload: courseData }) {
  try {
    yield put(showLoading())
    yield axiosApi.post('/categories', courseData)
    yield put(createCategorySuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(createCategoryFailure(e))
  }
}

export function* updateCategory({ payload }) {
  const { categoryData, id } = payload

  try {
    yield put(showLoading())
    yield axiosApi.put(`/categories/${id}`, categoryData)
    yield put(updateCategorySuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(updateCategoryFailure(e))
  }
}

export function* deleteCategory({ payload: id }) {
  try {
    yield put(showLoading())
    yield axiosApi.delete(`/categories/${id}`)
    yield put(deleteCategorySuccess())
    yield put(hideLoading())
  } catch (e) {
    yield put(deleteCategoryFailure(e))
  }
}

const coursesSagas = [
  takeEvery(fetchCategoriesRequest, fetchCategories),
  takeEvery(fetchCategoryRequest, fetchCategory),
  takeEvery(createCategoryRequest, createCategory),
  takeEvery(updateCategoryRequest, updateCategory),
  takeEvery(deleteCategoryRequest, deleteCategory),
]

export default coursesSagas
