// Externalized site JS: toggle menu, close menu on link click, arrow scrolling
(function(){
  function toggleMenu(){
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
  }

  // hamburger
  const hamburger = document.querySelector('.js-hamburger');
  if(hamburger) hamburger.addEventListener('click', function(e){
    e.stopPropagation();
    toggleMenu();
  });

  // close menu when clicking outside
  document.addEventListener('click', function(event){
    const menu = document.getElementById('navMenu');
    const hamburgerEl = document.querySelector('.js-hamburger');
    if(!menu || !hamburgerEl) return;
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHamburger = hamburgerEl.contains(event.target);
    if(!isClickInsideMenu && !isClickOnHamburger && menu.classList.contains('active')){
      menu.classList.remove('active');
    }
  });

  // close menu when a nav link is clicked
  document.querySelectorAll('#navMenu a').forEach(a => {
    a.addEventListener('click', function(){
      const menu = document.getElementById('navMenu');
      if(menu.classList.contains('active')) menu.classList.remove('active');
    });
  });

  // arrow scroll handlers (data-target attribute)
  document.querySelectorAll('.js-scroll-arrow').forEach(img => {
    img.addEventListener('click', function(){
      const target = this.getAttribute('data-target');
      if(!target) return;
      const el = document.querySelector(target);
      if(!el) return;
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
})();
