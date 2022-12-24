const getProductsFromImage = () => (localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []);

export default getProductsFromImage;