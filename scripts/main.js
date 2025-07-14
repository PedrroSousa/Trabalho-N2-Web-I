let slides = document.querySelectorAll('.slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);

/* ------------------------------------------------------------------ */

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
        header.classList.remove('scrolled');
    }
});

/* ---------------------------------feedback nav menu---------------------------------------------- */

const feedbackBtn = document.getElementById('feedback-button');
const feedbackLinks = document.getElementById('feedback-links');
const feedbackIcon = feedbackBtn.querySelector('i');

feedbackBtn.addEventListener('click', () => {
    feedbackLinks.classList.toggle('active');

    if (feedbackLinks.classList.contains('active')) {
        feedbackIcon.classList.remove('bi-caret-down-fill');
        feedbackIcon.classList.add('bi-caret-up-fill');
    } else {
        feedbackIcon.classList.remove('bi-caret-up-fill');
        feedbackIcon.classList.add('bi-caret-down-fill');
    }

});




/*------------------------------------------------------------------------------*/

document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    navMenu.classList.remove('active');
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list');
    document.body.classList.remove('menu-open');

    if (window.scrollY === 0) {
      header.classList.remove('scrolled');
    }
  });
});

document.getElementById('btn-jogos').addEventListener('click', () => {
  window.location.href = 'https://wvp-games.itch.io/';
});
