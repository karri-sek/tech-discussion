import { put, all, takeLatest } from 'redux-saga/effects';
import {
  ADD_TO_CART_REQUEST,
  addToCartFailureAction,
  addToCartSuccessAction,
  addToCartAction,
  AddToCartAction,
  ADD_PRODUCTS_REQUEST,
  addProductsFailureAction,
  addProductsSuccessAction,
  addProductsAction,
  AddProductsAction,
} from './actions';

// Extremely simple saga that's here just as an example
export function* addToCartSaga(action:AddToCartAction) {
  try {
    yield put(addToCartAction(action.product));
    yield put(addToCartSuccessAction());
  } catch (e) {
    yield put(addToCartFailureAction());
    console.log('Failed to add to cart');
  }
}

export function* addProductsSaga(action:AddProductsAction) {
  try {
    yield put(addProductsAction(action.products));
    yield put(addProductsSuccessAction());
  } catch (e) {
    yield put(addProductsFailureAction());
    console.log('Failed to add products');
  }
}

export function* watchShoppingSiteSaga() {
  yield all([
    takeLatest(ADD_TO_CART_REQUEST , addToCartSaga),
    takeLatest(ADD_PRODUCTS_REQUEST , addProductsSaga),
  ]);
}
