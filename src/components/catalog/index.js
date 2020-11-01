import Catalog from "@/components/catalog/Catalog";
import CartService from "@/components/catalog/CartService";
import ModalService from "@/components/catalog/ModalService";

export default () => {
  const catalog = document.querySelector(".catalog__books-list");

  if (!catalog) return;

  const cartService = new CartService();
  const modalService = new ModalService();
  const catalogService = new Catalog(cartService, modalService);
  catalogService.render();
};

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
