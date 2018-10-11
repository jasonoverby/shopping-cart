import React, { Component } from 'react';
import Cart from './Cart.js';
import ProductList from './ProductList.js';
import ProductForm from './ProductForm.js';
import DATA from '../lib/data.js';
import ToggleableProductForm from './ToggleableProductForm.js'
import store from '../store.js'

let nextProductId = 5;

class Shop extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductList />
          <ToggleableProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;



