import React from 'react';
import { shallow } from 'enzyme';
import { Container, Navbar} from 'react-bootstrap';
import * as reactRedux from 'react-redux'

import Header from '.';

describe('Header', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
    it('Header component Renders without errors', () => {
        useSelectorMock.mockReturnValue([{name: 'Milk'},{name: 'Cheese'}]);
        
        const wrapper = shallow(
            <Header/>
        );
        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(Navbar)).toHaveLength(1);
    });
});
