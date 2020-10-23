const cards = document.querySelectorAll(".card"),
    modalBook = document.querySelector(".modal"),
    htmlTag = document.documentElement,
    modalBack = document.querySelector('.js-modal-open'),
    closeModalBookBtn = document.querySelector('.modal__close');


cards.forEach ((card) => {
    card.addEventListener ('click', () => {
        modalBook.classList.add('modal--open');
        htmlTag.classList.add('js-modal-open');
    })
});

closeModalBookBtn.addEventListener('click', () => {
    closeModalBook();
});

// modalBack.addEventListener('click', (e) => {
//     if (!e.target.closest('.modal')) {
//         closeModalBook();
//     };
// });

let closeModalBook = () => {
    modalBook.classList.remove('modal--open');
    htmlTag.classList.remove('js-modal-open');
};