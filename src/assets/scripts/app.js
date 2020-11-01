// import data from '../../static/js/data.js';
// import cart from '../../components/cart';
import modal from '../../components/modal';
import filter from '../../components/filter';
import catalog from '../../components/catalog';
import slider from '../../components/slider';
import libs from './script';


const init = () => {
  // console.log('App init');

  libs();
  // cart();
  filter();
  catalog();
  modal();
  slider();
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => init());
}
