import {IProductDomain} from './model';
import {createSelector} from 'reselect';

export const cartDomain = (state: any): IProductDomain[] => state.product.cartItems;
export const productsDomain = (state: any): IProductDomain[] => state.product.products;

export const cartSelector = createSelector(
    cartDomain,
    (domain: IProductDomain[]): IProductDomain[] => domain
);



export const productsSelector = createSelector(
    productsDomain,
    (domain: IProductDomain[]): IProductDomain[] => domain
);
