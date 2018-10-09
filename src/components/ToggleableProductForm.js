import React, { Component } from 'react';
import ProductForm from './ProductForm.js'

class ToggleableProductForm extends Component {
  state = { showForm: false };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    return (
      this.state.showForm ? (
        <ProductForm onButtonClick={this.handleClick} />
      ) : (
        <p><a className="button add-product-button"
            onClick={this.handleClick}
           >Add A Product</a></p>
      )
    );
  }
}

export default ToggleableProductForm;
