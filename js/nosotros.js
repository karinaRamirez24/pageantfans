function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Oculta todos los elementos con class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desactiva la clase "active" en todos los botones de pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Muestra el contenido de la pestaña seleccionada y activa el botón correspondiente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}