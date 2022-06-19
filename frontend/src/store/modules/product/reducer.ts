import { IState, initialState, IProductDomain } from './model';
import * as Actions from './actions';

const productReducer = (state: IState = initialState, action: Actions.ProductAction) => {
  switch (action.type) {
    case Actions.ADD_TO_CART: {
      const product = state.cartItems.find(item => item.id === action.product.id);
      if (product) {
        const quantity = product?.quantity;
        return { ...state, cartItems: [...state.cartItems.filter(c=> c.id!== product.id), { ...product, quantity: quantity + 1 }] };
      } else {
        action.product.quantity = 1;
        return { ...state, cartItems: [action.product, ...state.cartItems] };
      }
    }
    case Actions.ADD_TO_CART_SUCCESS:
      return { ...state, loading: false, error: false };

    case Actions.ADD_TO_CART_REQUEST:
      return { ...state, loading: true, error: false };

    case Actions.ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: true };

    case Actions.ADD_PRODUCTS:
      return { ...state, products: [...action.products, ...state.products], };

    case Actions.ADD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: false };

    case Actions.ADD_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false };

    case Actions.ADD_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default productReducer;
