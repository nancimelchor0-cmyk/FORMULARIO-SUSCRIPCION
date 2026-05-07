document.getElementById('suscripcionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const terminos = document.getElementById('terminos').checked;
    const mensaje = document.getElementById('mensaje');

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        mensaje.style.color = 'red';
        mensaje.textContent = 'Por favor, introduce un correo electrónico válido.';
        return;
    }

    if (!terminos) {
        mensaje.style.color = 'red';
        mensaje.textContent = 'Debes aceptar los términos y condiciones.';
        return;
    }
    mensaje.style.color = 'green';
    mensaje.textContent = '¡Suscripción exitosa!';
    console.log('Datos enviados:', { email, terminos });
});
