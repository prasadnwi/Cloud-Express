import {updateCart} from '../../app/actions/cartAction';

describe("dataloader actions", () => {
    test("dataRequested", () => {
        const payload = {
            session: {}
        };
        const action = updateCart({});
        expect(action).toEqual({});
    });

});