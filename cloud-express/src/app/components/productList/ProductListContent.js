import React, {Component} from 'react';
import '../../../scss/productList/productListContent.css';

class ProductListContent extends Component {
    render() {
        let products = [ { name : 'item1', price : 100 }, { name : 'item1', price : 100 }, { name : 'item1', price : 100 }];

        return (
            <div className='Product-list container-fluid'>
                {
                    products.map((product) => {
                        return product.name
                    })
                }
            </div>
        );
    }
}

export default ProductListContent;