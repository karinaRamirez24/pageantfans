document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("./elements/Header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            headersHTML(document.getElementById("header-container"));
        });
    // Cargar el footer
    fetch("../elements/Footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
            footerHTML(document.getElementById("footer-container"));
        });
});
