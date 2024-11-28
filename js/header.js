let contBut = 0;

function headersHTML(headerElement) {
    const elements = {
        borrar: headerElement.querySelector('#menuButton'),
        topBarr: headerElement.querySelector('.top-bar'),
        expandedMenu: headerElement.querySelector('#dropdownMenu'),
        contenido: document.querySelector('#content'),
        logohome: headerElement.querySelector('#logohome'),
        joinUs: headerElement.querySelector('#singUp')
    };

    const menuItems = {
        aboutus: { element: headerElement.querySelector('#aboutus'), url: '../Pages/AboutUs/aboutus.html', path: '/aboutus' },
        download: { element: headerElement.querySelector('#download'), url: '../Pages/Download/download.html', path: '/downloadapp' },
        subscriptions: { element: headerElement.querySelector('#subscriptions'), url: '../Pages/Subscriptions/subscriptions.html', path: '/subscribers' },
        news: { element: headerElement.querySelector('#news'), url: '../Pages/News/news.html', path: '/news' },
        aboutusDown: { element: headerElement.querySelector('#aboutusDown'), url: '../Pages/AboutUs/aboutus.html', path: '/aboutus' },
        downloadDown: { element: headerElement.querySelector('#downloadDown'), url: '../Pages/Download/download.html', path: '/downloadapp' },
        subscriptionsDown: { element: headerElement.querySelector('#subscriptionsDown'), url: '../Pages/Subscriptions/subscriptions.html', path: '/subscribers' },
        newsDown: { element: headerElement.querySelector('#newsDown'), url: '../Pages/News/news.html', path: '/news' }
    };

    // Alternar menú
    elements.borrar.addEventListener('click', toggleMenu.bind(null, elements));

    // Configurar navegación para los elementos del menú
    Object.values(menuItems).forEach(({ element, url, path }) => {
        if (element) {
            element.addEventListener('click', () => navigateTo(url, path, elements));
        }
    });

    // Navegación específica
    elements.logohome.addEventListener('click', () => navigateTo('../Pages/Opening/opening.html', '/home', elements));
    elements.joinUs.addEventListener('click', () => {
        navigateTo('../Pages/Joinus/joinus.html', '/joinus', elements);
        document.getElementById('header-container').style.display = 'none';
        document.getElementById('footer-container').style.display = 'none';
    });

    // Cargar contenido inicial
    navigateTo('../Pages/Opening/opening.html', '/home', elements);
}

function toggleMenu({ borrar, topBarr, expandedMenu, contenido }) {
    if (contBut === 1) {
        expandedMenu.style.display = 'none';
        topBarr.style.height = "auto";
        topBarr.style.background = "rgba(0, 0, 0, 0.35)";
        borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu i-nav'></i>";
        contBut = 0;
    } else {
        expandedMenu.style.display = 'block';
        topBarr.style.animation = "scale-up-top 0.4s linear";
        topBarr.style.background = "rgba(35, 35, 35)";
        topBarr.style.height = "100%";
        borrar.innerHTML = "<i id='botonx' class='bx bx-x i-nav'></i>";
        topBarr.style.overflow = "auto";
        contBut = 1;
    }
}

function navigateTo(url, path, elements) {
    cargarContenidoHeader(url, path);
    resetMenuState(elements);
}

function resetMenuState({ expandedMenu, topBarr, borrar }) {
    expandedMenu.style.display = 'none';
    topBarr.style.background = "rgba(0, 0, 0, 0.35)";
    topBarr.style.height = "auto";
    borrar.innerHTML = "<i id='botonmenu' class='bx bx-menu i-nav'></i>";
    contBut = 0;
}

function cargarContenidoHeader(url, path) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            history.pushState(null, null, path);
        });
}

window.addEventListener('popstate', function () {
    const currentPath = window.location.pathname;
    cargarContenido(currentPath, currentPath);
});
