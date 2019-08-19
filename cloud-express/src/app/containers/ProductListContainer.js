import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//components
import DashboardContainer from "./DashboardContainer";
import ProductListContent from "../components/productList/ProductListContent";
import CartContainer from "./CartContainer";
//actions
import * as productListAction from '../actions/productListAction';

class ProductListContainer extends Component {

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
                            <ProductListContent product={this.props.product}/>
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

ProductListContainer.propTypes = {}
ProductListContainer.defaultProps = {}

const mapStateToProps = (state) => {
    return {
        products: state.productListReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(productListAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);