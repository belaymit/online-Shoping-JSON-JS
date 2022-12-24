import addToCartList from './addToCartList.js';

let cartItemID = 1;

const getProductInfo = (product) => {
  // eslint-disable-next-line prefer-const
  let productInfo = {
    id: cartItemID,
    image: product.querySelector('.product-img img').src,
    title: product.querySelector('.product-name').textContent,
    category: product.querySelector('.product-category').textContent,
    price: product.querySelector('.product-price').textContent,
  };
  cartItemID += 1;
  addToCartList(productInfo);
};

const cartItems = (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const product = e.target.parentElement.parentElement;
    getProductInfo(product);
  }
};

export default cartItems;