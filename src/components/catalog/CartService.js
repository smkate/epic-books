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
    const index = products.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      const amount = products[index].amount;
      products[index].amount = amount + 1;
    } else {
      products.push({
        id,
        amount: 1,
      });
    }

    this.updateCartWidget();

    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  removeProducts(id) {
    if (!id && !id.length) return;

    const products = this.getProducts();
    const index = products.findIndex((item) => {
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
    const index = products.findIndex((item) => {
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

    books.forEach(({id}) => {
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

  getPromotionSum() {

  }
}

const cartService = new CartService();

export default cartService;
