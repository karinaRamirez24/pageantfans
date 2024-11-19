function footerHTML(footerElement) {

    let aboutusf = footerElement.querySelector("#aboutusf");
    let downloadf = footerElement.querySelector("#downloadf");
    let subscriptionsf = footerElement.querySelector("#subscriptionsf");
    let newsf = footerElement.querySelector("#newsf");
    
    let logohome = footerElement.querySelector("#logohome")

    logohome.addEventListener("click", function () {
        cargarContenidoFoter("../Pages/Queens/queens.html", "/home/queens");
    });

    aboutusf.addEventListener("click", function () {
        cargarContenidoFoter("../Pages/AboutUs/aboutus.html", "/aboutus");
    });

    downloadf.addEventListener("click", function () {
        cargarContenidoFoter("../Pages/Download/download.html", "/downloadapp");
    });

    subscriptionsf.addEventListener("click", function () {
        cargarContenidoFoter("../Pages/Subscriptions/subscriptions.html", "/subscribers");
    });

    newsf.addEventListener("click", function () {
        cargarContenidoFoter("../Pages/News/news.html", "/news");
    });
}

function cargarContenidoFoter(url, path) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState("", "", path);
        });
}

window.addEventListener("popstate", function() {
    cargarContenidoFoter(window.location.pathname);
});
