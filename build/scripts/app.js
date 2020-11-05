/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./src/assets/scripts/app.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/cart */ "./src/components/cart/index.js");
/* harmony import */ var _components_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/catalog */ "./src/components/catalog/index.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/slider */ "./src/components/slider/index.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script */ "./src/assets/scripts/script.js");
// import data from '../../static/js/data.js';
// import filter from "../../components/filter";





const init = () => {
  Object(_script__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_catalog__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_components_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_cart__WEBPACK_IMPORTED_MODULE_0__["default"])(); // filter();
};

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", () => init());
}

/***/ }),

/***/ "./src/assets/scripts/script.js":
/*!**************************************!*\
  !*** ./src/assets/scripts/script.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  // ВНИМАНИЕ!
  // Нижеследующий код (кастомный селект и выбор диапазона цены) работает
  // корректно и не вызывает ошибок в консоли браузера только на главной.
  // Одна из ваших задач: сделать так, чтобы на странице корзины в консоли
  // браузера не было ошибок.
  const selectLang = document.querySelector(".field-select:not(#lang) select.field-select__select");
  const selects = document.querySelector("#lang select.field-select__select");

  if (selects) {
    // Кастомные селекты (кроме выбора языка)
    new Choices(".field-select:not(#lang) select.field-select__select", {
      searchEnabled: false,
      shouldSort: false
    });
  }

  if (selectLang) {
    // Кастомный селект выбора языка отдельно
    new Choices("#lang select.field-select__select", {
      searchEnabled: false,
      shouldSort: false,
      callbackOnCreateTemplates: function (template) {
        return {
          item: (classNames, data) => {
            return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ""} ${data.disabled ? 'aria-disabled="true"' : ""}>
              ${getLangInSelectIcon(data.value)} ${data.label.substr(0, 3)}
            </div>
          `);
          },
          choice: (classNames, data) => {
            return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              ${getLangInSelectIcon(data.value)} ${data.label}
            </div>
          `);
          }
        };
      }
    });

    function getLangInSelectIcon(value) {
      if (value == "ru") return '<span class="field-select__lang-ru"></span>';else if (value == "en") return '<span class="field-select__lang-en"></span>';
      return '<span class="field-select__lang-null"></span>';
    }
  }

  console.log(selects, selectLang);
  const range = document.querySelector("#price-range");

  if (range) {
    // Выбор диапазона цен
    var slider = document.getElementById("price-range");
    noUiSlider.create(slider, {
      start: [400, 1000],
      connect: true,
      step: 100,
      range: {
        min: 200,
        max: 2000
      }
    });
  }
});

/***/ }),

/***/ "./src/components/ApiService.js":
/*!**************************************!*\
  !*** ./src/components/ApiService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ApiService {
  constructor() {}

  findBook(id) {
    const index = books.findIndex(item => {
      return item.uri === id;
    });
    return books[index];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ApiService);

/***/ }),

/***/ "./src/components/cart/Cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/Cart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiService */ "./src/components/ApiService.js");


class Cart {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartBox = document.querySelector("[data-cart-content]");
    this.api = new _ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]();

    if (this.cartBox) {
      this.renderCart();
      this.init();
    }
  }

  init() {
    // this.cartBox.addEventListener('click', (e) => {
    // const {target} = e;
    this.cartBox.addEventListener('click', ({
      target
    }) => {
      if (target.closest('[data-plus]')) {
        const id = target.dataset.plus;
        this.cartService.putProducts(id); // this.updateRow();
        // refreshCount
      }

      if (target.closest('[data-minus]')) {
        const id = target.dataset.minus;
        this.cartService.removeProducts(id); // removeAllProducts
        // this.updateRow();
        // refreshCount
      }

      if (target.closest('[data-delete]')) {
        const id = target.dataset.delete;
        this.cartService.deleteProduct(id); // refreshCount
      }
    }); // TODO обработчик ввода
    // обновление количества в поле ввода
    // Пересчет суммы корзины 
    // вывод количстве элементов this.cartService.getCartLength();
    // во все деньги добавить разряды от 10 000 // 9999 // 99 9999 // 8888
  }

  refreshCount() {// Товар, товара, товаров // pieces
    // title.innerHTML = `В корзине ${this.cartService.getCartLength()} ${pieces()}`;
  }

  renderCart(html) {
    const books = this.cartService.getProducts();
    console.log(books);
    let cartContent = `
      <tr class="cart__table-headers">
        <th class="cart__col-1"></th>
        <th class="cart__col-2">Товар</th>
        <th class="cart__col-3">Кол-во</th>
        <th class="cart__col-4">Цена</th>
        <th class="cart__col-5"></th>
      </tr>
    `; // books.forEach((item) => {
    //   const book = this.api.findBook(item.id);
    //   console.log(book);
    //   cartContent += this.renderHtmlForCart({...book, amount: item.amount});
    // });

    books.forEach(({
      id,
      amount
    }) => {
      const book = this.api.findBook(id);
      cartContent += this.renderHtmlForCart({ ...book,
        amount
      });
    });
    const totalPrice = "2 220000";
    cartContent += `
      <tr>
        <td class="cart__products-price" colspan="5">
          Итого к оплате:
          <strong
            class="cart__products-price-num"
            id="cart-products-price-num"
            >${totalPrice} ₽</strong
          >
        </td>
      </tr>
    `;
    this.cartBox.innerHTML = cartContent;
  }

  renderHtmlForCart({
    uri,
    name,
    price,
    amount
  }) {
    return `
          <tr class="cart__product">
            <td class="cart__col-1">
              <img class="cart__item-img" src="img/books/${uri}.jpg" alt="${uri}">
              </td>
                <td class="cart__col-2">
                <div class="cart__item-name">${name}</div>
              </td>

              <td class="cart__col-3">
                <div class="field-num  field-num--bg-tran">
                    <span class="field-num__input-wrap">
                      <button class="field-num__btn-minus" data-minus="${uri}" type="button">-</button>
                      <input class="field-num__input" type="number" value="${amount}" step="1" min="1"/>
                      <button class="field-num__btn-plus" data-plus="${uri}" type="button">+</button>
                    </span>
                </div>
              </td>

              <td class="cart__col-4">
                <span class="cart__item-price">${amount * price} ₽</span>
              </td>

              <td class="cart__col-5">
                <button class="close cart__product-del-btn" data-delete="${uri}" type="button">
                    <svg width="16" height="16">
                      <use xlink:href="#close"></use>
                    </svg>
                </button>
            </td>
          </tr>
      `;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/cart/index.js":
/*!**************************************!*\
  !*** ./src/components/cart/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cart_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/cart/Cart */ "./src/components/cart/Cart.js");
