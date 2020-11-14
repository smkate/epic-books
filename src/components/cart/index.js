import Cart from "@/components/cart/Cart";
import cartService from "@/components/catalog/CartService";
import apiService from "../ApiService";

export default () => {
  const cartBox = document.querySelector(".cart__table");

  if (!cartBox) return;

  const cart = new Cart(cartService, apiService);
  // cart.render();
};

// const cart = [];
// renderCard(cartList); // [{name: 'Books'}]
// addToCart(bookItem); //
