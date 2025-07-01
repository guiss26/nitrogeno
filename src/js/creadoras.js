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
            name: 'Guissella',
            photo: '../public/creadoras-files/guissella.png', // Reemplazar con URL de la foto real
            role: 'Scrum master',
            nitrogenLink: '"Así como el nitrógeno es el 78% del aire que respiramos, el Scrum Master es el 100% del oxígeno que haimpulsa este equipo."',
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
            photo: '../public/creadoras-files/aday.png', 
            role: 'Historiadora',
            nitrogenLink: '"Así como el nitrógeno es fundamental para la vida en la Tierra, Aday ha sido el elemento esencial que ha dado vida a la fascinante historia del nitrógeno en esta página."',
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
            photo: '../public/creadoras-files/rocio.png', 
            role: 'Investigadora',
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
            photo: '../public/creadoras-files/ana.png', 
            role: 'Creadora',
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
            photo: '../public/creadoras-files/larysa.png', 
            role: 'Creadora de Interactividad',
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
            photo: '../public/creadoras-files/paloma.png', 
            role: 'Pestaña creadora',
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

const COUNT = 200;

const SIZES = [
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--l',
    'rainDrop--l',
    'rainDrop--l',
    'rainDrop--xl',
    'rainDrop--xl',
    'rainDrop--xl',
];

const EMOJIS = [
    '🎀',
    '🎆',
    '💻',
    '💕',
    '♥',
    '💕',
    '💟',
    '💖',
    '🧠',
    '🖤',
    '💜',
    '🌺',
    '🌸',
    '😻',
    '🐈'
];

const rainContainer = document.querySelector('#creadoras-section > h2');

const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{
    const myEmoji = document.createElement('div');
    myEmoji.innerText = emoji;
    myEmoji.classList.add('rainDrop', size);
    myEmoji.style.setProperty('--x-satrt', xStart + 'vw');
    myEmoji.style.setProperty('--x-end', xEnd + 'vw');
    myEmoji.style.setProperty('--y-satrt', yStart + 'vh');
    myEmoji.style.setProperty('--y-end', yStart + 200 + 'vh');

    return myEmoji;
}

for(let i=0; i<COUNT; i++){
    const size = randFromList(SIZES);
    const xStart = getRamdom(350,-50);
    const xEnd = getRamdom(xStart -20, xStart + 20);
    const yStart = getRamdom(-100, 0);
    const emoji = randFromList(EMOJIS);
    rainContainer.appendChild(genRainDrop(size, xStart,xEnd, yStart, emoji));
}

function randFromList(items){
    return items[Math.floor(Math.random()*items.length)];
}

function getRamdom(min, max){
    return Math.random()*(max - min) + min;
}
    document.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('bg-audio');
        const toggleBtn = document.getElementById('toggle-audio');
        const icon = toggleBtn.querySelector('i');

        let isPlaying = false;

        toggleBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                icon.classList.remove('fa-volume-xmark');
                icon.classList.add('fa-volume-high');
            } else {
                audio.play();
                icon.classList.remove('fa-volume-high');
                icon.classList.add('fa-volume-xmark');
            }
            isPlaying = !isPlaying;
        });
    });