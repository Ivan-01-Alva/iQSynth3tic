// Actualizar el año en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Menú Responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.toggle('flipped');
        });
    });
});


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});
