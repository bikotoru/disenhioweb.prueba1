  AOS.init();

  const navbarToggle = document.getElementById('navbarToggle');
  const navbarLinks = document.getElementById('navbarLinks');

  navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

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

  const gallerySlider = document.getElementById('gallerySlider');
  const gallerySlides = document.querySelectorAll('.gallery-slide');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const galleryDots = document.getElementById('galleryDots');
  
  let currentSlide = 0;
  const slideCount = gallerySlides.length;
  
  for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('gallery-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
          goToSlide(i);
      });
      galleryDots.appendChild(dot);
  }
  
  const dots = document.querySelectorAll('.gallery-dot');
  
  function updateSlider() {
      gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
      });
  }
  
  function goToSlide(index) {
      currentSlide = index;
      updateSlider();
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
  }
  
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
  }
  
  galleryNext.addEventListener('click', nextSlide);
  galleryPrev.addEventListener('click', prevSlide);
  
  let slideInterval = setInterval(nextSlide, 5000);
  
  gallerySlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
  });
  
  gallerySlider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
  });

  
