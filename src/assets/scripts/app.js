// import data from '../../static/js/data.js';
// import filter from "../../components/filter";
import cart from "../../components/cart";
import catalog from "../../components/catalog";
import slider from "../../components/slider";
import libs from "./script";

const init = () => {
  libs();
  catalog();
  slider();
  cart();



  // filter();
};

if (
  document.attachEvent
    ? document.readyState === "complete"
    : document.readyState !== "loading"
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", () => init());
}
