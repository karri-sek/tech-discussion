import { IProductDomain } from './model';
import { cartSelector } from './selectors';

describe('Product selectors', () => {
    describe('productSelector', () => {
        it('able to select and return the cartItems', () => {
            const cartItems: IProductDomain[] = [{
                id: 3,
                name: 'milk',
                customerPrice: 34,
                cost: 45,
                image: 'imageLink'
            }];
            const response = cartSelector.resultFunc(cartItems);
            expect(response).toHaveLength(1)
        });
    });
});
