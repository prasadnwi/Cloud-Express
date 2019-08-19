import React, {Component} from 'react';
import '../../../scss/component/productList/productListContent.css';
// components
import Product from './Product';

class ProductListContent extends Component {
    render() {
        const {products} = this.props;
        return (
            <div className='Product-list-wrapper container-fluid'>
                {/*show products*/}
                <div className='products'>
                    <div className='list-content'>
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