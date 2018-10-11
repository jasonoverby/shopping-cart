import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import Cart from '../components/Cart';

it('has an h1 element', () => {
  const wrapper = shallow(<Shop />);
  expect(wrapper.find('h1').text()).toEqual('The Shop!');
});

describe('ProductForm', () => {
  let myFunc;

  beforeEach(() => {
    myFunc = jest.fn();
  });

  it('should call onButtonClick when submitted', () => {
    const wrapper = shallow(<ProductForm
      onButtonClick={myFunc}
      onAddInventory={Function.prototype}
    />);
    const input = wrapper.find('input[name="title"]').first();
    const button = wrapper.find('#add');
    button.simulate('click', {
      preventDefault: Function.prototype
    });
    expect(myFunc.mock.calls.length).toEqual(1);
  });

  it('should populate title field with user input', () => {
    const wrapper = shallow(<ProductForm
      onButtonClick={myFunc}
      onAddInventory={Function.prototype}
    />);
    const input = wrapper.find('input[name="title"]').first();
    input.simulate('change', {
      preventDefault: () => {},
      target: { name: 'title', value: 'book' }
    });
    expect(wrapper.state().fields.title).toBe('book');
  });

  it('should call onAddInventory', () => {
    const wrapper = shallow(<ProductForm
      onButtonClick={Function.prototype}
      onAddInventory={myFunc}
    />);
    const button = wrapper.find('#add');
    // const button = wrapper.find('.button').get(1);
    button.simulate('click', {
      preventDefault: Function.prototype
    });
    expect(myFunc.mock.calls.length).toEqual(1);
  });
});

describe('Cart', () => {
  it('should contain text: Your Cart is Empty', () => {
    const wrapper = shallow(<Cart items={{}} />);
    const p = wrapper.find('p').first();
    expect(p.text()).toBe('Your Cart is Empty');
  });

  it('should not contain text: Your Cart is Empty', () => {
    const wrapper = shallow(<Cart items={{something: 'something'}} />);
    expect(wrapper.containsMatchingElement('p')).toBe(false);
  });
});

describe('Shop', () => {
  it('should not contain any Products', () => {
    const wrapper = shallow(<Shop />);
    wrapper.setState({ DATA: [] });
    expect(wrapper.containsMatchingElement('.product')).toBe(false);
  });

  it('should contain any Products', () => {
    const wrapper = shallow(<Shop />);
    // expect(wrapper.containsMatchingElement(<Product />)).toBe(true);
  });
});
