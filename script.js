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
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 5000);
});
