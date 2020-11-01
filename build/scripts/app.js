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
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/filter */ "./src/components/filter/index.js");
/* harmony import */ var _components_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/catalog */ "./src/components/catalog/index.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/slider */ "./src/components/slider/index.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script */ "./src/assets/scripts/script.js");
// import data from '../../static/js/data.js';







const init = () => {
  // console.log('App init');
  Object(_script__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_components_cart__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_components_filter__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_components_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => init());
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
  // Кастомные селекты (кроме выбора языка)
  new Choices('.field-select:not(#lang) select.field-select__select', {
    searchEnabled: false,
    shouldSort: false
  }); // Кастомный селект выбора языка отдельно

  new Choices('#lang select.field-select__select', {
    searchEnabled: false,
    shouldSort: false,
    callbackOnCreateTemplates: function (template) {
      return {
        item: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              ${getLangInSelectIcon(data.value)} ${data.label.substr(0, 3)}
            </div>
          `);
        },
        choice: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              ${getLangInSelectIcon(data.value)} ${data.label}
            </div>
          `);
        }
      };
    }
  });

  function getLangInSelectIcon(value) {
    if (value == 'ru') return '<span class="field-select__lang-ru"></span>';else if (value == 'en') return '<span class="field-select__lang-en"></span>';
    return '<span class="field-select__lang-null"></span>';
  } // Выбор диапазона цен


  var slider = document.getElementById('price-range');
  noUiSlider.create(slider, {
    start: [400, 1000],
    connect: true,
    step: 100,
    range: {
      'min': 200,
      'max': 2000
    }
  });
});

/***/ }),

/***/ "./src/components/cart/addToCart.js":
/*!******************************************!*\
  !*** ./src/components/cart/addToCart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (item => {});

/***/ }),

/***/ "./src/components/cart/index.js":
/*!**************************************!*\
  !*** ./src/components/cart/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cart_addToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/cart/addToCart */ "./src/components/cart/addToCart.js");
 // import getBookById from "@/components/cart/getBookById";
// import openModal from "@/components/cart/openModal";

/* harmony default export */ __webpack_exports__["default"] = (() => {
  // console.log('Catalog inited');
  const catalog = document.querySelector('[data-catalog]');
  if (!catalog) return; // Навесить слушатели на каталог

  catalog.addEventListener('click', async e => {
    e.preventDefault();
    const card = e.target.closest('.card');

    if (e.target.closest('.card .card__inner')) {
      // // Добавление в корзину
      const {
        id
      } = card.dataset;
      const book = await getBookById(id);
      await Object(_components_cart_addToCart__WEBPACK_IMPORTED_MODULE_0__["default"])(book);
    } // // Открытие модального окна


    if (e.target.closest('.card .card__buy')) {
      // // Добавление в корзину
      const {
        id
      } = card.dataset;
      const book = await getBookById(id);
      const htmlBook = renderHtmlForModal(book);
      await openModal(htmlBook);
    }
  }); // Находим куда вывести корзину, если этого места нет, то ничего не делаем
  // Получить данные корзины
  // Печатаем корзину
  // Навесить слушатели
  // // Очистка корзины
  // // // Затираем массив
  // // Поменять количество в строке
  // // Удалять элементы из корзины
}); // const cart = [];
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

/***/ "./src/components/catalog/index.js":
/*!*****************************************!*\
  !*** ./src/components/catalog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_catalog_printCatalogList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/catalog/printCatalogList */ "./src/components/catalog/printCatalogList.js");
/* harmony import */ var _components_catalog_localStorageCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/catalog/localStorageCatalog */ "./src/components/catalog/localStorageCatalog.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const catalog = document.querySelector('.catalog__books-list');
  if (!catalog) return;
  Object(_components_catalog_printCatalogList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_components_catalog_localStorageCatalog__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Навесить слушатели на каталог

  catalog.addEventListener('click', async e => {
    e.preventDefault(); // const card = e.target.closest('.card');
    // if (e.target.closest('.card .card__inner')) {
    //   // // // Добавление в корзину
    //   // const {id} = card.dataset;
    //   // const book = await getBookById(id);
    //   // await addToCart(book);
    // }
    // // Открытие модального окна
    // if (e.target.closest('.card .card__buy')) {
    //   // // Добавление в корзину
    //   const {id} = card.dataset;
    //   const book = await getBookById(id);
    //   const htmlBook = renderHtmlForModal(book);
    //   await openModal(htmlBook);
    // }
  });
}); //   Находим куда вывести каталог (все книги), если этого места нет, то ничего не делаем
// Получить данные каталога
// Печатаем каталог
// Навесить слушатели
//Добавить в корзину
//Получить данные по количеству в корзину
//Открытие модалки 
//Получить доп данные для модалки
// Закрытие модалки
// Добавить в корзину 
// Удалить из корзины
// Реализация переключения слайдера
// Находим куда вывести слайдер (все книги)
// Получить данные для слайдера
// Навесить слушатели
//Добавить в корзину
//Открытие модалки

