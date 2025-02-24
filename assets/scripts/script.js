// const cards = document.querySelectorAll('.card');
// const inner = document.querySelector('.inner');

// cards.forEach(card => {
//   card.addEventListener('mouseenter', () => {
//     inner.style.animationPlayState = 'paused'; // Pause animation on hover
//   });

//   card.addEventListener('mouseleave', () => {
//     inner.style.animationPlayState = 'running'; // Resume animation when leaving hover
//   });
// });
// // inner.addEventListener('mouseenter', () => {
// //     inner.style.animationPlayState = 'paused'; // Change parent color on hover
// //   });
  
// //   inner.addEventListener('mouseleave', () => {
// //       inner.style.animationPlayState = 'running'; // Reset parent color when leaving hover
// //   });




const inner = document.querySelector(".inner");
const cards = document.querySelectorAll(".card");

// Store the original transform values for each card
cards.forEach((card) => {
  const computedStyle = window.getComputedStyle(card);
  card.dataset.originalTransform = computedStyle.transform;
  card.dataset.originalFontSize = computedStyle.fontSize; // Store original font size
});

// Pause animation on hover
inner.addEventListener("mouseenter", () => {
  inner.style.animationPlayState = "paused";
});

// Resume animation on mouse leave
inner.addEventListener("mouseleave", () => {
  inner.style.animationPlayState = "running";
});

// Scale up and bring card closer on hover
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Move the card closer and scale it up
    card.style.transform = `${card.dataset.originalTransform} translateZ(100px) translateY(-10px) scale(1.8)`;
    // card.style.fontSize = "32px"; // Increase font size for better readability
    // card.style.zIndex = "10";
    // card.style.filter = "none"; // Ensure no blur is applied
    // card.style.willChange = "transform, font-size"; // Optimize rendering
  });

  card.addEventListener("mouseleave", () => {
    // Restore the original transform, font size, and position
    card.style.transform = card.dataset.originalTransform;
    card.style.fontSize = card.dataset.originalFontSize;
    // card.style.zIndex = "1";
    // card.style.filter = "none";
    // card.style.willChange = "auto";
  });
});


