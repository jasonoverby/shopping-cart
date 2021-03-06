import React, { Component } from 'react';
import Product from './Product.js';
import ProductForm from './ProductForm.js';
import store from '../store.js'

class EditableProduct extends Component {
  state = {
    showForm: false,
  }

  handleToggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    })
  };

  deleteProduct = (e) => {
    e.preventDefault();   
    store.dispatch({ type: 'DELETE', productId: this.props.id });
  };

  render() {
    return(
      <div className="product">
        <div className="product-details">
          <Product
            toggleForm={this.handleToggleForm}
            showForm={this.state.showForm}
            { ...this.props }
          />
          <a className="delete-button" onClick={this.deleteProduct}><span>X</span></a>
        </div>

        {this.state.showForm ? <ProductForm onButtonClick={this.handleToggleForm} { ...this.props } /> : ''}
      </div>
    );
  }
}

export default EditableProduct;
