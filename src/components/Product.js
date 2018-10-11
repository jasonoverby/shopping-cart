import React, { Component } from 'react';
import store from '../store.js';

class Product extends Component {
//  handleAddToCartClick = (e) => {
//    e.preventDefault();
//    this.props.addToCart(this.props.id);
//  }

  addToCart = (e) => {
    e.preventDefault();
    store.dispatch({ type: 'ADD_TO_CART', productId: this.props.id });
  }

  handleEditClick = (e) => {
    e.preventDefault();
    this.props.toggleForm();
  };


  render() {
    const soldOut = this.props.quantity === 0 ? 'disabled' : '';
    return (this.props.showForm ?
    (
      <div>
        <h3>{this.props.title}</h3>
        <p className="price">${this.props.price}</p>
        <p className="quantity">{this.props.quantity} left in stock</p>
      </div>
    ) : (
      <div>
        <h3>{this.props.title}</h3>
        <p className="price">${this.props.price}</p>
        <p className="quantity">{this.props.quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={"button add-to-cart " + soldOut} onClick={this.addToCart}>Add to Cart</a>
          <a className="button edit" onClick={this.handleEditClick}>Edit</a>
        </div>
      </div>
    ));
  }
}

export default Product;
