import { toRub } from "@utils/utils";
import apiService from "../ApiService";

class CartService {
  constructor() {
    this.api = apiService;
    this.keyName = "cart";
    this.cart = this.getProducts();
    this.cartWidget = document.querySelector(".page-header__cart-num");
    this.cartOneCount = document.querySelector(["data-product-count"]);

    this.updateCartWidget();
  }

  getProducts() {
    // GET /books
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (!productsLocalStorage) return [];

    return JSON.parse(productsLocalStorage);
  }

  getProduct(id) {
    // GET /books/:id
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    return products[index];
  }

  getProductSum(id) {
    // GET /cart/:id/sum
    const product = this.getProduct(id);
    const book = this.api.findBook(id);

    return product.amount * book.price;
  }

  putProducts(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      const store = this.api.getBookStore(products[index].id);

      if (products[index].amount < parseInt(store, 10)) {
        products[index].amount += 1;
      }
    } else {
      products.push({
        id,
        amount: 1,
      });
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
    this.updateCartWidget();
  }

  addProduct(id, count) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) return;

    const store = this.api.getBookStore(products[index].id);

    if (products[index].amount < store) {
      products[index].amount = count;
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
    this.updateCartWidget();
  }

  removeProducts(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) return;

    if (products[index].amount > 1) {
      products[index].amount -= 1;
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
    this.updateCartWidget();
  }

  deleteProduct(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) return;

    products.splice(index, 1);

    localStorage.setItem(this.keyName, JSON.stringify(products));
    this.updateCartWidget();
  }

  removeAllProducts() {
    localStorage.setItem(this.keyName, JSON.stringify([]));
    this.updateCartWidget();
  }

  getCartLength() {
    const cart = this.getProducts();
    let count = 0;

    cart.forEach((item) => {
      count += item.amount;
    });

    return count;
  }

  updateCartWidget() {
    this.cartWidget.innerHTML = this.getCartLength();
  }

  // применяем скидку по промокоду
  getPromotionSum(promoCode) {
    const result = apiService.checkPromo(promoCode);

    console.log(result);
    // if ((promoCode.value = "PROMOCODE")) {
    // } else {
    //   promoSum.innerHTML = this.getTotalSum();
    // }
    if (result.status === "ok") {
      return {
        status: "ok",
        promotionSum: 150,
        totalSum: this.getTotalSum() - 150,
      };
    } else {
      return {
        status: "invalid",
        promotionSum: 150,
        totalSum: this.getTotalSum(),
      };
    }
  }

  getTotalSum() {
    const cart = this.getProducts(); // [id, amount]
    let sum = 0;

    cart.forEach((item) => {
      const book = this.api.findBook(item.id);

      sum += book.price * item.amount;

      // console.log(sum);
    });

    return sum;
  }
}

const cartService = new CartService();

export default cartService;
