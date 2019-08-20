import React, {Component} from 'react';
import '../../../scss/component/productList/productListContent.css';
// components
import Product from './Product';

class ProductListContent extends Component {
    render() {
        const {products} = this.props;
        return (
            <div className='Product-list-wrapper container-fluid' id='product-list-content'>
                {/*show products*/}
                <div className='products' id='products'>
                    <div className='list-content' id='product-list'>
                        {
                            products.map((product) => {
                                return (
                                    <Product
                                        product={product}
                                        key={product.id}
                                        addItemIntoCart={this.props.addItemIntoCart}
                                    />
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