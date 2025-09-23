
AOS.init({
  offset: 250,
  duration: 800,
  easing: 'ease-out-back',
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 8px 16px rgba(44, 62, 80, 0.2)';
        item.style.transform = 'scale(1.03)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 6px 12px rgba(44, 62, 80, 0.15)';
        item.style.transform = 'scale(1)';
    });


    item.setAttribute('data-aos', 'zoom-in-up');
});
document.querySelectorAll('.curio-img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.opacity = '0.95';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.opacity = '1';
  });
});

function scrollToTop(event){
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    })
}

//para el cursor
document.addEventListener("mousemove", (e) => {
  // Mueve el emoji
  const emojiCursor = document.getElementById("emoji-cursor");
  if (emojiCursor) {
    emojiCursor.style.left = `${e.clientX}px`;
    emojiCursor.style.top = `${e.clientY}px`;
  }

  // Agrega el rastro
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 600);
});
