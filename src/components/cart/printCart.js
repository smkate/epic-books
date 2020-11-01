export default (printCart) => {
    const cartBox = document.querySelector('.cart__table tbody');

    class Cart {

        render() {
        const productsStore = localStorageProducts.getProducts();
        let htmlCatalog = '';
    
        books.forEach(({name, desc, price, uri, type}) => {
            if (productsStore.indexOf(name) !== -1) {
                htmlCatalog += '
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
                            <button class="field-num__btn-minus" type="button">-</button>
                            <input class="field-num__input" type="number" value="2" step="1" min="1"/>
                            <button class="field-num__btn-plus" type="button">+</button>
                            </span>
                        </div>
                        </td>
                        <td class="cart__col-4">
                        <span class="cart__item-price">${price} ₽</span>
                        </td>
                        <td class="cart__col-5">
                        <button class="close cart__product-del-btn" type="button">
                            <svg width="16" height="16">
                            <use xlink:href="#close"></use>
                            </svg>
                        </button>
                        </td>
                    </tr>
                ';
            };
        };
    };
    
    // const html = '<div></div>';
    const cartPage = new Cart();
    cartPage.render();

}
