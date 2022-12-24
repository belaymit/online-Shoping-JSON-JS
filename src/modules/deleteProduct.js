import getProductsFromImage from './localStorageHandler.js';
import updateCartInfo from './updateCartInfo.js';

const deleteProduct = (e) => {
  let cartItem;
  if (e.target.tagName === 'BUTTON') {
    cartItem = e.target.parentElement;
    cartItem.remove();
  } else if (e.target.tagName === 'I') {
    cartItem = e.target.parentElement.parentElement;
    cartItem.remove();
  }
  const products = getProductsFromImage();
  // eslint-disable-next-line max-len
  const updateProducts = products.filter((product) => product.id !== parseInt(cartItem.dataset.id, 10));
  localStorage.setItem('products', JSON.stringify(updateProducts));
  updateCartInfo();
};

export default deleteProduct;