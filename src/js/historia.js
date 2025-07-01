function triggerReaction() {
  const items = document.querySelectorAll(".reaction-list li");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".reaction-container button");
  btn.addEventListener("click", triggerReaction);
});

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

//para que el ↑ te lleve arriba con desplazamiento lento
function scrollToTop(event) {
  event.preventDefault(); //Previene el salto instantáneo
  window.scrollTo({
    top: 0,
    behavior: 'smooth' //desplazamiento suave
  })
}

function scrollToTop(event) {
  event.preventDefault();
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}

// === SONIDOS DE TEXTOS ===

document.addEventListener("DOMContentLoaded", () => {
  function setupAudio(selector, audioId) {
    const element = document.querySelector(selector);
    const audio = document.getElementById(audioId);

    if (element && audio) {
      element.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
      });
    } else {
      console.warn(`No se encontró ${selector} o ${audioId}`);
    }
  }

  // Asignar audios a elementos
  setupAudio('.hover-sound', 'hoverAudio');
  setupAudio('.daniel-pic-desktop', 'danielAudio');
  setupAudio('.daniel-pic-mobile', 'danielAudio');
  setupAudio('.fritz-pic', 'fritzAudio');
  setupAudio('.carl-pic', 'carlAudio');
});

/* === RESPONSIVE PARA BLOQUE GIFS === */

if (window.innerWidth <= 768) { // solo en móviles
  const animatedWrappers = document.querySelectorAll('.animated-wrapper');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const wrapper = entry.target;
      const img = wrapper.querySelector('img');
      const gif = wrapper.querySelector('iframe');

      if (entry.isIntersecting) {
        // Mostrar GIF y ocultar imagen
        gif.style.display = 'block';
        img.style.opacity = '0';

        // Reinicia el GIF
        const src = gif.getAttribute('src');
        gif.setAttribute('src', src);

        // Volver a la imagen después de 3 segundos
        setTimeout(() => {
          gif.style.display = 'none';
          img.style.opacity = '1';
        }, 3000);
      }
    });
  }, {
    threshold: 0.6
  });

  animatedWrappers.forEach(wrapper => observer.observe(wrapper));
}

/* ==== RESPONSIVE PARA LAS FLIP-CARDS === */

// Solo activar en pantallas pequeñas para que no choque con hover de desktop
if (window.innerWidth <= 768) {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}
