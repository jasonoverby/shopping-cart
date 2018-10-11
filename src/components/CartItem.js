import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

//const CartItem = (id, title, quantity, price) => {
//  return (      
//    <tr key={id}>
//      <td>{title}</td>
//      <td>{quantity}</td>
//      <td>{price}</td>
//    </tr>
//  );
//}

export default CartItem;
