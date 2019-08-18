import React, {Component} from 'react';
import PropTypes from 'prop-types';

//components
import Dashboard from "./Dashboard";
import ProductListContent from "../components/productList/ProductListContent";

class ProductList extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <ProductListContent/>
            </div>
        );
    }
}

ProductList.propTypes = {

}

ProductList.defaultProps = {

}
export default ProductList;