import getProductsFromImage from './localStorageHandler.js';

const saveProductInStorage = (item) => {
  const products = getProductsFromImage();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
};

export default saveProductInStorage;