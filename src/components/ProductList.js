import React, { Component } from 'react';
import EditableProduct from './EditableProduct.js'

class ProductList extends Component {
  render() {
    return(
      <div className="product-listing">
        <h2>Products</h2>
        <EditableProduct />
        <EditableProduct />
        <EditableProduct />
      </div>
    );
  }
}

export default ProductList;