import React, {Component} from 'react';
import '../../../scss/component/cart/cartContent.css';
import Item from "./Item";
import PropTypes from 'prop-types';

class CartContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.hasItems = false;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.updateCart(nextProps);
    }

    updateCart = (newProps) => {
        let resultIndex, {items} = this.state;
        let {newlyAddedItem} = newProps;

        // check if a new item was added
        if (newlyAddedItem.constructor === Object && Object.entries(newlyAddedItem).length != 0) {

            if (items.findIndex(item => item.id === newlyAddedItem.id) != -1) {
                /*
                item is already added
                increment the count
                 */
            } else { // item isn't available in the cart
                items.push(this.formatItems(newlyAddedItem));
            }

            this.setState({
                items
            })
        }
    };

    formatItems = (item) => {
        let formatedItem = item;
        formatedItem.count = 1;
        return formatedItem;
    };

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
                                return (
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