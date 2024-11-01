function nextPageFans() {
    fetch("../Pages/Fans/fans.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}

function nextPageQueens() {
    fetch("../Pages/main.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}

function nextPagePartners() {
    fetch("../Pages/Partners/partners.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}

function singUp(){
    fetch("../Pages/Joinus/joinus.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;
        document.getElementById("header-container").style.display = "none";
        document.getElementById("footer-container").style.display = "none";
    });
}

