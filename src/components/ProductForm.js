import React, { Component } from 'react';
import store from '../store.js';

class ProductForm extends Component {
  state = {
    fields: {
      id: this.props.id || '',
      title: this.props.title || '',
      quantity: this.props.quantity || '',
      price: this.props.price || '',
    }
  }

  updateInput = (e) => {
    e.preventDefault();

    this.setState({
      fields: Object.assign({}, this.state.fields, {
        [e.target.name]: e.target.value,
      })
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  };

  update = () => {
    store.dispatch({ type: 'UPDATE', ...this.state.fields });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.update();
    this.props.onButtonClick();
  };

  create = () => {
    store.dispatch({ type: 'CREATE', ...this.state.fields });
  }

  handleCreate = (e) => {
    e.preventDefault();
    this.create();
    this.props.onButtonClick();
  };

  render() {
    return (
      <div className="add-form">
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="title"
              value={this.state.fields.title}
              onChange={this.updateInput}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              name="price"
              value={this.state.fields.price}
              onChange={this.updateInput}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              name="quantity"
              value={this.state.fields.quantity}
              onChange={this.updateInput}
            />
          </div>

          <div className="actions form-actions">
            {this.state.fields.id ?
              <a className="button" onClick={this.handleUpdate}>Update</a> :
              <a className="button" id='add' onClick={this.handleCreate}>Add</a>}
            <a className="button" onClick={this.handleClick}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
