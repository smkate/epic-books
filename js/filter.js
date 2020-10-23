const filterBox = document.querySelector('.filters'),
    filterBtn =document.getElementById('filters-trigger'),
    priceFrom = document.getElementById('price-from'),
    priceTo = document.getElementById('price-to');


filterBtn.addEventListener('click', () => {
    filterBox.classList.toggle("filters--open");
});


// Mapping value from RANGE to input.VALUE
// const assignPrice = () => {
//     priceFrom.value = totalCostRange.value;
//     priceTo.value = anInitialFeeRange.value;
//   };
//   // Mapping value from input.VALUE to RANGE
//   const assignPriceValue = () => {
//     totalCostRange.value = totalCost.value;
//     anInitialFeeRange.value = anInitialFee.value;
//   };
  
//   assignValue();
//   assignValueNumber();