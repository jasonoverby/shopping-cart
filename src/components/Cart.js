import React, { Component } from 'react';
import CartItem from './CartItem.js';
import store from '../store.js';

class Cart extends Component {
  checkout = (e) => {
      e.preventDefault();
      store.dispatch({ type: 'CHECKOUT' });
  };


  render() {
    const items = store.getState().cart;
    const cartItems = [];

    for (let id in items) {
      cartItems.push(<CartItem key={id} { ...items[id] } />)
    }

    const total = Object.values(items).reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);



    return cartItems.length !== 0 ? (
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems}
            <tr>
              <td colSpan="3" className="total">Total: ${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <a onClick={this.checkout} className="button checkout">Checkout</a>
      </div>
    ) : (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your Cart is Empty</p>
        <p>Total: $0</p>
        <a onClick={this.checkout} className="button disabled checkout">Checkout</a>
      </div>
    );
  }
}

export default Cart;
