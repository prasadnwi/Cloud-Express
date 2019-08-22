import React, {Component} from 'react';
import '../../../scss/component/cart/cartContent.css';
import PropTypes from 'prop-types';
import {CART} from '../../constants/titles';
import cartCalculation from '../../utills/cartCalculation';
//components
import Item from "./Item";

class CartContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.hasItems = false;
    }

    componentDidMount() {
        this.setPropsToState();
    }

    //set props values to local
    setPropsToState = () => {
        let {items} = this.state;
        items = this.props.items;
        this.setState({
            items
        });
        this.hasItems = items.length > 0 ? true : false;
    };

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.updateCart(nextProps);
    }

    // update the cart when a new item is added
    updateCart = (newProps) => {

        let resultIndex, {items} = this.state;
        let {newlyAddedItem} = newProps;

        // check if a new item was added
        if (newlyAddedItem.constructor === Object && Object.entries(newlyAddedItem).length !== 0) {

            resultIndex = items.findIndex(item => item.id === newlyAddedItem.id);

            if (resultIndex !== -1) {
                /*
                 the item is already added. Increment the count
                */
                items[resultIndex].count++;

            } else {
                // item isn't available in the cart
                items.push(this.formatItems(newlyAddedItem));
            }
        }

        this.hasItems = items.length > 0 ? true : false;
        this.setState({
            items
        });

        // update store
        this.props.updateCart(items);
    };

    // to add a count for testData
    formatItems = (item) => {
        let formattedItem = item;
        formattedItem.count = 1;
        return formattedItem;
    };

    // calculate total amount, discount, tax, final amount
    calculateDetails = (items) => {
        const total = cartCalculation.calculateTotalPrice(items);
        const discountedAmount = cartCalculation.calculateTotalDiscount(total);
        const tax = cartCalculation.calculateTotalTax(total, 0.12);
        return {
            total,
            discountedAmount,
            tax,
            finalAmount: cartCalculation.calculateFinalAmount(total, tax, discountedAmount)
        };
    };

    render() {
        const {items} = this.state;
        const calculatedDetails = this.calculateDetails(items);
        return (
            <div className='Cart-content container' id='cart-content'>
                <div className='col'>
                    <div className='header row'>
                        <p>{CART.CART_TITLE.FIRST_NAME} {CART.CART_TITLE.LAST_NAME}</p>
                    </div>
                    {
                        this.hasItems ?
                            <div>
                                <div className='items' id='items'>
                                    {
                                        items.map((item) => {
                                            return (
                                                <Item item={item} key={item.id}/>
                                            )
                                        })
                                    }
                                </div>
                                <div className='total-amount' id='total-amount'>
                                    <div className='row'>
                                        <div className='col-lg-8'>{CART.CART_PROPERTY.TOTAL}</div>
                                        <div className='col-lg-4'>{CART.CURRENCY.RS} {calculatedDetails.total}</div>
                                    </div>
                                </div>
                                <div className='discounted-amount' id='discounted-amount'>
                                    <div className='row'>
                                        <div className='col-lg-8'>{CART.CART_PROPERTY.DISCOUNT}</div>
                                        <div
                                            className='col-lg-4'>{CART.CURRENCY.RS} {calculatedDetails.discountedAmount}</div>
                                    </div>
                                </div>
                                <div className='tax-amount' id='tax-amount'>
                                    <div className='row'>
                                        <div className='col-lg-8'>{CART.CART_PROPERTY.TAX}</div>
                                        <div className='col-lg-4'>{CART.CURRENCY.RS} {calculatedDetails.tax}</div>
                                    </div>
                                </div>
                                <div className='final-amount' id='final-amount'>
                                    <div className='row'>
                                        <div className='col-lg-8'>{CART.CART_PROPERTY.FINAL_AMOUNT}</div>
                                        <div
                                            className='col-lg-4'>{CART.CURRENCY.RS} {calculatedDetails.finalAmount}</div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='no-items' id='no-items'>
                                <p>{CART.MESSAGES.NO_ITEM}</p>
                            </div>
                    }
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