import { combineReducers } from 'redux';
import productReducer from './modules/product/reducer';

export default combineReducers({
    product: productReducer
});
