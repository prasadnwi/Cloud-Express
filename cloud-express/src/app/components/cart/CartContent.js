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

    componentDidMount() {
        this.setPropsToState();
    }

    setPropsToState = () => {
        let {items} = this.state;
        items = this.props.items;
        this.setState({
            items
        });
        this.hasItems = items.length > 0 ? true : false;
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.updateCart(nextProps);
    }

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

    formatItems = (item) => {
        let formatedItem = item;
        formatedItem.count = 1;
        return formatedItem;
    };
    // this method calculate total amount
    calculateTotalPrice = (items) => {
        let total = 0, totalForItem = 0;
        if (items) {
            items.map((item) => {
                totalForItem = item.count * item.price;
                total += totalForItem;
            });
        }
        return total;
    };

    //this method calculate total discount
    calculateTotalDiscount = (totalAmount) => {
        const numberOfDiscountPoints = Math.floor(totalAmount / 500);
        return (500 * 0.02 * numberOfDiscountPoints);
    };

    //this method calculate total tax
    calculateTotalTax = (totalAmount) => {
        return totalAmount * 0.12;
    };

    //calculate final amount
    calculateFinalAmount = (totalAmount, tax, discount) => {
        return (totalAmount + tax - discount);
    };

    calculateDetails = (items) => {
        const total = this.calculateTotalPrice(items);
        const discountedAmount = this.calculateTotalDiscount(total);
        const tax = this.calculateTotalTax(total);
        return {
            total: total,
            discountedAmount: discountedAmount,
            tax: tax,
            finalAmount: this.calculateFinalAmount(total, tax, discountedAmount)
        };
    };

    render() {
        const {items} = this.state;
        const calculatedDetails = this.calculateDetails(items);
        return (
            <div className='Cart-content container'>
                <div className='col'>
                    <div className='header row'>
                        <p>Order Summary</p>
                    </div>
                    {
                        this.hasItems ?
                            <div>
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
                                    <p>Total RS {calculatedDetails.total}</p>
                                </div>
                                <div className='discounted-amount'>
                                    <p>Discount RS {calculatedDetails.discountedAmount}</p>
                                </div>
                                <div className='tax-amount'>
                                    <p>Tax RS {calculatedDetails.tax}</p>
                                </div>
                                <div className='final-amount'>
                                    <p>Final amount RS {calculatedDetails.finalAmount}</p>
                                </div>
                            </div>
                            :
                            <div>
                                No items
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