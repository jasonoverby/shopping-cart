import React, { Component } from 'react';

class ProductForm extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  }

  render() {
    return (
      <div className="add-form">
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" defaultValue="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" defaultValue="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" defaultValue="" />
          </div>

          <div className="actions form-actions">
            <a className="button">Add</a>
            <a className="button" onClick={this.handleClick}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
