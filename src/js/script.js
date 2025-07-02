console.log("Hello world")

window.addEventListener('scroll', () => {
    document.getElementById('check').checked = false
})


const text = "¿Qué es?"
let i = 0;

// Texto que se escribe solo(efecto máquina de escribir)
function write(){
    if(i < text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(i)
        i++
        setTimeout(write, 100)
    }
}
document.addEventListener("DOMContentLoaded", write)

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

//para que el ↑ te lleve arriba con desplazamiento lento
function scrollToTop(event){
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


//CAROUSEL
document.querySelectorAll('.carousel-container').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const originalSlides = Array.from(track.children); // Guardamos los originales
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');

  // ⚠️ Evitar duplicar clones si ya existen
  if (track.children.length === originalSlides.length) {
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

    track.insertBefore(lastClone, originalSlides[0]);
    track.appendChild(firstClone);
  }

  const slides = track.querySelectorAll('li');
  let index = 1;
  const slideWidth = 100;

  // Inicializar posición al primer slide real
  track.style.transform = `translateX(-${index * slideWidth}%)`;

  function moveToSlide(i) {
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${i * slideWidth}%)`;
  }

  function handleTransitionEnd() {
    if (slides[index].isEqualNode(slides[0])) {
      // Estamos en el clon del último slide → saltamos al real último
      track.style.transition = 'none';
      index = slides.length - 2;
      track.style.transform = `translateX(-${index * slideWidth}%)`;
    } else if (slides[index].isEqualNode(slides[slides.length - 1])) {
      // Estamos en el clon del primer slide → saltamos al real primero
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * slideWidth}%)`;
    }
  }

  nextBtn.addEventListener('click', () => {
    if (index >= slides.length - 1) return;
    index++;
    moveToSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    if (index <= 0) return;
    index--;
    moveToSlide(index);
  });

  track.addEventListener('transitionend', handleTransitionEnd);
});