import React, {Component} from 'react';
import '../../../scss/component/cart/cartContent.css';
import Item from "./Item";
import PropTypes from 'prop-types';

class CartContent extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className='Cart-content container'>
                <div className='col'>
                    <div className='header row'>
                        <p>Order Summary</p>
                    </div>
                    <div className='items'>
                        {
                            items.map((item) => {
                                return(
                                    <Item item={item} key={item.id}/>
                                )
                            })
                        }
                    </div>
                    <div className='total-amount'>
                        <p>Total RS 10245</p>
                    </div>
                    <div className='discounted-amount'>
                        <p>Discount RS 10245</p>
                    </div>
                    <div className='tax-amount'>
                        <p>Tax RS 10245</p>
                    </div>
                    <div className='final-amount'>
                        <p>Final amount RS 10245</p>
                    </div>
                </div>
            </div>
        );
    }
}

CartContent.propTypes = {
    items: PropTypes.array
};

CartContent.defaultProps = {
    items: []
};

export default CartContent;