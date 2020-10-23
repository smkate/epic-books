const productsStore = localStorageProducts.getProducts();
const cartCounter = document.querySelector(".page-header__cart-num");


const productsCounter = () => {
    cartCounter.innerHTML = productsStore.length;
};
productsCounter();