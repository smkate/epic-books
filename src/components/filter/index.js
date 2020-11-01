export default () => {
    const filterBox = document.querySelector('.filters'),
        filterBtn =document.getElementById('filters-trigger');


    filterBtn.addEventListener('click', () => {
        filterBox.classList.toggle("filters--open");
    });
}
