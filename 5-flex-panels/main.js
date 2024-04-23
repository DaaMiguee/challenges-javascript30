const panels = document.querySelectorAll('.panel');

// Esta funcion se encarga de abrir o cerrar el panel clickeado
function toggleOpen() {
    // Verifica si el panel clickeado ya está abierto
    const isOpen = this.classList.contains('open');
    panels.forEach(panel => panel.classList.remove('open'));
    if (!isOpen) {
        this.classList.toggle('open');
    }
}

// Esta funcion se encarga de aplicar la clase 'open-active' cuando la transición termina
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        // Alterna la clase 'open-active' en el panel que terminó la transición
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
