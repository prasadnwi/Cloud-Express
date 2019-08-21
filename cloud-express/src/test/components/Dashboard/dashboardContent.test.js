import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardContent from '../../../app/components/dashboard/DashboardContent';
import React from 'react';

Enzyme.configure({adapter: new Adapter()});

describe('Examining the item component', () => {

    it("renders correctly", () => {
        const wrapper = shallow(
            <DashboardContent/>
        );
        expect(wrapper).toMatchSnapshot();
    })
});