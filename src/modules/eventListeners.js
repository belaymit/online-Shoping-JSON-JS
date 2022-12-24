import {
  navbarToggler, navbarCollapse, cartBtn, cartContainer, productList,
} from './allConstants.js';
import fetchProduct from './fetchProduct.js';
import cartItems from './cartItems.js';
import loadCartItems from './loadCartItems.js';

const eventListener = () => {
  window.addEventListener('DOMContentLoaded', () => {
    fetchProduct();
    loadCartItems();
  });
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show-navbar');
  });
  cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart-container');
  });

  productList.addEventListener('click', cartItems);
};
export default eventListener;