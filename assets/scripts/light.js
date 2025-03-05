
let timer;
function update(e){
    if(!document.querySelector('.trace')) return;
    clearTimeout(timer);
    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    let light = document.querySelector('.light');
    
    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');

    

    light.style.background = "radial-gradient(circle 10vmax at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)";

    setTimeout(() => {
        light.style.background = "black";
    }, 3000);

  }
  
  document.addEventListener('mousemove',update);
  document.addEventListener('touchmove',update);
