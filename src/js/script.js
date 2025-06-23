console.log("Hello world")

/**Cambia el color de fondo dinámico según la sección */
const sections = document.querySelectorAll("section")

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if( top >= 0 && top < window.innerHeight /2) {
            document.body.style.backgroundColor = section.dataset.bg || '#fff'
        }
    })
})


//para que el ↑ te lleve arriba con desplazamiento lento
function scrollToTop(event){
    event.preventDefault(); //Previene el salto instantáneo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //desplazamiento suave
    })
}