import { cartList } from './allConstants.js';

const addToCartList = (data) => {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', `${data.id}`);
  cartItem.innerHTML = `
                <img src="${data.image}" alt="${data.title}" />
                  <div class="cart-item-info">
                    <h3 class="cart-item-name">${data.title}</h3>
                    <span class="cart-item-category">${data.category}</span>
                    <span class="cart-item-price">${data.price}</span>
                  </div>
                  <button type="button" class="cart-item-del-btn">
                    <i class="fas fa-times"></i>
                  </button>`;
  cartList.appendChild(cartItem);
};
export default addToCartList;