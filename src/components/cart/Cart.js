import ApiService from "../ApiService";

class Cart {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartBox = document.querySelector("[data-cart-content]");
    this.api = new ApiService();

    if (this.cartBox) {
      this.renderCart();
      this.init();
    }
  }

  init() {
    // this.cartBox.addEventListener('click', (e) => {
      // const {target} = e;
    this.cartBox.addEventListener('click', ({target}) => {

      if (target.closest('[data-plus]')) {
        const id = target.dataset.plus;
        this.cartService.putProducts(id);

        // this.updateRow();
        // refreshCount
      }
      
      if (target.closest('[data-minus]')) {
        const id = target.dataset.minus;
        this.cartService.removeProducts(id);
        // removeAllProducts
        // this.updateRow();
        // refreshCount
      }
      
      if (target.closest('[data-delete]')) {
        const id = target.dataset.delete;
        this.cartService.deleteProduct(id);
        // refreshCount
      }
    });

    // TODO обработчик ввода
    // обновление количества в поле ввода
    // Пересчет суммы корзины 
    // вывод количстве элементов this.cartService.getCartLength();
    // во все деньги добавить разряды от 10 000 // 9999 // 99 9999 // 8888
  }

  refreshCount() {
    // Товар, товара, товаров // pieces
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

  renderHtmlForCart({ uri, name, price, amount }) {
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

export default Cart;
