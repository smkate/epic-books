import addToCart from "@/components/cart/addToCart";
// import getBookById from "@/components/cart/getBookById";
// import openModal from "@/components/cart/openModal";

export default () => {
  console.log('Catalog inited');
  const catalog = document.querySelector('[data-catalog]');

  if (!catalog) return;

  // Навесить слушатели на каталог
  catalog.addEventListener('click', async (e) => {
    e.preventDefault();

    const card = e.target.closest('.card');
    if (e.target.closest('.card .card__inner')) {
      // // Добавление в корзину
      const {id} = card.dataset;
      const book = await getBookById(id);
      await addToCart(book);
    }

    // // Открытие модального окна
    if (e.target.closest('.card .card__buy')) {
      // // Добавление в корзину
      const {id} = card.dataset;
      const book = await getBookById(id);
      const htmlBook = renderHtmlForModal(book);

      await openModal(htmlBook);
    }
  });


  // Находим куда вывести корзину, если этого места нет, то ничего не делаем
  // Получить данные корзины
  // Печатаем корзину
  // Навесить слушатели
  // // Очистка корзины
  // // // Затираем массив
  // // Поменять количество в строке
  // // Удалять элементы из корзины
};

// const cart = [];
// renderCard(cartList); // [{name: 'Books'}]
// addToCart(bookItem); //

// 1. Вывод состояния корзины на страницу
// 2. Метод добавления товара в корзину
// 3. Метод удаления товара из корзины
// 4. Метод удаления всех товаров из корзины
// 5. Метод изменения количества в плюс
// 6. Метод изменения количества в минус
// 7. Метод ввода значения руками
// 8. Метод вывода количества товаров на иконку Корзины
// 9. Метод вывода количества элементов
// 10. Метод вывода суммы корзины
