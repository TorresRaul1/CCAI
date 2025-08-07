//Este script se ejecuta cuando el DOM está completamente cargado
// y se encarga de manejar la navegación, formularios y validaciones.
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
    responsiveNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
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
});
// FORMULARIO: Mostrar/ocultar campos extra por rol
    const rolSelect = document.getElementById('rolSelect');
    const extraForm = document.getElementById('extraForm');
    const consultorForm = document.getElementById('consultorForm');
    const submitBtnContainer = document.getElementById('submitBtnContainer');

    if (rolSelect && extraForm && consultorForm && submitBtnContainer) {
    rolSelect.addEventListener('change', () => {
        const value = rolSelect.value;

        // Ocultar ambos formularios al inicio
        extraForm.classList.add('d-none');
        consultorForm.classList.add('d-none');

        if (value === 'Servicio Social' || value === 'Residencias Profesionales') {
            extraForm.classList.remove('d-none');
            submitBtnContainer.classList.remove('d-none');
        } else if (value === 'Consultor') {
            consultorForm.classList.remove('d-none');
            submitBtnContainer.classList.remove('d-none');
        } else {
            submitBtnContainer.classList.add('d-none');
        }
    });
    }
    //
    //Esta funcion valida la edad, que sea mayor de 18,  Edad: Validación
    const edadInput = document.getElementById('edadInput');
    if (edadInput) {
        edadInput.addEventListener('input', () => {
            if (edadInput.validity.rangeUnderflow || edadInput.validity.valueMissing) {
                edadInput.classList.add('is-invalid');
                edadInput.classList.remove('is-valid');
            } else {
                edadInput.classList.remove('is-invalid');
                edadInput.classList.add('is-valid');
            }
        });
    }
    // Enviar: Mostrar Toast
    const sendBtn = document.getElementById('sendButton');
    const toastEl = document.getElementById('messageToast');
    if (sendBtn && toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toast.show();
        });
    }

});