const inner = document.querySelector(".slider");
const items = document.querySelectorAll(".item");

// Store the original transform values for each item
items.forEach((item) => {
  const computedStyle = window.getComputedStyle(item);
  item.dataset.originalTransform = computedStyle.transform;
  item.dataset.originalFontSize = computedStyle.fontSize; // Store original font size
});

// Pause animation on hover
inner.addEventListener("mouseenter", () => {
  inner.style.animationPlayState = "paused";
});

// Resume animation on mouse leave
inner.addEventListener("mouseleave", () => {
  inner.style.animationPlayState = "running";
});

// Scale up and bring item closer on hover
items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Move the item closer and scale it up
    item.style.transform = `${item.dataset.originalTransform} translateZ(100px) translateY(-80px) scale(1.4)`;
    // item.style.fontSize = "32px"; // Increase font size for better readability
    // item.style.zIndex = "10";
    // item.style.filter = "none"; // Ensure no blur is applied
    // item.style.willChange = "transform, font-size"; // Optimize rendering
  });

  item.addEventListener("mouseleave", () => {
    // Restore the original transform, font size, and position
    item.style.transform = item.dataset.originalTransform;
    item.style.fontSize = item.dataset.originalFontSize;
    item.querySelector("ul").classList.remove("display-flex");
    item.querySelector("img").classList.remove("display-none");
    // item.style.zIndex = "1";
    // item.style.filter = "none";
    // item.style.willChange = "auto";
  });
  // Add a click event to apear the content
    
  
});

    items.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.style.transform = 'rotate3d(1, 1, 1, 180deg)';
      e.currentTarget.querySelector("img").classList.toggle("display-none");
      e.currentTarget.querySelector("ul").classList.toggle("display-flex");
    });
    }
    );