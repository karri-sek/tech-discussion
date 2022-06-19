import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';

import CartModel from '.';

describe('CartModel', () => {
    it('Renders without errors', () => {
        const setShowCartModal = jest.fn();
        shallow(
            <CartModel setShowCartModal={setShowCartModal} />
        );
    });

    it('Renders the CartModel and it should have child components', () => {
        const setShowCartModal = jest.fn();
        const wrapper = shallow(
            <CartModel setShowCartModal={setShowCartModal} />
        );
        expect(
            wrapper.find(Modal)
        ).toHaveLength(1);
        expect(
            wrapper.find(Modal).prop('show')
        ).toBeTruthy()
        expect(
            wrapper.find(Modal.Header).prop('closeButton')
        ).toBeTruthy()
    });


});
