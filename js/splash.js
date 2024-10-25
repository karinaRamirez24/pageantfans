const video = document.getElementById('intro-video');

video.onended = function() {
    // Desvanece el video
    video.style.opacity = '0'; // Desvanece el video

    // Espera 3 segundos después de que el video termine
    setTimeout(() => {
        const logo = document.getElementById('logo');
        logo.classList.add('fade-out'); // Añade la clase para la sombra
        logo.style.opacity = '0'; // Desvanece el logo

        // Espera a que termine la transición de desvanecimiento
        setTimeout(() => {
            const splashScreen = document.getElementById('splash-screen');
            splashScreen.style.display = 'none'; // Oculta el splash screen
        }, 100); // Espera a que termine la transición del logo
    }, 200); // Tiempo de espera después de que el video comienza a desvanecerse
};

// Asegúrate de que el video sea visible al inicio
video.style.opacity = '1';


