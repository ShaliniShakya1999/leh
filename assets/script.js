(function () {
  'use strict';

  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Scroll: header style + reveal sections
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    document.querySelectorAll('.section, .reveal, .reveal-stagger').forEach(function (el) {
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.85;
      if (rect.top < trigger) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links (backup for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form submit (placeholder – hook your backend or mailto later)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! We will get back to you soon. You can also reach us on WhatsApp using the green button.');
    });
  }

  // Testimonials slider
  const sliderWrap = document.querySelector('.testimonials-slider-wrap');
  if (sliderWrap) {
    const track = sliderWrap.querySelector('.testimonials-track');
    const slides = sliderWrap.querySelectorAll('.testimonial-slide');
    const prevBtn = sliderWrap.querySelector('.testimonial-prev');
    const nextBtn = sliderWrap.querySelector('.testimonial-next');
    const dots = sliderWrap.querySelectorAll('.testimonial-dot');
    const total = slides.length;
    let current = 0;
    let autoplayTimer = null;
    const AUTOPLAY_MS = 5000;

    function goTo(index) {
      current = (index + total) % total;
      if (track) track.style.transform = 'translateX(-' + current * 100 + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
        d.setAttribute('aria-selected', i === current);
      });
    }

    function next() {
      goTo(current + 1);
      resetAutoplay();
    }
    function prev() {
      goTo(current - 1);
      resetAutoplay();
    }

    function resetAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, AUTOPLAY_MS);
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        resetAutoplay();
      });
    });

    if (total > 0) {
      autoplayTimer = setInterval(next, AUTOPLAY_MS);
      sliderWrap.addEventListener('mouseenter', function () {
        if (autoplayTimer) clearInterval(autoplayTimer);
      });
      sliderWrap.addEventListener('mouseleave', function () {
        autoplayTimer = setInterval(next, AUTOPLAY_MS);
      });
    }
  }
})();
