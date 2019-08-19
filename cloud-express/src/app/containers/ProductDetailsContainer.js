import React, {Component} from 'react';
import DashboardContainer from "./DashboardContainer";
import ProductDetailsContent from "../components/productDetails/ProductDetailsContent";

class ProductDetailsContainer extends Component {
    render() {
        return (
            <div>
                <DashboardContainer/>
                <ProductDetailsContent/>
            </div>
        );
    }
}

export default ProductDetailsContainer;