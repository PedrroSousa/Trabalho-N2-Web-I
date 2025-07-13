let slides = document.querySelectorAll('.slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const icon = menuToggle.querySelector('i');
const header = document.querySelector('.header');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


