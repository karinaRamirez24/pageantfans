let contBut = 0;
function headersHTML(headerElement) {
    let borrar = headerElement.querySelector('#menuButton');
    let collapsedMenu = headerElement.querySelector('#optionsMenu');
    let expandedMenu = headerElement.querySelector('#dropdownMenu');

    let contenido = document.getElementById('content');

    borrar.addEventListener('click', () => {
        if (contBut == 1) {
            expandedMenu.style.display = 'none';
            borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
            contBut = 0;
        } else {
            expandedMenu.style.display = 'block';
            borrar.innerHTML = "<i id='botonx' class='bx bx-x'></i>";
            contBut = 1;
        }
    });

    let aboutus = headerElement.querySelector('#aboutus');
    let download = headerElement.querySelector('#download');
    let subscriptions = headerElement.querySelector('#subscriptions');
    let news = headerElement.querySelector('#news');

    let aboutusDown = headerElement.querySelector('#aboutusDown');
    let downloadDown = headerElement.querySelector('#downloadDown');
    let subscriptionsDown = headerElement.querySelector('#subscriptionsDown');
    let newsDown = headerElement.querySelector('#newsDown');

    let joinUs = headerElement.querySelector('#singUp');
    let logohome = headerElement.querySelector('#logohome');

    cargarContenidoHeader('../Pages/main.html', '/home/queens');

    logohome.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/main.html', '/home/queens');
        expandedMenu.style.display = 'none';
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
        contBut = 0;
    });

    aboutus.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/AboutUs/aboutus.html', '/aboutus');
    });

    download.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/Download/download.html', '/downloadapp');
    });

    subscriptions.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/Subscriptions/subscriptions.html', '/subscribers');
    });

    news.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/News/news.html', '/news');
    });

    aboutusDown.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/AboutUs/aboutus.html', '/aboutus');
        expandedMenu.style.display = 'none';
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
        contBut = 0;
    });

    downloadDown.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/Download/download.html', '/downloadapp');
        expandedMenu.style.display = 'none';
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
        contBut = 0;
    });

    subscriptionsDown.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/Subscriptions/subscriptions.html', '/subscribers');
        expandedMenu.style.display = 'none';
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
        contBut = 0;
    });

    newsDown.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/News/news.html', '/news');
        expandedMenu.style.display = 'none';
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu'></i>";
        contBut = 0;
    });

    joinUs.addEventListener('click', function () {
        cargarContenidoHeader('../Pages/Joinus/joinus.html', '/joinus');
        document.getElementById('header-container').style.display = 'none';
        document.getElementById('footer-container').style.display = 'none';
    });
}

function cargarContenidoHeader(url, path) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            history.pushState(null, null, path);
        });
}

function cargarContenido(url, path) {
    if (url.includes('/fans')) {
        url = '../Pages/Fans/fans.html';
        path = '/home/fans';
    } else if (url.includes('/queens')) {
        url = '../Pages/main.html';
        path = '/home/queens';
    } else if (url.includes('/partners')) {
        url = '../Pages/Partners/partners.html';
        path = '/home/partners';
    } else if (url.includes('downloadapp')) {
        url = '../Pages/Download/download.html';
        path = '/home/downloadapp';
    } else if (url.includes('/Download-App')) {
        url = '../Pages/main.html';
        path = '/home/queens';
    } else if (url.includes('/joinus')) {
        url = '../Pages/main.html';
        path = '/home/queens';
    } else if (url.includes('/news')) {
        url = '../Pages/News/news.html';
        path = '/home/news';
    } else if (url.includes('/subscribers')) {
        url = '../Pages/Subscriptions/subscriptions.html';
        path = '/home/subscribers';
    }else {
        url = '../Pages/main.html';
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
    console.log(window.location.pathname);

    cargarContenido(window.location.pathname, document.location.pathname);
});
