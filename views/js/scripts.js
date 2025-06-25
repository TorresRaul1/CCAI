//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItem.addEventListener('click', (e) => {
    // Evitar cerrar menú si es un dropdown-toggle o parte del submenú
    if (
        e.target.classList.contains('dropdown-toggle') || 
        e.target.closest('.dropdown-menu')
    ) {
        return;
    }

    if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
    }
});
    // Controlar submenús en móviles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function (dd) {
        dd.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('dropdown-menu')) {
                    nextEl.classList.toggle('show');
                }
            }
        });
    });
    

    const rolSelect = document.getElementById('rolSelect');
    const extraForm = document.getElementById('extraForm');
    const submitBtnContainer = document.getElementById('submitBtnContainer');

    rolSelect.addEventListener('change', () => {
        const value = rolSelect.value;
        if (value === 'Servicio Social' || value === 'Residencias Profesionales') {
        extraForm.classList.remove('d-none');
        submitBtnContainer.classList.remove('d-none');
        } else {
        extraForm.classList.add('d-none');
        submitBtnContainer.classList.add('d-none');
        }
    });
});
