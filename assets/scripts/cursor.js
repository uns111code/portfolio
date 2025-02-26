document.addEventListener("mousemove", function(event) {
    let trace = document.createElement("div");
    trace.classList.add("trace");
    
    let x = event.pageX;
    let y = event.pageY;

    trace.style.left = `${x}px`;
    trace.style.top = `${y}px`;

    document.body.appendChild(trace);

    // Supprime la traînée après un certain temps pour éviter les ralentissements
    setTimeout(() => {
        trace.remove();
    }, 500);
});




 // Couleur aléatoire
    // let colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff0000", "#00ff00", "#0000ff"];
    // let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // trace.style.boxShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}, 0 0 30px ${randomColor}`;
    // trace.style.background = randomColor;