/* harmony import */ var _components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/catalog/CartService */ "./src/components/catalog/CartService.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const cartBox = document.querySelector(".cart__table");
  if (!cartBox) return;
  const cart = new _components_cart_Cart__WEBPACK_IMPORTED_MODULE_0__["default"](_components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__["default"]); // cart.render(); 
}); // Находим куда вывести корзину, если этого места нет, то ничего не делаем
// Получить данные корзины
// Печатаем корзину
// Навесить слушатели
// // Очистка корзины
// // // Затираем массив
// // Поменять количество в строке
// // Удалять элементы из корзины
// const cart = [];
// renderCard(cartList); // [{name: 'Books'}]
// addToCart(bookItem); //
// 1. Вывод состояния корзины на страницу
// 2. Метод добавления товара в корзину
// 3. Метод удаления товара из корзины
// 4. Метод удаления всех товаров из корзины
// 5. Метод изменения количества в плюс
// 6. Метод изменения количества в минус
// 7. Метод ввода значения руками
// 8. Метод вывода количества товаров на иконку Корзины
// 9. Метод вывода количества элементов
// 10. Метод вывода суммы корзины

/***/ }),

/***/ "./src/components/catalog/CartService.js":
/*!***********************************************!*\
  !*** ./src/components/catalog/CartService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class CartService {
  constructor() {
    this.keyName = "cart";
    this.cart = this.getProducts();
    this.cartWidget = document.querySelector(".page-header__cart-num");
    this.updateCartWidget();
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (!productsLocalStorage) return [];
    return JSON.parse(productsLocalStorage);
  }

  putProducts(id) {
    if (!id && !id.length) return;
    const products = this.getProducts();
    const index = products.findIndex(item => {
      return item.id === id;
    });

    if (index !== -1) {
      const amount = products[index].amount;
      products[index].amount = amount + 1;
    } else {
      products.push({
        id,
        amount: 1
      });
    }

    this.updateCartWidget();
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  removeProducts(id) {
    if (!id && !id.length) return;
    const products = this.getProducts();
    const index = products.findIndex(item => {
      return item.id === id;
    });

    if (index !== -1) {
      const amount = products[index].amount;

      if (amount > 1) {
        products[index].amount = amount - 1;
      } else {
        this.deleteProduct(id);
      }
    }

    this.updateCartWidget();
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  deleteProduct(id) {
    if (!id && !id.length) return;
    const products = this.getProducts();
    const index = products.findIndex(item => {
      return item.id === id;
    });

    if (index !== -1) {
      products.splice(index, 1);
    }

    this.updateCartWidget();
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  removeAllProducts() {
    const books = this.getProducts();
    books.forEach(({
      id
    }) => {
      this.deleteProduct(id);
    });
    this.updateCartWidget();
  }

  getCartLength() {
    const cart = this.getProducts();
    let count = 0;
    cart.forEach(item => {
      count += item.amount;
    });
    return count;
  }

  updateCartWidget() {
    this.cartWidget.innerHTML = this.getCartLength();
  }

  getPromotionSum() {}

}

const cartService = new CartService();
/* harmony default export */ __webpack_exports__["default"] = (cartService);

/***/ }),

