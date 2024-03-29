import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../../../scss/component/productDetails/ProductDetailsContent.css';
import CartContainer from "../../containers/CartContainer";
//images
import apple from "../../../assets/images/products/apple.png";
import burger from "../../../assets/images/products/burger.png";
import champagne from "../../../assets/images/products/champagne.png";
import coffeeCup from "../../../assets/images/products/coffeeCup.png";
import cola from "../../../assets/images/products/cola.png";
import drink from "../../../assets/images/products/drink.png";
import friedPotatoes from "../../../assets/images/products/friedPotatoes.png";
import noodles from "../../../assets/images/products/noodles.png";
import wineGlass from "../../../assets/images/products/wineGlass.png";
import {browserHistory} from "../../../App";

class ProductDetailsContent extends Component {

    setImage = () => {
        let image, {id} = this.props;
        switch (id) {
            case 1:
                image = apple;
                break;
            case 2:
                image = burger;
                break;
            case 3:
                image = champagne;
                break;
            case 4:
                image = coffeeCup;
                break;
            case 5:
                image = cola;
                break;
            case 6:
                image = drink;
                break;
            case 7:
                image = friedPotatoes;
                break;
            case 8:
                image = noodles;
                break;
            case 9:
                image = wineGlass;
                break;
            default:
                image = apple;
                break;
        }

        return image;
    };

    onClickBackButton = () => {
        const url = `product/`;
        browserHistory.push('/' + url);
    };

    render() {
        let product = {
            name: 'Apple',
            price: 100,
            imageName: 'apple',
            description: 'this is a test description',
            rating: 4,
            vendor: 'Sri lankan Apple'
        };

        return (
            <div className='ProductDetailsContent container'>
                <div className='back row'>
                    <button className="btn" onClick={this.onClickBackButton}><i className="fa fa-arrow-circle-left"></i>
                    </button>
                </div>
                <div className='row'>
                    {/*image*/}
                    <div className='image col-lg-4 col-md-4'>
                        <img src={this.setImage()}/>
                    </div>

                    {/*details*/}
                    <div className='details col-lg-4 col-md-4'>
                        <div class="row">
                            <label htmlFor="name" className="col-lg-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="name"
                                       value={product.name}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="price" className="col-lg-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="price"
                                       value={product.price}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="description" className="col-lg-2 col-form-label">Description </label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="description"
                                       value={product.description}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="rating" className="col-lg-2 col-form-label">Rating</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="rating"
                                       value={product.rating}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="vendor" className="col-sm-2 col-form-label">Vendor</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="vendor"
                                       value={product.vendor}/>
                            </div>
                        </div>
                    </div>

                    {/* cart*/}
                    <div className='cart col-lg-3 col-md-3'>
                        <CartContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

ProductDetailsContent.propTypes = {
    id: PropTypes.number
};
ProductDetailsContent.defaultProps = {};

export default ProductDetailsContent;