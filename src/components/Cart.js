import React, { Component } from 'react';
import CartItem from './CartItem.js';

class Cart extends Component {
  render() {
    const cartItems = this.props.items.map((item) => {
      return <CartItem { ...item } />;
    });
    const total = this.props.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);

    return(
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
              <td colSpan="3" className="total">Total: {total}</td>
            </tr>
          </tbody>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    );
  }
}

export default Cart;
