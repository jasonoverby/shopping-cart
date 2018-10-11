import React, { Component } from 'react';
import EditableProduct from './EditableProduct.js';
import store from '../store.js';

class ProductList extends Component {


  render() {
    const products = store.getState().DATA;
    const list = products.map((product) => {
      return <EditableProduct
        key={product.id}
        { ...product }
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
/*onProductDelete={this.props.onProductDelete}
        onUpdateInventory={this.props.onUpdateInventory}
        addToCart={this.props.addToCart}*/