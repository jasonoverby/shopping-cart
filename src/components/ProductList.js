import React, { Component } from 'react';
import EditableProduct from './EditableProduct.js'

class ProductList extends Component {
  render() {
    const list = this.props.products.map((product) => {
      return <EditableProduct
        key={product.id}
        { ...product }
        onUpdateInventory={this.props.onUpdateInventory}
        addToCart={this.props.addToCart}
      />;
    });

    return(
      <div className="product-listing">
        <h2>Products</h2>
        {list}
      </div>
    );
  }
}

export default ProductList;
