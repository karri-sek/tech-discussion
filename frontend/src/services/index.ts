
import { ICreateProduct } from '../types';

const PRODUCTS_URL = "http://localhost:3001/api/v1/products";
export const submitProduct = (payload: ICreateProduct) => {
  var requestHeaders = new Headers();
  requestHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(payload);

  var requestOptions = {
    method: 'POST',
    headers: requestHeaders,
    body: raw,
  };

  return fetch(PRODUCTS_URL, requestOptions)
    .then(response => {return response.json()})
}

export const getProducts = async () => {
  const response = await fetch(PRODUCTS_URL);
  const products = await response.json();
  return products;
}