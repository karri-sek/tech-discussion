import * as Actions from './actions';
import reducer from './reducer';
import {IProductDomain} from './model';
import { initialState } from './model';

describe('Product reducer', () => {
  it('handles ADD TO CART correctly', () => {
    const product:IProductDomain = {
      id: 3,
      name: 'milk',
      customerPrice: 34,
      cost: 45,
      image: 'imageLink'
    }
    const action = Actions.addToCartAction(product);
    const result = reducer(initialState, action);
    const expected = { ...initialState, cartItems: [product], loading: false, error: false };
    expect(result).toEqual(expected);
  });
});
