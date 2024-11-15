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

    // fetch("../elements/modal.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("modalStore").innerHTML = data;
    //         modalHTML(document.getElementById("modalStore"));
    //     });

});

function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    if (/Win/i.test(navigator.platform)) {
        return "Windows Desktop";
    }
    if (/Mac/i.test(navigator.platform)) {
        return "MacOS";
    }
    if (/Linux/i.test(navigator.platform)) {
        return "Linux";
    }
    return "Unknown";
}

const os = detectOS();
console.log(`El sistema operativo detectado es: ${os}`);

    if (os === "Android") {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/global.css"; 
        console.log(link.href.toString())
        document.head.appendChild(link);
        console.log("Cargado Nuevamente el GLOBAL CSS")
    }

