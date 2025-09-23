
// Detecto el movimiento del ratón en la página
document.addEventListener('mousemove', function (e) {
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

// Esta función hace que los números de las estadísticas cuenten hasta su valor objetivo
function animateStats() {
    // Busco todas las tarjetas que contienen estadísticas
    const statCards = document.querySelectorAll('.stat-card');
    // Busco el botón que dispara la animación de estadísticas
    const button = document.querySelector('.reveal-stats');

    // Compruebo que existen las tarjetas antes de continuar
    if (statCards.length === 0) {
        console.log('No encuentro las tarjetas de estadísticas');
        return;
    }

    // Recorro cada tarjeta de estadística
    statCards.forEach(card => {
        // Leo el valor objetivo desde el atributo data-stat
        const target = +card.getAttribute('data-stat');
        // Busco el elemento donde se muestra el número
        const statNumber = card.querySelector('.stat-number');

        if (statNumber && target) {
            let current = 0; // Comienzo desde cero
            const duration = 1500; // Duración total en milisegundos
            const stepTime = Math.max(Math.floor(duration / target), 20); // Tiempo entre cada incremento

            // Intervalo que actualiza el número poco a poco
            const counter = setInterval(() => {
                current += 1;
                statNumber.textContent = current;

                // Cuando llego al objetivo, paro la animación
                if (current >= target) {
                    clearInterval(counter);
                    statNumber.textContent = target;
                }
            }, stepTime);
        }
    });

    // Cambio el texto del botón para indicar que ya se revelaron los datos
    if (button) {
        button.textContent = 'Ahora ya te haces una idea, ¿no?';
    }
}

// Esta función muestra u oculta el bloque de acciones personales
function showPersonalActions() {
    const content = document.getElementById('personal-actions');
    if (content) {
        // Si está visible, lo escondo; si está escondido, lo muestro
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

// Esta función muestra u oculta el bloque de esfuerzos globales
function showGlobalEfforts() {
    const content = document.getElementById('global-efforts');
    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

// Esta función hace que la página suba hasta arriba del todo
document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.getElementById("scrollUpBtn");

    if (scrollButton) {
        scrollButton.addEventListener("click", function (event) {
            event.preventDefault(); // evita salto brusco

            window.scrollTo({
                top: 0,
                behavior: 'smooth' // desplazamiento suave
            });
        });
    }
});

function scrollToTop(event) {
    event.preventDefault(); //Previene el salto instantáneo
    document.querySelector('main').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Configuro todos los eventos una vez que la página haya terminado de cargar
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página cargada');

    // Configuro el botón que sube arriba
    const scrollButton = document.querySelector('.btn-up');
    if (scrollButton) {
        // Evento para escritorio: clic con ratón
        scrollButton.onclick = function () {
            scrollToTop();
        };
        // Evento para móviles: toque con dedo
        scrollButton.addEventListener('touchstart', function () {
            scrollToTop();
        });
    }

    // Configuro el botón para revelar estadísticas
    const statsButton = document.querySelector('.reveal-stats');
    if (statsButton) {
        statsButton.onclick = function () {
            animateStats();
        };
    }

    // Configuro los botones que muestran acciones personales o globales
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach((button) => {
        // Leo el texto del botón para saber qué acción mostrar
        const buttonText = button.textContent.trim();

        button.onclick = function () {
            if (buttonText.includes('Personales')) {
                showPersonalActions();
            } else if (buttonText.includes('Globales')) {
                showGlobalEfforts();
            }
        };
    });
});
