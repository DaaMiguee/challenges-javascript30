// Selecciona todos los elementos <input> que estan dentro de elementos con la clase 'controls'
const inputs = document.querySelectorAll('.controls input');

// esta funcion se ejecutara cada vez que cambia el valor de un input
function handleUpdate() {
    // Obtiene el sufijo del atributo 'data-sizing' del input actual, o una cadena vacía si no existe
    const suffix = this.dataset.sizing || '';

// Establece una variable CSS personalizada con el valor actual del input y su sufijo
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// se agrega un evento 'change' a cada input, para actualizar cuando cambia su valor
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// se agrega un evento 'mousemove' a cada input, para actualizar mientras se mueve el cursor sobre ellos
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
