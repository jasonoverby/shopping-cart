import React, { Component } from 'react';
import ProductForm from './ProductForm.js'

class ToggleableProductForm extends Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.toggleForm();
  }

  render() {
    return (
      this.state.showForm ? (
        <ProductForm
          onButtonClick={this.toggleForm}
          onAddInventory={this.props.onAddInventory} 
        />
      ) : (
        <p><a className="button add-product-button"
            onClick={this.handleClick}
           >Add A Product</a></p>
      )
    );
  }
}

export default ToggleableProductForm;
