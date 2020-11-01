export default (print) => {
    const catalogListBox = document.querySelector('.catalog__books-list');


class Products {

    // handleSetLocalStorage(element, name) {
    //     const result = localStorageProducts.putProducts(name);
    //     productsCounter();
    // }
    
    // const printCatalogItems = () => {
    //     // Item acticle
    //     const itemArticle = document.createElement("article");
    //     itemArticle.classList.add("card");
    //     // Item link
    //     const itemLink = document.createElement("a");
    //     itemArticle.classList.add("card__inner");
    //     itemArticle.classList.add("card");
    //     // Item img
    //     const itemImage = document.createElement("img");
    //     completedButton.innerHTML = '<img
    //     class="card__img"
    //     src="img/books/${uri}.jpg"
    //     width="148"
    //     height="208"
    //     alt="${name}"
    // />';
    // }

    render() {
        let catalogList = '';

        books.forEach(({name, desc, price, uri, type}) => {
            catalogList += `
                <article class="card">
                    <a class="card__inner" href="index.html#klienty-na-vsyu-zhizn">
                    <img
                        class="card__img"
                        src="img/books/${uri}.jpg"
                        width="148"
                        height="208"
                        alt="${name}"
                    />
                    <h2 class="card__title">${name}</h2>
                    <p class="card__price">${price} ₽</p>
                    </a>
                    <button class="btn btn--sm card__buy" onclick="productsPage.handleSetLocalStorage(this, '${name}');">
                    <svg class="btn__icon" width="14" height="14">
                        <use xlink:href="#plus"></use>
                    </svg>
                    <span>В корзину</span>
                    </button>
              </article>
            `;
        });

        catalogListBox.innerHTML = catalogList;
    }
}


    const productsPage = new Products();
    productsPage.render();

    // const catalogListBox = document.querySelector('.catalog__books-list');
    // // // Добавление в корзину
    // const productsStore = localStorageProducts.getProducts();
    // const cartCounter = document.querySelector(".page-header__cart-num");
    // const productsCounter = () => {
    //     cartCounter.innerHTML = productsStore.length;
    // };
    // //   productsCounter();

};