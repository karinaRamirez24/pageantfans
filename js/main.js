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
});


let buttonext = document.getElementById('nextPage');
buttonext.addEventListener("click", function() {
    console.log("hi");
    nextPages("../Pages/Partners/partners.html");
});




function nextPages(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}