// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const submitBtn = document.getElementById('submitBtn');
    const loadingMessage = document.getElementById('loadingMessage');
    const successMessage = document.getElementById('successMessage');

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const rolSelect = document.getElementById('rol');
    const expectativasTextarea = document.getElementById('expectativas');
    const expectativasCount = document.getElementById('expectativasCount');

    // Función para mostrar mensajes de error
    const showError = (element, message) => {
        const formGroup = element.closest('.form-group');
        formGroup.classList.add('error');
        const errorMessageDiv = formGroup.querySelector('.error-message');
        if (errorMessageDiv) {
            errorMessageDiv.textContent = message;
        }
    };

    // Función para ocultar mensajes de error
    const hideError = (element) => {
        const formGroup = element.closest('.form-group');
        formGroup.classList.remove('error');
        const errorMessageDiv = formGroup.querySelector('.error-message');
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
        }
    };

    // Validación individual al salir del campo (blur event)
    nombreInput.addEventListener('blur', () => {
        if (nombreInput.value.trim() === '') {
            showError(nombreInput, 'El nombre completo es obligatorio.');
        } else {
            hideError(nombreInput);
        }
    });

    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El correo electrónico es obligatorio.');
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Introduce un correo electrónico válido.');
        } else {
            hideError(emailInput);
        }
    });

    rolSelect.addEventListener('blur', () => {
        if (rolSelect.value === '') {
            showError(rolSelect, 'Selecciona tu rol actual.');
        } else {
            hideError(rolSelect);
        }
    });

    // Contador de caracteres para el textarea de expectativas
    expectativasTextarea.addEventListener('input', () => {
        const currentLength = expectativasTextarea.value.length;
        const maxLength = expectativasTextarea.getAttribute('maxlength');
        expectativasCount.textContent = `${currentLength}/${maxLength}`;
    });


    // Validación general del formulario al enviar
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío por defecto del formulario

        let isValid = true; // Bandera para saber si el formulario es válido

        // Resetear errores anteriores
        hideError(nombreInput);
        hideError(emailInput);
        hideError(rolSelect);

        // Validaciones obligatorias
        if (nombreInput.value.trim() === '') {
            showError(nombreInput, 'El nombre completo es obligatorio.');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El correo electrónico es obligatorio.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Introduce un correo electrónico válido.');
            isValid = false;
        }

        if (rolSelect.value === '') {
            showError(rolSelect, 'Selecciona tu rol actual.');
            isValid = false;
        }

        if (isValid) {
            // Si el formulario es válido, simula el envío
            submitBtn.disabled = true; // Deshabilita el botón
            loadingMessage.style.display = 'block'; // Muestra mensaje de carga

            // Simula una petición de red (ej: 2 segundos de espera)
            setTimeout(() => {
                loadingMessage.style.display = 'none'; // Oculta mensaje de carga
                successMessage.style.display = 'block'; // Muestra mensaje de éxito

                form.reset(); // Limpia el formulario
                expectativasCount.textContent = '0/250'; // Resetea el contador
                submitBtn.disabled = false; // Habilita el botón de nuevo (si permites múltiples envíos o recarga)

                // Oculta el mensaje de éxito después de un tiempo (opcional)
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000); // Se oculta después de 5 segundos

            }, 2000);
        } else {
            // Si hay errores, desplázate al primer campo con error
            const firstErrorField = document.querySelector('.form-group.error input, .form-group.error select, .form-group.error textarea');
            if (firstErrorField) {
                firstErrorField.focus(); // Enfoca el primer campo con error
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplaza suavemente
            }
        }
    });
});