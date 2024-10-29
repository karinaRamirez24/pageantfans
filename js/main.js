document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("../elements/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            headersHTML(document.getElementById("header-container"));
        });
    // Cargar el footer
    fetch("../elements/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
            footerHTML(document.getElementById("footer-container"));
        });

    fetch("../elements/modal.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("modalStore").innerHTML = data;
            headersHTML(document.getElementById("modalStore"));
        });

});


