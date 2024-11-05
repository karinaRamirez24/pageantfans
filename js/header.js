function headersHTML(headerElement) {
    let aboutus = headerElement.querySelector("#aboutus");
    let download = headerElement.querySelector("#download");
    let subscriptions = headerElement.querySelector("#subscriptions");
    let news = headerElement.querySelector("#news");
    let joinUs = headerElement.querySelector("#singUp");
    let logohome = headerElement.querySelector("#logohome");

    cargarContenidoHeader("../Pages/main.html", "/home/queens");

    logohome.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/main.html", "/home/queens");
    });

    aboutus.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/AboutUs/aboutus.html", "/aboutus");
    });

    download.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/Download/download.html", "/downloadapp");
    });

    subscriptions.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/Subscriptions/subscriptions.html", "/subscribers");
    });

    news.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/News/news.html", "/news");
    });

    joinUs.addEventListener("click", function () {
        cargarContenidoHeader("../Pages/Joinus/joinus.html", "/joinus");
        document.getElementById("header-container").style.display = "none";
        document.getElementById("footer-container").style.display = "none";
    });
}

function cargarContenidoHeader(url, path) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState(null, null, path);
        });
}

window.addEventListener("popstate", function() {
    cargarContenidoHeader(window.location.pathname);
});
