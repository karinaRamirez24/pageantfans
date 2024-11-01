// Cambia la URL sin recargar ni actualizar el contenido
function changeUrl(path) {
    history.pushState(null, null, path);
}

// Escucha el evento de popstate para soportar el botón "atrás" en el navegador
window.addEventListener('popstate', () => {
    console.log("URL actual:", window.location.pathname);
    // No necesitas hacer nada aquí si el contenido no cambia
});

// Ejemplo de enlaces con eventos
document.getElementById('queensLink').addEventListener('click', (e) => {
    e.preventDefault();
    changeUrl('/queens');
});
document.getElementById('fansLink').addEventListener('click', (e) => {
    e.preventDefault();
    changeUrl('/fans');
});