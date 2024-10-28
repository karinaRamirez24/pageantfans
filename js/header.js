let contBut = 0;
function headersHTML(headerElement) {
    // let borrar = headerElement.querySelector("#menuButton");
    // let collapsedMenu = headerElement.querySelector("#optionsMenu");
    // let expandedMenu = headerElement.querySelector("#dropdownMenu");

    // let contenido =  document.getElementById("content")

    // borrar.addEventListener('click', () => {
    //     if (contBut == 1) {
    //         expandedMenu.style.display = "none"
    //         borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
    //         contBut = 0
    //     } else {
    //         expandedMenu.style.display = "block"
    //         borrar.innerHTML = "<i id='botonx' class='bx bx-x'></i>";
    //         contBut = 1
    //     }
    // });

    // let buscar = headerElement.querySelector("#searchButton");
    // let inputSearch = headerElement.querySelector("#input-search");
    // let contentSearch = headerElement.querySelector("#div-Busqueda");

    // buscar.addEventListener('click', () => {
    //     inputSearch.style.display = "block"
    //     contentSearch.style.backgroundColor = "rgb(233, 233, 233)";
    //     contentSearch.style.animation = "scale-up-horizontal-right 0.4s";
    // });

    let aboutus = headerElement.querySelector("#aboutus");
    let computo1 = headerElement.querySelector("#computo1");
    let download = headerElement.querySelector("#download");
    let subscriptions = headerElement.querySelector("#subscriptions");
    let news = headerElement.querySelector("#news");

    cargarContenido("../Pages/main.html");

    aboutus.addEventListener("click", function() {
        cargarContenido("../Pages/AboutUs/aboutus.html");
    });

    computo1.addEventListener("click", function() {
        cargarContenido("../Pages/Computo/computo.html");
    });

    download.addEventListener("click", function() {
        cargarContenido("../Pages/Download/download.html");
    });

    subscriptions.addEventListener("click", function() {
        cargarContenido("../Pages/Subscriptions/subscriptions.html");
    });

    news.addEventListener("click", function() {
        cargarContenido("../Pages/News/news.html");
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



