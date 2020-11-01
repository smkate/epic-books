class CartService {
  constructor() {
    this.keyName = "cart";
    this.cart = this.getProducts(); // []
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

    localStorage.setItem(this.keyName, JSON.stringify(products));
  }

  getCartLength() {
    const cart = this.getProducts();

    return cart.length;
  }
}

export default CartService;