/***/ }),

/***/ "./src/components/catalog/localStorageCatalog.js":
/*!*******************************************************!*\
  !*** ./src/components/catalog/localStorageCatalog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (localStorageCatalogList => {
  class LocalStorageProducts {
    constructor() {
      this.keyName = 'products';
    }

    getProducts() {
      const productsLocalStorage = localStorage.getItem(this.keyName);

      if (productsLocalStorage !== null) {
        return JSON.parse(productsLocalStorage);
      }

      return [];
    }

    putProducts(name) {
      let products = this.getProducts();
      let pushProduct = false;
      const index = products.indexOf(name);

      if (index === -1) {
        products.push(name);
        pushProduct = true;
      } else {
        products.splice(index, 1);
      }

      localStorage.setItem(this.keyName, JSON.stringify(products));
      return {
        pushProduct,
        products
      };
    }

  }

  const localStorageProducts = new LocalStorageProducts();
});

/***/ }),

/***/ "./src/components/catalog/printCatalogList.js":
/*!****************************************************!*\
  !*** ./src/components/catalog/printCatalogList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (print => {
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
      books.forEach(({
        name,
        desc,
        price,
        uri,
        type
      }) => {
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
  productsPage.render(); // const catalogListBox = document.querySelector('.catalog__books-list');
  // // // Добавление в корзину
  // const productsStore = localStorageProducts.getProducts();
  // const cartCounter = document.querySelector(".page-header__cart-num");
  // const productsCounter = () => {
  //     cartCounter.innerHTML = productsStore.length;
  // };
  // //   productsCounter();
});

/***/ }),

/***/ "./src/components/filter/index.js":
/*!****************************************!*\
  !*** ./src/components/filter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const filterBox = document.querySelector('.filters'),
        filterBtn = document.getElementById('filters-trigger');
  filterBtn.addEventListener('click', () => {
    filterBox.classList.toggle("filters--open");
  });
});

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {});

/***/ }),

/***/ "./src/components/slider/index.js":
/*!****************************************!*\
  !*** ./src/components/slider/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_runSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/slider/runSlider */ "./src/components/slider/runSlider.js");
/* harmony import */ var _components_slider_printSliderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/slider/printSliderList */ "./src/components/slider/printSliderList.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  Object(_components_slider_printSliderList__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_components_slider_runSlider__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/components/slider/printSliderList.js":
/*!**************************************************!*\
  !*** ./src/components/slider/printSliderList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (printSlider => {
  const sliderListBox = document.querySelector('.popular__slider-box-container');

  class SliderProducts {
    // handleSetLocalStorage(element, name) {
    //     const result = localStorageProducts.putProducts(name);
    //     productsCounter();
    // }
    render() {
      let sliderList = '';
      books.forEach(({
        name,
        desc,
        price,
        uri,
        type
      }) => {
        sliderList += `

            <div class="popular__slide">
                    <article class="card">
                      <a
                        class="card__inner"
                        href="index.html#${uri}"
                      >
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
                      <button class="btn  btn--sm card__buy">
                        <svg class="btn__icon" width="14" height="14">
                          <use xlink:href="#plus"></use>
                        </svg>
                        <span>В корзину</span>
                      </button>
                    </article>
                  </div>
            `;
      });
      sliderListBox.innerHTML = sliderList;
    }

  }

  const productsPageSlider = new SliderProducts();
  productsPageSlider.render();
});

/***/ }),

/***/ "./src/components/slider/runSlider.js":
/*!********************************************!*\
  !*** ./src/components/slider/runSlider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (swiperSlider => {
  const prev = document.getElementById('popular-slider-left'),
        next = document.getElementById('popular-slider-right'),
        slides = document.querySelectorAll('.popular__slide');
  let index = 1,
      currentSlideInd = document.getElementById('current-slide-index'),
      sliderBox = document.querySelector('.popular__slider-box-container'),
      width = 220,
      // ширина картинки
  count = 1,
      // видимое количество изображений
  position = 0; // положение ленты прокрутки
  // 

  const nextSlide = () => {
    if (index < slides.length) {
      // сдвиг вправо
      position -= width * count; // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент

      position = Math.max(position, -width * (slides.length - count));
      sliderBox.style.marginLeft = position + 'px';
      index++;
    }
  };

  const prevSlide = () => {
    if (index > 1) {
      // сдвиг влево
      position += width * count; // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент

      position = Math.min(position, 220);
      sliderBox.style.marginLeft = position + 'px';
      index--;
    }
  };

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
});

/***/ })

/******/ });
//# sourceMappingURL=app.js.map