import { declOfNum } from "@utils/utils";
import { toRub } from "../../assets/scripts/utils/utils";

class Cart {
  constructor(cartService, apiService) {
    this.cartService = cartService;
    this.cartBox = document.querySelector("[data-cart-content]");
    this.cartCount = document.querySelector("[data-cart-count]");
    this.promoCode = document.querySelector("[data-promo]");
    this.api = apiService;

    if (this.cartBox) {
      this.renderCart();
      this.init();
    }
  }

  init() {
    // this.cartBox.addEventListener('click', (e) => {
    // const {target} = e;
    this.cartBox.addEventListener("click", ({ target }) => {
      // const amount = this.cartService.getCartLength();

      if (target.closest("[data-plus]")) {
        const id = target.dataset.plus;
        this.cartService.putProducts(id);

        this.updateRow(id);
        this.refreshCart();
      }

      if (target.closest("[data-minus]")) {
        const id = target.dataset.minus;
        const { amount } = this.cartService.getProduct(id);

        if (amount === 1) {
          this.cartService.deleteProduct(id);
          this.renderCart();
        } else {
          this.cartService.removeProducts(id);
        }

        this.updateRow(id);
        this.refreshCart();
      }

      if (target.closest("[data-delete]")) {
        const id = target.dataset.delete;
        this.cartService.deleteProduct(id);
        this.renderCart();
      }
    });

    // TODO обработчик ввода
    // обновление количества в поле ввода
    // Пересчет суммы корзины
    this.cartBox.addEventListener("input", ({ target }) => {
      const input = target.closest("[data-product-count]");

      if (input) {
        const id = input.dataset.productCount;
        this.cartService.addProduct(id, input.value);
        this.updateRow(id);
        this.refreshCart();
      }
    });

    this.promoCode.addEventListener("input", () => {
      const { value } = this.promoCode;

      const promoSum = document.querySelector("[data-promo-sum]");
      const result = this.cartService.getPromotionSum(value);
      const label = this.promoCode.closest(".field-text--promocode");
      label.classList.remove(
        "field-text--input-checked",
        "field-text--input-error"
      );
      const discount = document.querySelector(".checkout__discount");
      // status
      // promotionSum

      console.log(result);

      if (result.status === "ok") {
        // Show correct promo
        label.classList.add("field-text--input-checked");
        discount.style.display = "block";

        // Show sum
        promoSum.innerHTML = result.totalSum;
      } else {
        // Show error
        label.classList.add("field-text--input-error");
      }
      // this.cartService.getPromotionSum();
    });

    const removeAllBtn = document.querySelector("[data-remove-cart]");

    removeAllBtn.addEventListener("click", ({ target }) => {
      // очистка корзины
      if (target.closest("[data-remove-cart]")) {
        this.cartService.removeAllProducts();
        this.renderCart();
      }
    });
  }

  refreshCart() {
    this.refreshCount();
    this.refreshTotalSum();
  }

  refreshCount() {
    const count = this.cartService.getCartLength();
    this.cartCount.innerHTML = `В корзине ${declOfNum(count, [
      "товар",
      "товара",
      "товаров",
    ])}`;
  }

  refreshTotalSum() {
    const cartTotalSum = document.querySelector("#cart-products-price-num");
    const totalSum = this.cartService.getTotalSum();
    cartTotalSum.innerHTML = totalSum;
  }

  updateRow(id) {
    const row = document.querySelector(`[data-id="${id}"]`);

    // Обновление количества
    const input = row.querySelector("[data-product-count]");
    const book = this.cartService.getProduct(id);
    input.value = book.amount;

    // обновление суммы
    const sumBox = row.querySelector("[data-price]");
    const sum = this.cartService.getProductSum(id);
    sumBox.innerHTML = toRub(sum);
  }

  renderCart(html) {
    const books = this.cartService.getProducts();

    let cartContent = `
      <tr class="cart__table-headers">
        <th class="cart__col-1"></th>
        <th class="cart__col-2">Товар</th>
        <th class="cart__col-3">Кол-во</th>
        <th class="cart__col-4">Цена</th>
        <th class="cart__col-5"></th>
      </tr>
    `;

    // books.forEach((item) => {
    //   const book = this.api.findBook(item.id);
    //   console.log(book);

    //   cartContent += this.renderHtmlForCart({...book, amount: item.amount});
    // });

    books.forEach(({ id, amount }) => {
      const book = this.api.findBook(id);

      cartContent += this.renderHtmlForCart({ ...book, amount });
    });

    // выводим сумму корзины
    const totalPrice = this.cartService.getTotalSum();

    cartContent += `
      <tr>
        <td class="cart__products-price" colspan="5">
          Итого к оплате:
          <strong
            class="cart__products-price-num"
            id="cart-products-price-num"
            >${totalPrice}</strong
          >
        </td>
      </tr>
    `;

    this.cartBox.innerHTML = cartContent;
    this.refreshCart();
  }

  renderHtmlForCart({ uri, name, price, amount }) {
    const rowSum = amount * price;

    return `
          <tr class="cart__product" data-id="${uri}">
            <td class="cart__col-1">
              <img class="cart__item-img" src="img/books/${uri}.jpg" alt="${name}">
              </td>
                <td class="cart__col-2">
                <div class="cart__item-name">${name}</div>
              </td>

              <td class="cart__col-3">
                <div class="field-num  field-num--bg-tran">
                    <span class="field-num__input-wrap">
                      <button class="field-num__btn-minus" data-minus="${uri}" type="button">-</button>
                      <input data-product-count="${uri}" class="field-num__input" type="number" value="${amount}" step="1" min="1"/>
                      <button class="field-num__btn-plus" data-plus="${uri}" type="button">+</button>
                    </span>
                </div>
              </td>

              <td class="cart__col-4">
                <span class="cart__item-price" data-price>${rowSum}&thinsp;₽</span>
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

export default Cart;
