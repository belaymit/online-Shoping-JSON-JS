import findCartInfo from './calculateTotal.js';
import { cartTotalValue, cartCountInfo } from './allConstants.js';

const updateCartInfo = () => {
  const cartInfo = findCartInfo();
  cartCountInfo.textContent = cartInfo.productCount;
  cartTotalValue.textContent = cartInfo.total;
};
export default updateCartInfo;