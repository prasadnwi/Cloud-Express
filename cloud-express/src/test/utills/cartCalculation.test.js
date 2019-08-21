import cartCalculation from '../../app/utills/cartCalculation';
import {testData} from '../constants/testData';

describe('Examining the cart calculation functions', () => {

    test('Calculate total Price', () => {
        expect(cartCalculation.calculateTotalPrice(testData)).toEqual(4600);
    });

    test('Calculate discount price ', () => {
        expect(cartCalculation.calculateTotalDiscount(1000)).toEqual(20);
    });

    test('Calculate tax price ', () => {
        expect(cartCalculation.calculateTotalTax(1000, 0.12)).toEqual(120);
    });

    test('Calculate final amount ', () => {
        expect(cartCalculation.calculateFinalAmount(1000, 120, 100)).toEqual(1020);
    })

});