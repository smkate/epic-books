import printCatalogList from "@/components/catalog/printCatalogList";
import localStorageCatalogList from "@/components/catalog/localStorageCatalog";

export default () => {
  const catalog = document.querySelector('.catalog__books-list');

  if (!catalog) return;

  printCatalogList();
  localStorageCatalogList();

  
  // Навесить слушатели на каталог
  catalog.addEventListener('click', async (e) => {
    e.preventDefault();


    // const card = e.target.closest('.card');
    // if (e.target.closest('.card .card__inner')) {
    //   // // // Добавление в корзину
    //   // const {id} = card.dataset;
    //   // const book = await getBookById(id);
    //   // await addToCart(book);
    // }

    // // Открытие модального окна
    // if (e.target.closest('.card .card__buy')) {
    //   // // Добавление в корзину
    //   const {id} = card.dataset;
    //   const book = await getBookById(id);
    //   const htmlBook = renderHtmlForModal(book);

    //   await openModal(htmlBook);
    // }
  });
}

//   Находим куда вывести каталог (все книги), если этого места нет, то ничего не делаем
// Получить данные каталога
// Печатаем каталог
// Навесить слушатели
   //Добавить в корзину
   //Получить данные по количеству в корзину
  //Открытие модалки 
     //Получить доп данные для модалки
        // Закрытие модалки
        // Добавить в корзину 
        // Удалить из корзины

// Реализация переключения слайдера
// Находим куда вывести слайдер (все книги)
// Получить данные для слайдера
// Навесить слушатели
  //Добавить в корзину
  //Открытие модалки