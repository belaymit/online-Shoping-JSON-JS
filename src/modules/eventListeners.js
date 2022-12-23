import {
  navbarToggler, navbarCollapse, cartBtn, cartContainer,
} from './allConstants.js';

const eventListener = () => {
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show-navbar');
  });
  cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart-container');
  });
};
export default eventListener;