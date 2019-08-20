import React, {Component} from 'react';
import '../../../scss/component/cart/item.css';
import PropTypes from 'prop-types';
import {CART} from "../../constants/titles";

class Item extends Component {

    getPrice = (unitPrice, count) => {
        return unitPrice * count;
    };

    render() {
        const {item} = this.props;
        return (
            <div className='Item container-fluid'>
                <div className='row'>
                    <div className='name col-lg-7'>
                        {item.name}
                    </div>
                    <div className='count col-lg-2'>
                        *{item.count}
                    </div>
                    <div className='price col-lg-3'>
                        {CART.CURRENCY.RS}{this.getPrice(item.price, item.count)}
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item : PropTypes.object
};

Item.defaultProps = {
    item: {}
};

export default Item;