window.addEventListener('scroll', onScroll)

const navigationElement = document.querySelector('#navigation');
const btnBackToTop = document.querySelector('#backToTopButton');

function showNavOnScroll() {
  if (scrollY <= 5) {
    navigationElement.classList.remove('scroll');
  } else {
    navigationElement.classList.add('scroll');
  }
}

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}



function showBackToTopButtonOnScroll() {
  if (scrollY <= 500) {
    btnBackToTop.classList.remove('show');
  } else {
    btnBackToTop.classList.add('show');
  }
}

function handleOpenMenu() {
  document.querySelector('body').classList.add('menu-expanded')
}

function handleCloseMenu() {
  document.querySelector('body').classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home stats, 
  #services,
  #services header, 
  #services card,
  #about,
  #about header, 
  #about .content`);