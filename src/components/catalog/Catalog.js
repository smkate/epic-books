class Catalog {
  constructor(selector, cartService, modalService) {
    this.cartService = cartService;
    this.modalService = modalService;
    
    this.catalogListBox = document.querySelector(selector);

    this.init();
  }

  init() {
    // Навесить слушатели на каталог
    this.catalogListBox.addEventListener("click", (e) => {
      e.preventDefault();

      // Открытие модального окна
      if (e.target.closest(".card .card__inner")) {
        const card = e.target.closest(".card");
        const { id } = card.dataset;
        const book = this.findBook(id);

        const htmlBook = this.renderHtmlForModal(book);
        this.modalService.open(htmlBook);
      }

      // Добавление в корзину
      if (e.target.closest("[data-add-cart]")) {
        const item = e.target.closest("[data-add-cart]")
        const { id } = item.dataset;
        this.addProductToCart(id);    
      }
    });
  }

  

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
                        <a href="">${product.author}</a>
                      </td>
                    </tr>
                    <tr>
                      <th>Артикул:</th>
                      <td>${product.article}</td>
                    </tr>
                    <tr>
                      <th>В наличии:</th>
                      <td>${product.store} шт.</td>
                    </tr>
                  </table>
                </div>
                <div class="product__descr">
                  <h3 class="product__subtitle">Описание:</h3>
                  <p>
                  ${product.desc}
                  </p>
                  <div class="product__actions">
                    <button class="btn  btn--price" data-id="${product.uri}" data-add-cart>
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

  renderOne({ name, price, uri }) {
    return `
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
        <button class="btn btn--sm card__buy" data-id="${uri}" data-add-cart>
          <svg class="btn__icon" width="14" height="14">
              <use xlink:href="#plus"></use>
          </svg>
          <span>В корзину</span>
        </button>
      </article>
    `;
  }

  render() {
    let catalogList = "";

    books.forEach((book) => {
        catalogList += this.renderOne(book);
      });

    this.catalogListBox.innerHTML = catalogList;
  }

  renderSlider() {
    let sliderList = "";

    books.forEach((book) => {
      sliderList += `
            <div class="popular__slide">
              ${this.renderOne(book)}
            </div>
          `;
    });

    this.catalogListBox.innerHTML = sliderList;
  }
}

export default Catalog;
