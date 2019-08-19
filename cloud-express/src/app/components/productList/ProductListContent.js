import React, {Component} from 'react';
import '../../../scss/component/productList/productListContent.css';
// components
import Product from './Product';

class ProductListContent extends Component {
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
            <div className='Product-list-wrapper container-fluid'>
                {/*show products*/}
                <div className='products'>
                    <div className='list-content'>
                        {
                            products.map((product) => {
                                return (
                                    <Product item={product} key={product.id}/>
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