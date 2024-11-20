function nextPageFans() {
    fetch('../Pages/Fans/fans.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState('', '', '/home/fans');
        });
}

function nextPageQueens() {
    fetch('../Pages/Queens/queens.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState('', '', '/home/queens');
        });
}

function nextPagePartners() {
    fetch('../Pages/Partners/partners.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState('', '', '/home/partners');
        });
}

function singUp() {
    fetch('../Pages/Joinus/joinus.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState('', '', '/home/joinus');
            document.getElementById("header-container").style.display = "none";
            document.getElementById("footer-container").style.display = "none";

        });
}

function downloadApp() {
    fetch('../Pages/downloadApp/downloadapp.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState('', '', '/Download/Download-App');
        });
}
function cargarContenido(url, path) {
    if (url.includes('/fans')) {
        url = '../Pages/Fans/fans.html';
        path = '/home/fans';
    } else if (url.includes('/queens')) {
        url = '../Pages/Queens/queens.html';
        path = '/home/queens';
    } else if (url.includes('/partners')) {
        url = '../Pages/Partners/partners.html';
        path = '/home/partners';
    } else if (url.includes('downloadapp')) {
        url = '../Pages/Download/download.html';
        path = '/home/downloadapp';
    } else if (url.includes('/Download-App')) {
        url = '../Pages/Queens/queens.html';
        path = '/queens';
    } else if (url.includes('/joinus')) {
        url = '../Pages/Queens/queens.html';
        path = '/queens';
    } else if (url.includes('/news')) {
        url = '../Pages/News/news.html';
        path = '/home/news';
    } else if (url.includes('/subscribers')) {
        url = '../Pages/Subscriptions/subscriptions.html';
        path = '/home/subscribers';
    } else {
        url = '../Pages/Queens/queens.html';
        path = '/home/queens';
    }
    document.getElementById('header-container').style.display = 'block';
    document.getElementById('footer-container').style.display = 'block';
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            console.log(path);
            history.pushState('', '', path);
        });
}

window.addEventListener('popstate', function () {
    cargarContenido(window.location.pathname, document.location.pathname);
});
