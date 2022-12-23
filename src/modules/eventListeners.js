import {
  navbarToggler, navbarCollapse, cartBtn, cartContainer,
} from './allConstants.js';
import fetchProduct from './fetchProduct.js';

const eventListener = () => {
  window.addEventListener('DOMContentLoaded', () => {
    fetchProduct();
  });
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show-navbar');
  });
  cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart-container');
  });
};
export default eventListener;