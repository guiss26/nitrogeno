document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".horizontal-list .item img");

  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});