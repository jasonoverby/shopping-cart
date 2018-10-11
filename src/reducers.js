import DATA from './lib/data.js';

let nextProductId = 25;

const cart = { 
  10: { title: 'book', quantity: 5, price: 5.00 },
  20: { title: 'pencil', quantity: 15, price: 0.25 },
};

const rootReducer = (state = {DATA, cart}, action) => {
  if (action.type === 'CHECKOUT') {
    return Object.assign({}, state, {cart: {}});
  } else if (action.type === 'DELETE') {
    const newData = state.DATA.filter((product) => {
       return product.id !== action.productId;
    });
    return Object.assign({}, state, { DATA: newData });
  } else if (action.type === 'ADD_TO_CART') {

    const newCart = Object.assign({}, state.cart);
    const newData = state.DATA.map(p => Object.assign({}, p));
    const product = newData.find(p => p.id === action.productId);

    if (product.quantity <= 0) 
      return state;
      // increment/introduce value in cart
    if (newCart[action.productId]) {
      newCart[action.productId] = Object.assign({}, newCart[action.productId]);
      newCart[action.productId].quantity ++;
    } else {
      newCart[action.productId] = Object.assign({}, product);
      delete newCart[action.productId].id;
      newCart[action.productId].quantity = 1;
    };
    // decrement quantity in product list
    product.quantity --;
    return { DATA: newData, cart: newCart };
  } else if (action.type === 'UPDATE') {
    const {type, ...updatedProduct} = action;
    const products = state.DATA.map((product) => {
      if (updatedProduct.id === product.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    return Object.assign({}, state, { DATA: products });
  } else if (action.type === 'CREATE') {
    const {type, ...newProduct} = action;
// TODO: change this later
    newProduct.id = nextProductId;
    nextProductId += 1;
    return Object.assign({}, state, { DATA: DATA.concat(newProduct) });
  } else {
    return state;
  }
};


export default rootReducer;