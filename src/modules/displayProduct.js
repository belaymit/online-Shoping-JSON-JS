import { productList } from './allConstants.js';

const displayProduct = (data) => {
  let html = '';
  data.forEach((element) => {
    html += `<div class="product-item">
   <div class="product-img">
     <img src="${element.image}" alt="mack-book" />
     <button type="button" class="add-to-cart">
       <i class="fas fa-shopping-cart"></i>Add To Cart
     </button>
   </div>
   <div class="product-content">
     <h3 class="product-name">${element.title}</h3>
     <span class="product-category">${element.category}</span>
     <p class="product-price">$${element.price}</p>
   </div>
 </div>`;
  });
  productList.innerHTML = html;
};

export default displayProduct;