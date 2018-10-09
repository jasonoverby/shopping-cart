import React, { Component } from 'react';

class Product extends Component {
  addToCartClick = (e) => {
    e.preventDefault();
    this.props.add(this.props.id);
  }

  render() { 
    const soldOut = this.props.quantity === 0 ? 'disabled' : '';  
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p className="price">${this.props.price}</p>
        <p className="quantity">{this.props.quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={"button add-to-cart " + soldOut} onClick={this.addToCartClick}>Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
      </div> 
    );
  }
}

export default Product;
