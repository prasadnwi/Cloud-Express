import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// components
import CartContent from '../components/cart/CartContent';
// actions
import * as cartActions from '../actions/cartAction';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <CartContent items={this.props.items}/>
            </div>
        );
    }
}

CartContainer.propTypes = {items: PropTypes.array};
CartContainer.defaultProps = {items: []};

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);