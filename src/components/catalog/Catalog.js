class Catalog {
  constructor(
    cartService,
    modalService
  ) {
    this.cartService = cartService;
    this.modalService = modalService;
    this.catalogListBox = document.querySelector(".catalog__books-list");

    this.init();
    this.inited = false;
  }

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

  init() {
    if (!this.inited) {
      // Навесить слушатели на каталог
      this.catalogListBox.addEventListener("click", (e) => {
        e.preventDefault();
        
        const card = e.target.closest(".card");
        
        // Открытие модального окна
        if (e.target.closest(".card .card__inner")) {
          const { id } = card.dataset;
          const book = this.findBook(id);
          const htmlBook = this.renderHtmlForModal(book);
          this.modalService.open(htmlBook);
        }
        
        // Добавление в корзину
        if (e.target.closest(".card .card__buy")) {
          const { id } = card.dataset;
          this.addProductToCart(id);
        }
      });
    }

    this.inited = true;
  }

  findBook(id) {
    const index = books.findIndex(item => {
      return item.uri === id;
    });

    return books[index];
  }

  openModal() {}
  
  addProductToCart(id) {
    this.cartService.putProducts(id);
  }

  renderHtmlForModal(product) {
    return `
              <div class="product">
                <div class="product__img-wrap">
                  <img
                    src="img/books/${product.uri}.jpg"
                    alt="${product.name}"
                    width="422"
                    height="594"
                  />
                </div>
                <div class="product__text-info">
                  <h2 class="product__title">${product.name}</h2>
                  <div class="rating product__rating">
                    <span class="rating__stars">
                      <svg width="18" height="18">
                        <use xlink:href="#star"></use>
                      </svg>
                      <svg width="18" height="18">
                        <use xlink:href="#star"></use>
                      </svg>
                      <svg width="18" height="18">
                        <use xlink:href="#star"></use>
                      </svg>
                      <svg width="18" height="18">
                        <use xlink:href="#star"></use>
                      </svg>
                      <svg width="18" height="18">
                        <use xlink:href="#star-half"></use>
                      </svg>
                    </span>
                    <span class="rating__num">4.6/5.0</span>
                    <span class="rating__review">20 отзывов</span>
                  </div>
                  <table class="product__table-info">
                    <tr>
                      <th>Автор:</th>
                      <td>
                        <a href="">Девид Огилви</a>
                      </td>
                    </tr>
                    <tr>
                      <th>Артикул:</th>
                      <td>6649507</td>
                    </tr>
                    <tr>
                      <th>В наличии:</th>
                      <td>5 шт.</td>
                    </tr>
                  </table>
                </div>
                <div class="product__descr">
                  <h3 class="product__subtitle">Описание:</h3>
                  <p>
                  ${product.desc}
                  </p>
                  <div class="product__actions">
                    <button class="btn  btn--price">
                      ${product.price} ₽
                      <span class="btn__sm-text">
                        <svg class="btn__icon" width="14" height="14">
                          <use xlink:href="#plus"></use>
                        </svg>
                        <span>В корзину</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
    `;
  
  }

  render() {
    let catalogList = "";

    books.forEach(({ name, desc, price, uri, type }) => {
      catalogList += `
                <article class="card" data-id="${uri}">
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
                    <button class="btn btn--sm card__buy" data-id="${uri}">
                        <svg class="btn__icon" width="14" height="14">
                            <use xlink:href="#plus"></use>
                        </svg>
                    <span>В корзину</span>
                    </button>
              </article>
            `;
    });

    this.catalogListBox.innerHTML = catalogList;
  }
}

// const catalogListBox = document.querySelector('.catalog__books-list');
// // // Добавление в корзину
// const productsStore = localStorageProducts.getProducts();
// const cartCounter = document.querySelector(".page-header__cart-num");
// const productsCounter = () => {
//     cartCounter.innerHTML = productsStore.length;
// };
// //   productsCounter();

export default Catalog;
