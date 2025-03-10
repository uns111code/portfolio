function update(event) {
    let trace = document.createElement("div");
    trace.classList.add("trace");
    
    let x = event.pageX || event.touches[0].pageX;
    let y = event.pageY || event.touches[0].pageY;

    trace.style.left = `${x}px`;
    trace.style.top = `${y}px`;

    document.body.appendChild(trace);

    // Supprime la traînée après un certain temps pour éviter les ralentissements
    setTimeout(() => {
        trace.remove();
    }, 500);
};
  document.addEventListener('mousemove',update);
  document.addEventListener('touchmove',update);