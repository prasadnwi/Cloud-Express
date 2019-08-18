import React, {Component} from 'react';

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

export default ProductList;