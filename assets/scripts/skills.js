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
    
  });

  item.addEventListener("mouseleave", () => {
    // Restore the original transform, font size, and position
    item.style.transform = item.dataset.originalTransform;
    item.style.fontSize = item.dataset.originalFontSize;
    item.querySelector("ul").classList.remove("display-flex");
    item.querySelector("img").classList.remove("display-none");
  });
  // Add a click event to apear the content
});

    items.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.style.transform = `${item.dataset.originalTransform} translateZ(100px) translateY(-80px) scale(1.4) rotateY(360deg)`;
      e.currentTarget.querySelector("img").classList.toggle("display-none");
      e.currentTarget.querySelector("ul").classList.toggle("display-flex");
      e.currentTarget.querySelector("ul").style.fontSize = "10px"; // Increase font size for better readability
      e.currentTarget.querySelector("ul").style.zIndex = "10";
      e.currentTarget.querySelector("ul").style.filter = "none"; // Ensure no blur is applied
      e.currentTarget.querySelector("ul").style.willChange = "transform, font-size"; // Optimize rendering
    });
    }
    );