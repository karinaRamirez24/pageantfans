
function headersHTML(headerElement) {
    let aboutus = headerElement.querySelector("#aboutus");
    let download = headerElement.querySelector("#download");
    let subscriptions = headerElement.querySelector("#subscriptions");
    let news = headerElement.querySelector("#news");
    let joinUs = headerElement.querySelector("#singUp");

    cargarContenido("../Pages/main.html");

    aboutus.addEventListener("click", function () {
        cargarContenido("../Pages/AboutUs/aboutus.html");
    });

    download.addEventListener("click", function () {
        cargarContenido("../Pages/Download/download.html");
    });

    subscriptions.addEventListener("click", function () {
        cargarContenido("../Pages/Subscriptions/subscriptions.html");
    });

    news.addEventListener("click", function () {
        cargarContenido("../Pages/News/news.html");
    });

    joinUs.addEventListener("click", function () {
        cargarContenido("../Pages/Joinus/joinus.html");
    });
}

function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}
