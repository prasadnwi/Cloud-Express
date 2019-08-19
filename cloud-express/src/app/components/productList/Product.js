import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../scss/component/productList/product.css';
import {browserHistory} from '../../../App';
//images
import apple from '../../../assets/images/products/apple.png';
import burger from '../../../assets/images/products/burger.png';
import champagne from '../../../assets/images/products/champagne.png';
import coffeeCup from '../../../assets/images/products/coffeeCup.png';
import cola from '../../../assets/images/products/cola.png';
import drink from '../../../assets/images/products/drink.png';
import friedPotatoes from '../../../assets/images/products/friedPotatoes.png';
import noodles from '../../../assets/images/products/noodles.png';
import wineGlass from '../../../assets/images/products/wineGlass.png';

class Product extends Component {

    //set relevant image for product
    setImage = () => {
        let image, imageName = this.props.product.imageName;
        switch (imageName) {
            case 'apple':
                image = apple;
                break;
            case 'burger':
                image = burger;
                break;
            case 'champagne':
                image = champagne;
                break;
            case 'coffeeCup':
                image = coffeeCup;
                break;
            case 'cola':
                image = cola;
                break;
            case 'drink':
                image = drink;
                break;
            case 'friedPotatoes':
                image = friedPotatoes;
                break;
            case 'noodles':
                image = noodles;
                break;
            case 'wineGlass':
                image = wineGlass;
                break;
            default:
                image = apple;
                break;
        }

        return image;
    };

    //show product details
    onClickProduct = () => {
        const url = `product/${this.props.product.id}`;
        browserHistory.push('/' + url);
    };

    //add item into cart
    onClickCart = () => {
        this.props.addItemIntoCart(this.props.product);
    };

    render() {
        const {product} = this.props;
        return (
            <div className='Product container-fluid'>
                <div className='col'>
                    {/*image*/}
                    <div className='item-image row' onClick={this.onClickProduct}>
                        <img src={this.setImage()}/>
                    </div>
                    {/*details*/}
                    <div className='item-details row'>
                        <p className='name col-6'>{product.name}</p>
                        <p className='price col-6'>Rs{product.price}</p>
                    </div>
                    <div className='cart row'>
                        <button className="btn add-cart" onClick={this.onClickCart}><i className="fa fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object,
};
Product.defaultProps = {
    product: {}
};

export default Product;