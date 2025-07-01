// === MI JAVASCRIPT PARA LA PÁGINA DE IMPACTO DEL NITRÓGENO === //

// 🍃 Hago que la hojita verde siga el cursor cuando mueves el ratón
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('emoji-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        if (Math.random() > 0.7) {
            const trail = document.createElement("div");
            trail.className = "cursor-trail";
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);
            
            setTimeout(() => {
                if (trail && trail.parentNode) {
                    trail.remove();
                }
            }, 600);
        }
    }
});

// 🔢 Esta función hace que los números de las estadísticas suban poco a poco
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    const button = document.querySelector('.reveal-stats');
    
    if (statCards.length === 0) {
        console.log('No encuentro las tarjetas de estadísticas');
        return;
    }
    
    statCards.forEach(card => {
        const target = +card.getAttribute('data-stat');
        const statNumber = card.querySelector('.stat-number');
        
        if (statNumber && target) {
            let current = 0;
            const duration = 1500;
            const stepTime = Math.max(Math.floor(duration / target), 20);
            
            const counter = setInterval(() => {
                current += 1;
                statNumber.textContent = current;
                
                if (current >= target) {
                    clearInterval(counter);
                    statNumber.textContent = target;
                }
            }, stepTime);
        }
    });
    
    if (button) {
        button.textContent = 'Ahora ya te haces una idea, ¿no?';
    }
}

// 👁️ Funciones para mostrar/ocultar contenido
function showPersonalActions() {
    const content = document.getElementById('personal-actions');
    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

function showGlobalEfforts() {
    const content = document.getElementById('global-efforts');
    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

// ⬆️ Función para subir arriba - SÚPER SIMPLE SIN ERRORES
function scrollToTop() {
    console.log('🚀 Ejecutando scroll to top');
    
    // El método más directo que SIEMPRE funciona
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    console.log('✅ Scroll ejecutado');
}

// 📱 Función para cerrar la ventana sorpresa
function closeSurpriseModal() {
    const modal = document.getElementById('surprise-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 🚀 TODO ESTO SE EJECUTA CUANDO LA PÁGINA TERMINA DE CARGAR
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Mi página ya cargó correctamente');
    
    // Configuro el botón de scroll - VERSIÓN ULTRA SIMPLE
    const scrollButton = document.querySelector('.btn-up');
    if (scrollButton) {
        console.log('✅ Encontré el botón de scroll');
        
        // La manera MÁS SIMPLE de agregar el evento
        scrollButton.onclick = function() {
            console.log('🖱️ Click detectado - ejecutando scroll');
            scrollToTop();
        };
        
        // Para móviles - sin preventDefault que causa problemas
        scrollButton.addEventListener('touchstart', function() {
            console.log('📱 Touch detectado - ejecutando scroll');
            scrollToTop();
        });
        
        console.log('✅ Eventos de scroll configurados');
        
    } else {
        console.log('❌ No encuentro el botón de scroll');
    }
    
    // Configuro el botón de estadísticas
    const statsButton = document.querySelector('.reveal-stats');
    if (statsButton) {
        console.log('✅ Encontré el botón de estadísticas');
        statsButton.onclick = function() {
            console.log('📊 Alguien quiere ver las estadísticas');
            animateStats();
        };
    } else {
        console.log('❌ No encuentro el botón de estadísticas');
    }
    
    // Configuro TODOS los botones de acción de manera más simple
    const actionButtons = document.querySelectorAll('.action-btn');
    console.log('🔍 Encontré', actionButtons.length, 'botones de acción');
    
    actionButtons.forEach((button, index) => {
        const buttonText = button.textContent.trim();
        console.log('🔘 Configurando botón:', buttonText);
        
        button.onclick = function() {
            console.log('👆 Click en:', buttonText);
            
            if (buttonText.includes('Personales')) {
                showPersonalActions();
            } else if (buttonText.includes('Globales')) {
                showGlobalEfforts();
            }
        };
    });
    
    // Configuro el botón de cerrar modal
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        console.log('✅ Encontré el botón de cerrar modal');
        closeBtn.onclick = function() {
            closeSurpriseModal();
        };
    }
    
    // Configuro el botón secundario del modal
    const secondaryBtn = document.querySelector('.surprise-btn.secondary');
    if (secondaryBtn) {
        console.log('✅ Encontré el botón secundario del modal');
        secondaryBtn.onclick = function() {
            closeSurpriseModal();
        };
    }
    
    console.log('🎉 Ya configuré todos los eventos - todo debería funcionar');
});

/* === LO QUE HACE CADA COSA ===

💡 CAMBIOS PRINCIPALES EN ESTA VERSIÓN:
- Busco los botones de acción de manera más simple (por texto)
- No busco por onclick que ya no existe
- Más logs para ver exactamente qué está pasando
- Código más robusto que no se rompe

🔧 DEBUGGING:
- Mira la consola para ver cuántos botones encuentra
- Si ve "0 botones de acción" es que hay un problema en el HTML
- Si ve errores de "null" es que algún elemento no existe

📱 DEBERÍA FUNCIONAR EN:
- Computadoras ✅
- Móviles ✅ 
- Todos los navegadores ✅

¡Ya no deberías tener errores! 🎯
*/