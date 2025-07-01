// Inicializa AOS
AOS.init({
  offset: 250,
  duration: 800,
  easing: 'ease-out-back',
});

// Configura los eventos y atributos AOS en las tarjetas
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 8px 16px rgba(44, 62, 80, 0.2)';
        item.style.transform = 'scale(1.03)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 6px 12px rgba(44, 62, 80, 0.15)';
        item.style.transform = 'scale(1)';
    });

    // Usamos animación zoom-in-up para todas las tarjetas
    item.setAttribute('data-aos', 'zoom-in-up');
});
