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

//cursor
// Detecto el movimiento del ratón en la página
document.addEventListener('mousemove', function(e) {
    // Obtengo el elemento de la hojita personalizada
    const cursor = document.getElementById('emoji-cursor');
    if (cursor) {
        // Coloco la hojita en la posición actual del ratón
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // A veces creo un efecto de rastro verde detrás del cursor
        if (Math.random() > 0.7) {
            const trail = document.createElement("div");
            trail.className = "cursor-trail";
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);

            // Elimino el rastro después de 0.6 segundos para que no se acumulen
            setTimeout(() => {
                if (trail && trail.parentNode) {
                    trail.remove();
                }
            }, 600);
        }
    }
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