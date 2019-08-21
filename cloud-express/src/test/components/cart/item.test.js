import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from '../../../app/components/cart/Item';
import React from 'react';

Enzyme.configure({adapter: new Adapter()});

describe('Examining the item component', () => {

    it("renders correctly", () => {
        const wrapper = shallow(
            <Item/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});

