// Inicialización de AOS (Animate on Scroll)
AOS.init();

// Navegación responsive
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Cambio de estilo de navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Destacar enlace activo al hacer scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Inicialización del carrusel Swiper.js
document.addEventListener('DOMContentLoaded', function () {
    const gallerySwiper = new Swiper('.gallery-swiper', {
        // Parámetros básicos
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // Controles de navegación
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Paginación
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Efecto de zoom al pasar el cursor
        zoom: {
            maxRatio: 1.5,
            toggle: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // cuando la ventana es >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // cuando la ventana es >= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // cuando la ventana es >= 1024px
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        }
    });

    // Pausa el autoplay cuando el mouse está sobre el carrusel
    const swiperContainer = document.querySelector('.gallery-swiper');
    
    if (swiperContainer) {
        swiperContainer.addEventListener('mouseenter', () => {
            gallerySwiper.autoplay.stop();
        });
        
        swiperContainer.addEventListener('mouseleave', () => {
            gallerySwiper.autoplay.start();
        });
    }
});