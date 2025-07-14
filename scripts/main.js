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

    const isMenuOpen = navMenu.classList.contains('active');

    header.classList.add('no-transition');

    if (isMenuOpen) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
        header.classList.add('scrolled');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');

        if (window.scrollY === 0) {
        header.classList.remove('scrolled');
        }
    }

    setTimeout(() => {
        header.classList.remove('no-transition');
    }, 10);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else if (!navMenu.classList.contains('active')) {
        // Só remove se o menu estiver fechado
        header.classList.remove('scrolled');
    }   
});


