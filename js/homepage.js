function nextPageFans() {
    fetch("../Pages/Fans/fans.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState("", "", "/home/fans");
        });
}

function nextPageQueens() {
    fetch("../Pages/main.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState("", "", "/home/queens");
        });
}

function nextPagePartners() {
    fetch("../Pages/Partners/partners.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            history.pushState("", "", "/home/partners");
        });
}

function singUp(){
    fetch("../Pages/Joinus/joinus.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;
        history.pushState("", "", "/home/joinus");
        document.getElementById("header-container").style.display = "none";
        document.getElementById("footer-container").style.display = "none";
    });
}

