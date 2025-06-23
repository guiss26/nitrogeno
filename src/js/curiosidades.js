document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 6px 10px rgba(44, 62, 80, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 4px 6px rgba(44, 62, 80, 0.1)';
    });
});

