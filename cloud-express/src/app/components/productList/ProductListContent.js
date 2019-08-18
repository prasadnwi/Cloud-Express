import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../scss/productList/productListContent.css';

// components
import Product from './Product';

class ProductListContent extends Component {
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
            <div className='Product-list-wrapper container-fluid'>
                    {/*show products*/}
                    <div className='products'>
                        <div className='list-content'>
                            {
                                products.map((product) => {
                                    return (
                                        <Product item = {product}/>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        );
    }
}

export default ProductListContent;