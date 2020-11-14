import { toRub } from '@utils/utils';
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
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (!productsLocalStorage) return [];

    return JSON.parse(productsLocalStorage);
  }

  getProduct(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    return products[index];
  }

  getProductSum(id) {
    const product = this.getProduct(id)
    const book = this.api.getBookStore(id);

    return product.amount * book.price;
  }

  putProducts(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
      return item.id === id;
    });;

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

    const store = this.api.getBookStore(products[index].id);

    if (index !== -1 && products[index].amount < store) {
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

    if (index !== -1) {
      if (products[index].amount > 1) {
        products[index].amount -= 1;
      } else {
        this.deleteProduct(id);
      }
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

    if (index !== -1) {
      products.splice(index, 1);
    }

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

  getPromotionSum() {
  }

  getTotalSum() {
    const cart = this.getProducts(); // [id, amount]
    let sum = 0;

    cart.forEach((item) => {
      const book = this.api.findBook(item.id); 

      sum += book.price * item.amount;

      console.log(sum);
    });

    return toRub(sum);
  }
}

const cartService = new CartService();

export default cartService;
