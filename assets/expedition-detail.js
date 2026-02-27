(function () {
  'use strict';

  var stickyCta = document.getElementById('exp-sticky-cta');
  var summaryCard = document.getElementById('exp-summary-card');
  var hero = document.querySelector('.exp-hero');
  var ticking = false;
  var lastScrollY = 0;

  function updateStickyCta() {
    if (!stickyCta || window.innerWidth >= 1025) {
      stickyCta.classList.remove('visible');
      ticking = false;
      return;
    }
    var scrollY = window.scrollY || window.pageYOffset;
    var trigger = window.innerHeight * 0.85;
    if (scrollY > trigger) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateStickyCta);
      ticking = true;
    }
  }

  if (stickyCta) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateStickyCta);
    updateStickyCta();
  }
})();
