

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
    card.style.fontSize = "32px"; // Increase font size for better readability
    card.style.zIndex = "10";
    card.style.filter = "none"; // Ensure no blur is applied
    card.style.willChange = "transform, font-size"; // Optimize rendering
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

















// const inner = document.querySelector(".slider");
// const items = document.querySelectorAll(".item");

// // Store the original transform values for each item
// items.forEach((item) => {
//   const computedStyle = window.getComputedStyle(item);
//   item.dataset.originalTransform = computedStyle.transform;
//   item.dataset.originalFontSize = computedStyle.fontSize; // Store original font size
// });

// // Pause animation on hover
// inner.addEventListener("mouseenter", () => {
//   inner.style.animationPlayState = "paused";
// });

// // Resume animation on mouse leave
// inner.addEventListener("mouseleave", () => {
//   inner.style.animationPlayState = "running";
// });

// // Scale up and bring item closer on hover
// items.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     // Move the item closer and scale it up
//     item.style.transform = `${item.dataset.originalTransform} translateZ(100px) translateY(-10px) scale(1.8)`;
//     // item.style.fontSize = "32px"; // Increase font size for better readability
//     // item.style.zIndex = "10";
//     // item.style.filter = "none"; // Ensure no blur is applied
//     // item.style.willChange = "transform, font-size"; // Optimize rendering
//   });

//   item.addEventListener("mouseleave", () => {
//     // Restore the original transform, font size, and position
//     item.style.transform = item.dataset.originalTransform;
//     item.style.fontSize = item.dataset.originalFontSize;
//     // item.style.zIndex = "1";
//     // item.style.filter = "none";
//     // item.style.willChange = "auto";
//   });
// });


