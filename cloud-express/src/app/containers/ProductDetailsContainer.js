import React, {Component} from 'react';
import DashboardContainer from "./DashboardContainer";
import ProductDetailsContent from "../components/productDetails/ProductDetailsContent";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as productDetailsAction from '../actions/productDetailsAction';

class ProductDetailsContainer extends Component {

    componentDidMount() {
        // get product details
        this.getProductDetails();
    }

    componentWillUnmount() {
        this.props.actions.clearDetails();
    }

    getProductDetails = () => {
        const productId = this.props.match.params.id ? this.props.match.params.id : 1;
        this.props.actions.getProductDetails(productId);
    };

    render() {
        return (
            <div>
                <DashboardContainer/>
                <ProductDetailsContent product={this.props.product}/>
            </div>
        );
    }
}

ProductDetailsContainer.propTypes = {
    product: PropTypes.object
};
ProductDetailsContainer.defaultProps = {
    product: {}
};

const mapStateToProps = (state) => {
    return {
        product: state.productDetailsReducer.product
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(productDetailsAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);