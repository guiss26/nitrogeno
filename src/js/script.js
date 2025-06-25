console.log("Hello world")

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


//para que el ↑ te lleve arriba con desplazamiento lento
function scrollToTop(event){
    event.preventDefault(); //Previene el salto instantáneo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //desplazamiento suave
    })
}