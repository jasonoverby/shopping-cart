import React, { Component } from 'react';
import Cart from './Cart.js';
import ProductList from './ProductList.js';
import ProductForm from './ProductForm.js';
import DATA from '../lib/data.js';
import ToggleableProductForm from './ToggleableProductForm.js'

let nextProductId = 5;

class Shop extends Component {
  state = {
    DATA,
    cart: {
      1: {
        title: 'Amazon Kindle E-reader',
        quantity: 2,
        price: 79.99,
      },
    },
  };

  handleAddInventory = (newProduct) => {
    newProduct.id = nextProductId;
    nextProductId += 1;

    this.setState({
      DATA: DATA.concat(newProduct)
    });
  };

  handleAddToCart (item_id) {
    const newCart = Object.assign({}, this.state.cart);
    const newData = this.state.DATA.map(p => Object.assign({}, p));
    const product = newData.find(p => p.id === item_id);

    if (product.quantity <= 0) return;
    // increment/introduce value in cart
    if (newCart[item_id]) {
      newCart[item_id] = Object.assign({}, newCart[item_id]);
      newCart[item_id].quantity ++;
    } else {
      newCart[item_id] = Object.assign({}, product);
      delete newCart[item_id].id;
      newCart[item_id].quantity = 1;
    };
    this.setState({ cart: newCart });
    // decrement quantity in product list
    product.quantity --;
    this.setState({DATA: newData});
  }

  handleCheckout (e) {
    e.preventDefault();
    this.setState({cart: {}});
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart items={this.state.cart} checkout={this.handleCheckout.bind(this)}/>
        </header>

        <main>
          <ProductList products={this.state.DATA} add={this.handleAddToCart.bind(this)} />
          <ToggleableProductForm onAddInventory={this.handleAddInventory}/>
        </main>
      </div>
    );
  }
}

export default Shop;
