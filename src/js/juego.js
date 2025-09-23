const collapsibles = document.querySelectorAll(".collapsible1, .collapsible2");

collapsibles.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
    });
});

//para el cursor
document.addEventListener("mousemove", (e) => {
  // Mueve el emoji
  const emojiCursor = document.getElementById("emoji-cursor");
  if (emojiCursor) {
    emojiCursor.style.left = `${e.clientX}px`;
    emojiCursor.style.top = `${e.clientY}px`;
  }
});