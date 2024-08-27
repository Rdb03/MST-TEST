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
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        slides[index].style.display = 'block';
        setTimeout(() => {
            slides[index].style.opacity = '1';
        }, 10);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        autoSlide();
    });
    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        autoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            currentIndex = index;
            showSlide(currentIndex);
            autoSlide();
        });
    });

    function autoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    showSlide(currentIndex);
    autoSlide();
});

