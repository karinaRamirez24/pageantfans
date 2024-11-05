function headersHTML(headerElement) {
    let aboutus = headerElement.querySelector("#aboutus");
    let download = headerElement.querySelector("#download");
    let subscriptions = headerElement.querySelector("#subscriptions");
    let news = headerElement.querySelector("#news");
    let joinUs = headerElement.querySelector("#singUp");

    cargarContenido("../Pages/main.html", "/");

    aboutus.addEventListener("click", function () {
        cargarContenidohead("../Pages/AboutUs/aboutus.html", "/aboutus");
    });

    download.addEventListener("click", function () {
        cargarContenidohead("../Pages/Download/download.html", "/download");
    });

    subscriptions.addEventListener("click", function () {
        cargarContenidohead("../Pages/Subscriptions/subscriptions.html", "/subscriptions");
    });

    news.addEventListener("click", function () {
        cargarContenidohead("../Pages/News/news.html", "/news");
    });

    joinUs.addEventListener("click", function () {
        cargarContenidohead("../Pages/Joinus/joinus.html", "/joinus");
        document.getElementById("header-container").style.display = "none";
        document.getElementById("footer-container").style.display = "none";
    });
}

function cargarContenidohead(url, path) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState({}, "", path); // Actualiza la URL sin recargar
        });
}

// Manejo del botón "Atrás" en el navegador
window.addEventListener("popstate", function() {
    cargarContenidohead(window.location.pathname);
});