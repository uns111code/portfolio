let light = document.querySelector('.light');
document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrollY + 'px');
    light.style.background = "radial-gradient(circle var(--scroll) at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)";

});

window.addEventListener('scroll', update);


const header = document.querySelector("header");
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

     // Vérifier si la position de scroll a augmenté (scroll vers le bas)
     if (currentScrollPosition > previousScrollPosition) {
      // Si le scroll descend
      header.style.visibility = "hidden";
      // Ajoute ton code ici pour gérer le défilement vers le bas
  } else {
      // Si le scroll monte
      header.style.visibility = "visible";
      // Ajoute ton code ici pour gérer le défilement vers le haut
  }

  // Mettre à jour la position précédente du scroll
  previousScrollPosition = currentScrollPosition;

});





























// let timer;
// function update(e){
//   if(!document.querySelector('.trace')) return;
//   // clearTimeout(timer);
//   let x = e.clientX || e.touches[0].clientX;
//   let y = e.clientY || e.touches[0].clientY;
  

//   let light = document.querySelector('.light');
  
//   document.documentElement.style.setProperty('--cursorX', x + 'px');
//   document.documentElement.style.setProperty('--cursorY', y + 'px');

  

//   light.style.background = "radial-gradient(circle var(--scroll) at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)";

//   // setTimeout(() => {
//   //     light.style.background = "black";
//   // }, 3000);

// }


// document.addEventListener('mousemove',update);
// document.addEventListener('touchmove',update);
