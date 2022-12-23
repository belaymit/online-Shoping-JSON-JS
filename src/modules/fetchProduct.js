import displayProduct from './displayProduct.js';

const fetchProduct = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = response.json();
  data.then((object) => displayProduct(object.result));
};

export default fetchProduct;