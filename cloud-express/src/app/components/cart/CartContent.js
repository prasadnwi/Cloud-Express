import React, {Component} from 'react';
import '../../../scss/cart/cartContent.css';
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
            <div className='Cart-content container-fluid'>
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