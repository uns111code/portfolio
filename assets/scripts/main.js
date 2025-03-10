const header = document.querySelector("header");
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

     // Vérifier si la position de scroll a augmenté (scroll vers le bas)
     if (currentScrollPosition > previousScrollPosition) {
      // Si le scroll descend
      header.style.visibility = "hidden";

  } else {
      // Si le scroll monte
      header.style.visibility = "visible";
      // Ajoute ton code ici pour gérer le défilement vers le haut
  }

  // Mettre à jour la position précédente du scroll
  previousScrollPosition = currentScrollPosition;

});

/********************************************************** mobile *********************************************/

const navbar = document.querySelector('.nav');;
const btnMenu = document.querySelector('.btn-nav-menu');

// Menu Toggle
btnMenu.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    navbar.classList.toggle('show-nav');
});

const mainButton = document.querySelectorAll('.main-button');

// Close Menu When Clicking On A Link
mainButton.forEach(button => {
    button.addEventListener('click', () => {
    navbar.classList.remove('show-nav');
    btnMenu.classList.remove('active');
});
});

/******************************************************** shining stars ***************************************/

let stars = document.querySelector('.stars');
document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrollY + 'px');
    stars.style.background = "radial-gradient(circle var(--scroll) at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)";

});