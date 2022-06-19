import React from 'react';
import { shallow } from 'enzyme';
import { AiFillDelete } from "react-icons/ai";

import * as reactRedux from 'react-redux'
import DisplayCartItem from '.';

describe('DisplayCartItem', () => {
    
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
    it('Renders the Display Cart items with items added to the cart', () => {
        useSelectorMock.mockReturnValue([{name: 'Milk'},{name: 'Cheese'}]);
        
        const wrapper = shallow(
                 <DisplayCartItem />
        );
        expect(wrapper.find('img')).toHaveLength(2);
        expect(wrapper.find(AiFillDelete)).toHaveLength(2);

       
    });


});
