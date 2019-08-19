import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import ProductDetailsContent from "../components/productDetails/ProductDetailsContent";

class ProductDetails extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <ProductDetailsContent/>
            </div>
        );
    }
}

export default ProductDetails;