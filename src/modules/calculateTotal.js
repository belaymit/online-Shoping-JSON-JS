import getProductsFromImage from './localStorageHandler.js';

const findCartInfo = () => {
  const products = getProductsFromImage();
  const total = products.reduce((acc, product) => {
    const price = parseFloat(product.price.substr(1));
    acc += price;
    return acc;
  }, 0);
  return {
    total: total.toFixed(2),
    productCount: products.length,
  };
};
export default findCartInfo;