function headersHTML(headerElement) {
    let aboutus = headerElement.querySelector("#aboutus");
    let download = headerElement.querySelector("#download");
    let subscriptions = headerElement.querySelector("#subscriptions");
    let news = headerElement.querySelector("#news");
    let joinUs = headerElement.querySelector("#singUp");

    cargarContenido("../Pages/main.html", "/");

    aboutus.addEventListener("click", function () {
        cargarContenido("../Pages/AboutUs/aboutus.html", "/aboutus");
    });

    download.addEventListener("click", function () {
        cargarContenido("../Pages/Download/download.html", "/download");
    });

    subscriptions.addEventListener("click", function () {
        cargarContenido("../Pages/Subscriptions/subscriptions.html", "/subscriptions");
    });

    news.addEventListener("click", function () {
        cargarContenido("../Pages/News/news.html", "/news");
    });

    joinUs.addEventListener("click", function () {
        cargarContenido("../Pages/Joinus/joinus.html", "/joinus");
        document.getElementById("header-container").style.display = "none";
        document.getElementById("footer-container").style.display = "none";
    });
}

function cargarContenido(url, path) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState(null, null, path); // Actualiza la URL sin recargar
        });
}

// Manejo del botón "Atrás" en el navegador
window.addEventListener("popstate", function() {
    cargarContenido(window.location.pathname);
});