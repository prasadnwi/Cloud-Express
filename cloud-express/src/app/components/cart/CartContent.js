import React, {Component} from 'react';
import '../../../scss/component/cart/cartContent.css';
import Item from "./Item";

class CartContent extends Component {
    render() {
        let products = [
            { name : 'Apple', price : 100, imageName: 'apple'},
            { name : 'Burger', price : 100, imageName: 'burger'},
            { name : 'Champagne', price : 100, imageName: 'champagne'},
            { name : 'Coffee', price : 100, imageName: 'coffeeCup'},
            { name : 'Cola', price : 100, imageName: 'cola'},
            { name : 'Water', price : 100, imageName: 'water'},
            { name : 'Fried Potatoes', price : 100, imageName: 'friedPotatoes'},
            { name : 'Noodles', price : 100, imageName: 'noodles'},
            { name : 'Wine', price : 100, imageName: 'wineGlass'}
        ];
        return (
            <div className='Cart-content container'>
                <div className='col'>
                    <div className='header row'>
                        <p>Order Summary</p>
                    </div>
                    <div className='items'>
                        {
                            products.map((item) => {
                                return(
                                    <Item item={item}/>
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

}

CartContent.defaultProps = {

}

export default CartContent;