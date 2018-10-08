import React, { Component } from 'react';
import Product from './Product.js';
import ProductForm from './ProductForm.js';

class EditableProduct extends Component {
  render() {
    return(
      <div className="product">
        <div className="product-details">
          <Product />
          <a className="delete-button"><span>X</span></a>
        </div>
        <ProductForm />
      </div>
    );
  }
}

export default EditableProduct;
