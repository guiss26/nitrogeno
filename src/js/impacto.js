// 🍃 El emoji te sigue cuando mueves el ratón
document.addEventListener('mousemove', function(e) {
    // Mueve la hojita
    document.getElementById('emoji-cursor').style.left = e.clientX + 'px';
    document.getElementById('emoji-cursor').style.top = e.clientY + 'px';
    
    // Agrega rastro verde cada cierto tiempo
    if (Math.random() > 0.7) { // Solo 30% de las veces
        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);

        setTimeout(() => trail.remove(), 600);
    }
});

// 🔢 Función para animar números (solo cambia el texto)
    function animateStats() {
  const statCards = document.querySelectorAll('.stat-card');

  statCards.forEach(card => {
    const target = +card.getAttribute('data-stat');
    const statNumber = card.querySelector('.stat-number');
    let current = 0;
    const duration = 1500; // duración total de la animación (ms)
    const stepTime = Math.max(Math.floor(duration / target), 20); // asegura que el paso sea al menos 20ms

    const counter = setInterval(() => {
      current += 1;
      statNumber.textContent = current;

      if (current >= target) {
        clearInterval(counter);
        statNumber.textContent = target; // asegúrate de acabar en el valor exacto
      }
    }, stepTime);
  });

  document.querySelector('.reveal-stats').textContent = '¡Completado!';
}



// Mostrar/ocultar contenido
function showPersonalActions() {
    var content = document.getElementById('personal-actions');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';  // Si está visible, lo oculta
    } else {
        content.style.display = 'block'; // Si está oculto, lo muestra
    }
}

function showGlobalEfforts() {
    var content = document.getElementById('global-efforts');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// ⬆️ Ir arriba suavemente
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*
=== EXPLICACIÓN SÚPER SIMPLE ===

1. document.querySelector() = busca UN elemento
2. document.querySelectorAll() = busca TODOS los elementos
3. addEventListener() = "cuando pase algo, haz esto"
4. .style.left = cambia la posición horizontal
5. .style.top = cambia la posición vertical
6. .textContent = cambia el texto
7. .classList.add() = añade una clase CSS
8. .classList.remove() = quita una clase CSS
9. .style.display = 'block' = muestra el elemento
10. .style.display = 'none' = oculta el elemento
*/