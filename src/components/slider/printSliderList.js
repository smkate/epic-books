export default (printSlider) => {
    const sliderListBox = document.querySelector('.popular__slider-box-container');

class SliderProducts {

    // handleSetLocalStorage(element, name) {
    //     const result = localStorageProducts.putProducts(name);
    //     productsCounter();
    // }
    

    render() {
        let sliderList = '';

        books.forEach(({name, desc, price, uri, type}) => {
            sliderList += `

            <div class="popular__slide">
                    <article class="card">
                      <a
                        class="card__inner"
                        href="index.html#${uri}"
                      >
                        <img
                          class="card__img"
                          src="img/books/${uri}.jpg"
                          width="148"
                          height="208"
                          alt="${name}"
                        />
                        <h2 class="card__title">${name}</h2>
                        <p class="card__price">${price} ₽</p>
                      </a>
                      <button class="btn  btn--sm card__buy">
                        <svg class="btn__icon" width="14" height="14">
                          <use xlink:href="#plus"></use>
                        </svg>
                        <span>В корзину</span>
                      </button>
                    </article>
                  </div>
            `;
        });

        sliderListBox.innerHTML = sliderList;
    }
}


    const productsPageSlider = new SliderProducts();
    productsPageSlider.render();
};