import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//components
import DashboardContainer from "./DashboardContainer";
import ProductListContent from "../components/productList/ProductListContent";
import CartContainer from "./CartContainer";
//actions
import * as productListActions from '../actions/productListAction';
import * as cartActions from '../actions/cartAction';

class ProductListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //get all products
        this.props.actions.getProductList();
    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <ProductListContent
                                products={this.props.products}
                                addItemIntoCart={this.props.actions.addItemIntoCart}
                            />
                        </div>
                        <div className='col-lg-4'>
                            <CartContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductListContainer.propTypes = {
    products: PropTypes.array
};
ProductListContainer.defaultProps = {
    products: []
};

const mapStateToProps = (state) => {
    return {
        products: state.productListReducer.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, cartActions, productListActions), dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);