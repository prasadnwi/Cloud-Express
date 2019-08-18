import React, {Component} from 'react';
import '../../../scss/cart/item.css';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className='Item container-fluid'>
                <div className='row'>
                    <div className='col-lg-7'>
                        {item.name}
                    </div>
                    <div className='col-lg-2'>
                        *2
                    </div>
                    <div className='col-lg-3'>
                        {item.price}
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item : PropTypes.object
}

Item.defaultProps = {

}

export default Item;