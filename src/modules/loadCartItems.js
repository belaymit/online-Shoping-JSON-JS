import getProductsFromImage from './localStorageHandler.js';
import addToCartList from './addToCartList.js';

const loadCartItems = () => {
  let cartItemID = 1;
  const products = getProductsFromImage();
  if (products.length < 1) {
    cartItemID = 1;
  } else {
    cartItemID = products[products.length - 1].id;
    // eslint-disable-next-line no-unused-vars
    cartItemID += 1;
  }
  products.forEach((product) => addToCartList(product));
};

export default loadCartItems;