/***/ "./src/components/catalog/Catalog.js":
/*!*******************************************!*\
  !*** ./src/components/catalog/Catalog.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Catalog {
  constructor(selector, cartService, modalService) {
    this.cartService = cartService;
    this.modalService = modalService;
    this.catalogListBox = document.querySelector(selector);
    this.init();
  }

  init() {
    // Навесить слушатели на каталог
    this.catalogListBox.addEventListener("click", e => {
      e.preventDefault(); // Открытие модального окна

      if (e.target.closest(".card .card__inner")) {
        const card = e.target.closest(".card");
        const {
          id
        } = card.dataset;
        const book = this.findBook(id);
        const htmlBook = this.renderHtmlForModal(book);
        this.modalService.open(htmlBook);
      } // Добавление в корзину


      if (e.target.closest("[data-add-cart]")) {
        const item = e.target.closest("[data-add-cart]");
        const {
          id
        } = item.dataset;
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

  renderOne({
    name,
    price,
    uri
  }) {
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
    books.forEach(book => {
      catalogList += this.renderOne(book);
    });
    this.catalogListBox.innerHTML = catalogList;
  }

  renderSlider() {
    let sliderList = "";
    books.forEach(book => {
      sliderList += `
            <div class="popular__slide">
              ${this.renderOne(book)}
            </div>
          `;
    });
    this.catalogListBox.innerHTML = sliderList;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./src/components/catalog/ModalService.js":
/*!************************************************!*\
  !*** ./src/components/catalog/ModalService.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ModalService {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.isOpen = false;
    if (!this.modal) return;
    this.init();
  }

  init() {
    // слушаем
    // кнопку закрыть
    const closeModalBookBtn = document.querySelector(".modal__close");
    closeModalBookBtn.addEventListener("click", () => {
      this.close();
    }); // escape

    window.addEventListener("keyup", e => {
      if (e.key === "Escape") {
        this.close();
      }
    }); // Добавление в корзину
    // const btnModal = document.querySelector(".btn__sm-text");
    // console.log(btnModal);
    // btnModal.addEventListener("click", () => {
    // const { id } = card.dataset;
    // this.addProductToCart(id);
    //   this.close();
    // });
  }

  open(html) {
    if (!html && !html.length) return;
    this.isOpen = true;
    this.renderModal(html);
    document.documentElement.classList.add("js-modal-open");
    this.modal.classList.add("modal--open");
  }

  close() {
    this.isOpen = false;
    document.documentElement.classList.remove("js-modal-open");
    this.modal.classList.remove("modal--open");
  }

  renderModal(html) {
    const content = this.modal.querySelector("[data-modal-content]");
    content.innerHTML = html;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalService);

/***/ }),

/***/ "./src/components/catalog/index.js":
/*!*****************************************!*\
  !*** ./src/components/catalog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/catalog/Catalog */ "./src/components/catalog/Catalog.js");
/* harmony import */ var _components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/catalog/CartService */ "./src/components/catalog/CartService.js");
/* harmony import */ var _components_catalog_ModalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/catalog/ModalService */ "./src/components/catalog/ModalService.js");



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const catalogBox = document.querySelector("[data-catalog]");
  if (!catalogBox) return;
  const modalService = new _components_catalog_ModalService__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const catalog = new _components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_0__["default"]("[data-catalog]", _components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__["default"], modalService);
  catalog.render();
  const slider = new _components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_0__["default"]("[data-popular-slider]", _components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__["default"], modalService);
  slider.renderSlider();
  new _components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_0__["default"]("[data-modal-content]", _components_catalog_CartService__WEBPACK_IMPORTED_MODULE_1__["default"], null);
});

/***/ }),

/***/ "./src/components/slider/Slider.js":
/*!*****************************************!*\
  !*** ./src/components/slider/Slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Slider {
  constructor(selector) {
    this.selector = selector;
  }

  init() {
    const prev = document.getElementById("popular-slider-left"),
          next = document.getElementById("popular-slider-right"),
          slides = document.querySelectorAll(".popular__slide");
    let index = 1,
        currentSlideInd = document.getElementById("current-slide-index"),
        sliderBox = document.querySelector(".popular__slider-box-container"),
        width = 220,
        // ширина картинки
    count = 1,
        // видимое количество изображений
    position = 0; // положение ленты прокрутки

    const nextSlide = () => {
      if (index < slides.length) {
        // сдвиг вправо
        position -= width * count; // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент

        position = Math.max(position, -width * (slides.length - count));
        sliderBox.style.marginLeft = position + "px";
        index++;
      }
    };

    const prevSlide = () => {
      if (index > 1) {
        // сдвиг влево
        position += width * count; // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент

        position = Math.min(position, 220);
        sliderBox.style.marginLeft = position + "px";
        index--;
      }
    };

    if (next) {
      next.addEventListener("click", nextSlide);
    }

    if (prev) {
      prev.addEventListener("click", prevSlide);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/slider/index.js":
/*!****************************************!*\
  !*** ./src/components/slider/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/slider/Slider */ "./src/components/slider/Slider.js");

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const slider = new _components_slider_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]();
  slider.init();
});

/***/ })

/******/ });
//# sourceMappingURL=app.js.map