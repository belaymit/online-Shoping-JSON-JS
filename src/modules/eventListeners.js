import { navbarToggler, navabarCollapse } from './allConstants.js';

const eventListner = () => {
  navbarToggler.addEventListener('click', () => {
    navabarCollapse.classList.toggle('show-navbar');
  });
};
export default eventListner;