document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const headerList = document.querySelector('.header-list');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('open');
        headerList.classList.toggle('open');
    });
});
