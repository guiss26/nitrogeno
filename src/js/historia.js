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
function scrollToTop(event){
    event.preventDefault(); //Previene el salto instantáneo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //desplazamiento suave
    })
}
const text = document.querySelector('.hover-sound');
const audio = document.getElementById('hoverAudio');

text.addEventListener('click', () => {
  audio.currentTime = 0; // Reinicia desde el inicio
  audio.play();
});

const textDaniel = document.querySelector('.daniel-pic');
const audioDaniel = document.getElementById('danielAudio');

textDaniel.addEventListener('click', () => {
  audioDaniel.currentTime = 0; // Reinicia desde el inicio
  audioDaniel.play();
});

const textFritz = document.querySelector('.fritz-pic');
const audioFritz = document.getElementById('fritzAudio');

textFritz.addEventListener('click', () => {
  audioFritz.currentTime = 0; // Reinicia desde el inicio
  audioFritz.play();
});

const textCarl = document.querySelector('.carl-pic');
const audioCarl = document.getElementById('carlAudio');

textCarl.addEventListener('click', () => {
  audioCarl.currentTime = 0; // Reinicia desde el inicio
  audioCarl.play();
});
