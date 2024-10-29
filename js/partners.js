function nextpage() {
    console.log("ferfrfr");
    fetch("../Pages/Partners/partners.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}
