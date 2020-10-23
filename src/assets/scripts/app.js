import cart from '../../components/cart';

const init = () => {
  console.log('App init');

  cart();
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => init());
}
