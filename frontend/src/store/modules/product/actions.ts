import {IProductDomain}  from "./model";

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_PRODUCTS_REQUEST = 'ADD_PRODUCTS_REQUEST';
export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
export const ADD_PRODUCTS_FAILURE = 'ADD_PRODUCTS_FAILURE';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';

export type AddToCartRequestAction = ReturnType<typeof addToCartRequestAction>;
export const addToCartRequestAction = (product: IProductDomain) => ({
  type: ADD_TO_CART_REQUEST as typeof ADD_TO_CART_REQUEST,
  product
});

export type AddToCartSuccessAction = ReturnType<typeof addToCartSuccessAction>;
export const addToCartSuccessAction = () => ({
  type: ADD_TO_CART_SUCCESS as typeof ADD_TO_CART_SUCCESS
});

export type AddToCartFailureAction = ReturnType<typeof addToCartFailureAction>;
export const addToCartFailureAction = () => ({
  type: ADD_TO_CART_FAILURE as typeof ADD_TO_CART_FAILURE
});

export type AddToCartAction = ReturnType<typeof addToCartAction>;
export const addToCartAction = (product: IProductDomain) => ({
  type: ADD_TO_CART as typeof ADD_TO_CART,
  product
});

export type AddProductsRequestAction = ReturnType<typeof addProductsRequestAction>;
export const addProductsRequestAction = (products: IProductDomain[]) => ({
  type: ADD_PRODUCTS_REQUEST as typeof ADD_PRODUCTS_REQUEST,
  products
});

export type AddProductsSuccessAction = ReturnType<typeof addProductsSuccessAction>;
export const addProductsSuccessAction = () => ({
  type: ADD_PRODUCTS_SUCCESS as typeof ADD_PRODUCTS_SUCCESS
});

export type AddProductsFailureAction = ReturnType<typeof addProductsFailureAction>;
export const addProductsFailureAction = () => ({
  type: ADD_PRODUCTS_FAILURE as typeof ADD_PRODUCTS_FAILURE
});

export type AddProductsAction = ReturnType<typeof addProductsAction>;
export const addProductsAction = (products: IProductDomain[]) => ({
  type: ADD_PRODUCTS as typeof ADD_PRODUCTS,
  products
});

export type ProductAction =
  | AddToCartRequestAction
  | AddToCartSuccessAction
  | AddToCartFailureAction
  | AddToCartAction
  | AddProductsRequestAction
  | AddProductsSuccessAction
  | AddProductsFailureAction
  | AddProductsAction;

