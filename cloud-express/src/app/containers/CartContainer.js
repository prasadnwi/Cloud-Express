import React, {Component} from 'react';
import CartContent from '../components/cart/CartContent';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <CartContent/>
            </div>
        );
    }
}

CartContainer.propTypes = {}

CartContainer.defaultProps = {}

export default CartContainer;