import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartContent from '../../../app/components/cart/CartContent';
import React from 'react';

Enzyme.configure({adapter: new Adapter()});

describe('Examining the item component', () => {

    it("renders correctly", () => {
        const wrapper = shallow(
            <CartContent/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls componentDidMount', () => {
        jest.spyOn(CartContent.prototype, 'componentDidMount');
        const wrapper = shallow(<CartContent/>);
        expect(CartContent.prototype.componentDidMount.mock.calls.length).toBe(1)
    });

    it('calls render', () => {
        jest.spyOn(CartContent.prototype, 'render');
        const wrapper = shallow(<CartContent/>);
        expect(CartContent.prototype.render.mock.calls.length).toBe(2)
    })
});
