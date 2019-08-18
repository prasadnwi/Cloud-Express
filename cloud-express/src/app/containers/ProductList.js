import React, {Component} from 'react';
import PropTypes from 'prop-types';

//components
import Dashboard from "./Dashboard";
import ProductListContent from "../components/productList/ProductListContent";
import Cart from "./Cart";

class ProductList extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <ProductListContent/>
                        </div>
                        <div className='col-lg-4'>
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

}

ProductList.defaultProps = {

}
export default ProductList;