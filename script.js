// Actualizar el año en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Menú Responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Función para voltear las tarjetas de servicios
function toggleFlip(element) {
    element.classList.toggle('flipped');
}
