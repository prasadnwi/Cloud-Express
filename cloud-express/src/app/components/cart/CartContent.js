import React, {Component} from 'react';
import '../../../scss/component/cart/cartContent.css';
import Item from "./Item";

class CartContent extends Component {
    render() {
        let products = [
            {id: 1, name: 'Apple', price: 100, imageName: 'apple'},
            {id: 2, name: 'Burger', price: 100, imageName: 'burger'},
            {id: 3, name: 'Champagne', price: 100, imageName: 'champagne'},
            {id: 4, name: 'Coffee', price: 100, imageName: 'coffeeCup'},
            {id: 5, name: 'Cola', price: 100, imageName: 'cola'},
            {id: 6, name: 'Water', price: 100, imageName: 'water'},
            {id: 7, name: 'Fried Potatoes', price: 100, imageName: 'friedPotatoes'},
            {id: 8, name: 'Noodles', price: 100, imageName: 'noodles'},
            {id: 9, name: 'Wine', price: 100, imageName: 'wineGlass'}
        ];
        return (
            <div className='Cart-content container'>
                <div className='col'>
                    <div className='header row'>
                        <p>Order Summary</p>
                    </div>
                    <div className='items'>
                        {
                            products.map((product) => {
                                return(
                                    <Item item={product} key={product.id}/>
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