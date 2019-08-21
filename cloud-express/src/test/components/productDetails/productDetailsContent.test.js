import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductDetailsContent from '../../../app/components/productDetails/ProductDetailsContent';
import React from 'react';
import {product} from "../../constants/testData";

Enzyme.configure({adapter: new Adapter()});

describe('Examining the item component', () => {

    it("renders correctly", () => {
        const wrapper = shallow(
            <ProductDetailsContent product={product}/>
        );
        expect(wrapper).toMatchSnapshot();
    })
});