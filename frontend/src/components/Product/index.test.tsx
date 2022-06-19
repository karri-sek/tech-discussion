import React from 'react';
import { shallow } from 'enzyme';
import { IProductDomain } from '../../store/modules/product/model';
import { Card } from "react-bootstrap";
import Product from '.';

describe('Product', () => {
    it('Renders without errors', () => {
        const product:IProductDomain ={
            id: 3,
            name: 'Milk',
            quantity: 1,
            customerPrice: 56,
            cost: 10
        }
        const wrapper = shallow(
            <Product {...product} />
        );
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(Card.Body)).toHaveLength(1);
    });
});
