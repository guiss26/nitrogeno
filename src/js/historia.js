  function triggerReaction() {
    const items = document.querySelectorAll(".reaction-list li");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 300);
    });
  }

 document.addEventListener("mousemove", function(e) {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";

    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 600); // igual que la duración de la animación
  });

  const emojiCursor = document.getElementById("emoji-cursor");

  document.addEventListener("mousemove", (e) => {
    emojiCursor.style.left = `${e.clientX}px`;
    emojiCursor.style.top = `${e.clientY}px`;

    // Trail efecto (opcional, puedes mantener si quieres el rastro rosa también)
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 700);
  });
