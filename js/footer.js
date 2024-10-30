function footerHTML(footerElement) {

    let aboutusf = footerElement.querySelector("#aboutusf");
    let downloadf = footerElement.querySelector("#downloadf");
    let subscriptionsf = footerElement.querySelector("#subscriptionsf");
    let newsf = footerElement.querySelector("#newsf");

    console.log(aboutusf);
    
    aboutusf.addEventListener("click", function () {
        console.log("BBB");
        cargarContenido("../Pages/AboutUs/aboutus.html");
    });

    downloadf.addEventListener("click", function () {
        cargarContenido("../Pages/Download/download.html");
    });

    subscriptionsf.addEventListener("click", function () {
        cargarContenido("../Pages/Subscriptions/subscriptions.html");
    });

    newsf.addEventListener("click", function () {
        cargarContenido("../Pages/News/news.html");
    });
}

function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}