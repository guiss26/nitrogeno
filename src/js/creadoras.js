document.addEventListener('DOMContentLoaded', () => {
    const creadorasContainer = document.querySelector('.creadoras-container');
    const modal = document.getElementById('creatorModal');
    const closeButton = document.querySelector('.close-button');
    const modalCreatorPhoto = document.getElementById('modalCreatorPhoto');
    const modalCreatorName = document.getElementById('modalCreatorName');
    const modalCreatorRole = document.getElementById('modalCreatorRole');
    const modalNitrogenLink = document.getElementById('modalNitrogenLink');
    const modalWisdom = document.getElementById('modalWisdom');

    // Datos de las creadoras (¡Asegúrate de reemplazar con sus nombres, fotos y textos reales!)
    const creadorasData = [
        {
            id: 'creadora1',
            name: 'Guisella',
            photo: 'https://via.placeholder.com/150/8e44ad/FFFFFF?text=Ana', // Reemplazar con URL de la foto real
            role: 'Desarrolladora Front-end / Maquetación HTML',
            nitrogenLink: '"Para mí, el nitrógeno en este proyecto es como el código fuente: invisible pero esencial para que todo funcione."',
            wisdom: '"La colaboración es el catalizador que convierte las ideas individuales en una reacción en cadena de éxito."',
            atomPositions: [ // Posiciones relativas para los "átomos de ideas"
                { top: '10%', left: '15%' },
                { bottom: '20%', right: '10%' },
                { top: '30%', right: '20%' }
            ]
        },
        {
            id: 'creadora2',
            name: 'Aday',
            photo: 'https://via.placeholder.com/150/3498db/FFFFFF?text=Maria', // Reemplazar con URL de la foto real
            role: 'Diseñadora UI/UX / Estilos CSS',
            nitrogenLink: '"El nitrógeno nos rodea en el aire, y yo me encargué de que nuestra web sea tan envolvente y visible como él."',
            wisdom: '"Un buen diseño es la interfaz invisible que conecta al usuario con el corazón del contenido."',
            atomPositions: [
                { top: '25%', left: '10%' },
                { bottom: '15%', left: '30%' },
                { top: '5%', right: '25%' }
            ]
        },
        {
            id: 'creadora3',
            name: 'Rocío',
            photo: 'https://via.placeholder.com/150/2ecc71/FFFFFF?text=Laura', // Reemplazar con URL de la foto real
            role: 'Investigadora de Contenido / Redacción',
            nitrogenLink: '"Descubrir los secretos del nitrógeno fue tan fascinante como ver cómo nuestras palabras daban vida a la información."',
            wisdom: '"La claridad es el oxígeno de la comunicación; asegúrate de que tus mensajes respiren libertad."',
            atomPositions: [
                { top: '18%', right: '12%' },
                { bottom: '10%', left: '25%' },
                { top: '40%', left: '5%' }
            ]
        },
        {
            id: 'creadora4',
            name: 'Ana',
            photo: 'https://via.placeholder.com/150/f39c12/FFFFFF?text=Sofia', // Reemplazar con URL de la foto real
            role: 'Programadora JavaScript / Interactividad',
            nitrogenLink: '"Hacer que el nitrógeno cobre vida con el código fue un reto tan emocionante como ver una reacción química controlada."',
            wisdom: '"No hay bug que una buena taza de café y un par de ojos frescos no puedan resolver."',
            atomPositions: [
                { top: '5%', left: '20%' },
                { bottom: '5%', right: '20%' },
                { top: '35%', right: '15%' }
            ]
        },
        {
            id: 'creadora5',
            name: 'Larysa',
            photo: 'https://via.placeholder.com/150/9b59b6/FFFFFF?text=Elena', // Reemplazar con URL de la foto real
            role: 'Coordinadora de Proyecto / Control de Calidad',
            nitrogenLink: '"Organizar este proyecto fue como equilibrar el ciclo del nitrógeno: vital para que todo fluyera sin problemas."',
            wisdom: '"Un equipo unido no solo supera obstáculos, sino que los transforma en escalones hacia el éxito."',
            atomPositions: [
                { top: '15%', right: '10%' },
                { bottom: '25%', left: '18%' },
                { top: '45%', right: '5%' }
            ]
        },
        {
            id: 'creadora6',
            name: 'Paloma',
            photo: 'https://via.placeholder.com/150/e74c3c/FFFFFF?text=Paula', // Reemplazar con URL de la foto real
            role: 'Editora de Contenido / Accesibilidad',
            nitrogenLink: '"Asegurar que la información del nitrógeno fuera clara y accesible para todos fue mi misión principal."',
            wisdom: '"La inclusión no es una opción, es la base de un diseño web realmente potente y universal."',
            atomPositions: [
                { top: '20%', left: '5%' },
                { bottom: '10%', right: '25%' },
                { top: '30%', right: '30%' }
            ]
        }
    ];

    // Función para crear las tarjetas de creadoras
    function createCreatorCard(creator) {
        const card = document.createElement('div');
        card.classList.add('creator-card');
        card.setAttribute('data-id', creator.id); // Para identificar la tarjeta

        card.innerHTML = `
            <img class="creator-photo" src="${creator.photo}" alt="Foto de ${creator.name}">
            <h3 class="creator-name">${creator.name}</h3>
        `;

        // Añadir átomos de ideas
        creator.atomPositions.forEach((pos, index) => {
            const atom = document.createElement('div');
            atom.classList.add('idea-atom');
            atom.style.top = pos.top;
            atom.style.left = pos.left || 'auto'; // Si no hay left, se usará right
            atom.style.right = pos.right || 'auto';
            atom.style.bottom = pos.bottom || 'auto';
            card.appendChild(atom);
        });

        // Evento para abrir el modal al hacer clic en la tarjeta
        card.addEventListener('click', () => {
            modalCreatorPhoto.src = creator.photo;
            modalCreatorPhoto.alt = `Foto de ${creator.name}`;
            modalCreatorName.textContent = creator.name;
            modalCreatorRole.textContent = `Rol: ${creator.role}`;
            modalNitrogenLink.textContent = `Mi enlace con el Nitrógeno: ${creator.nitrogenLink}`;
            modalWisdom.textContent = `Una Molécula de Sabiduría: ${creator.wisdom}`;
            modal.style.display = 'flex'; // Mostrar el modal
        });

        return card;
    }

    // Generar todas las tarjetas al cargar la página
    creadorasData.forEach(creator => {
        creadorasContainer.appendChild(createCreatorCard(creator));
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Pequeño script para el fondo del nitrógeno (opcional, si quieres más complejidad en la animación)
    // Esto es solo un placeholder, una animación CSS compleja o SVG sería mejor para el ciclo
    const nitrogenBg = document.querySelector('.nitrogen-background');
    let angle = 0;
    function animateNitrogenBg() {
        angle = (angle + 0.1) % 360;
        // nitrogenBg.style.transform = `rotate(${angle}deg) scale(1.1)`; // Ejemplo de otra animación JS
        requestAnimationFrame(animateNitrogenBg);
    }
    // animateNitrogenBg(); // Descomentar para activar la animación JS, o dejar solo la CSS

});