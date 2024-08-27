document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const headerList = document.querySelector('.header-list');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('open');
        headerList.classList.toggle('open');
    });
});

window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) { // Когда прокрутка больше 50px
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Затемняем фон
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Возвращаем полупрозрачный фон
    }
};