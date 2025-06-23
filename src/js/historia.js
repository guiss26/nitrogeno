document.addEventListener("DOMContentLoaded", () => {
  const explosionImg = document.getElementById("explosion-img");

  if (explosionImg) {
    explosionImg.addEventListener("click", (e) => {
      const count = 30;
      const rect = explosionImg.getBoundingClientRect();

      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        document.body.appendChild(particle);

        const x = e.clientX + (Math.random() - 0.5) * 100;
        const y = e.clientY + (Math.random() - 0.5) * 100;

        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.setProperty("--x", `${x - e.clientX}px`);
        particle.style.setProperty("--y", `${y - e.clientY}px`);

        setTimeout(() => {
          particle.remove();
        }, 600);
      }
    });
  }
});