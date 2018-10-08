import React, { Component } from 'react';
import Cart from './Cart.js';
import ProductList from './ProductList.js';
import ProductForm from './ProductForm.js';
import DATA from '../lib/data.js';

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

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart items={Object.values(this.state.cart)}/>
        </header>

        <main>
          <ProductList products={this.state.DATA}/>
          <ProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;
