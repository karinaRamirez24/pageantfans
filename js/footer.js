function footerHTML(footerElement) {

    let main = footerElement.querySelector("#main");
    let computo = footerElement.querySelector("#computo");
    let consumibles = footerElement.querySelector("#consumibles");
    let cartuchos = footerElement.querySelector("#cartuchos");
    let gamer = footerElement.querySelector("#gamer");
    let routYantes = footerElement.querySelector("#routYantes");
    let nosotros = footerElement.querySelector("#nosotros");
    let contacto = footerElement.querySelector("#contacto");


    main.addEventListener("click", function () {
        cargarContenido("./Pages/main.html");
    });


    computo.addEventListener("click", function () {
        cargarContenido("./Pages/Computo/computo.html");
    });
    

    consumibles.addEventListener("click", function() {
        cargarContenido("./Pages/Consumibles/consumibles.html");
    });

    cartuchos.addEventListener("click", function() {
        cargarContenido("./Pages/Cartuchos/cartuchos.html");
    });


    gamer.addEventListener("click", function () {
        cargarContenido("./Pages/Gamer/gamer.html");
    });

    routYantes.addEventListener("click", function () {
        cargarContenido("./Pages/RoutersYAntenas/router_y_antenas.html");
    });

    nosotros.addEventListener("click", function () {
        cargarContenido("./Pages/Nosotros/nosotros.html");
    });

    contacto.addEventListener("click", function () {
        cargarContenido("./Pages/Contacto/contacto.html");
    });
}

function cargarContenido(url) {
    // Cargar el contenido de la página correspondiente
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}