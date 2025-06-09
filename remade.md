# Explicación de los archivos principales del proyecto

## index.html

Este archivo contiene la estructura principal del formulario de registro al taller "DISEÑO WEB PARA PRINCIPIANTES CON IA".  
A continuación se describen sus partes y etiquetas principales:

- **DOCTYPE y html**: Define el tipo de documento y el idioma.
- **head**: Incluye la codificación, el viewport para diseño responsivo, el enlace a la hoja de estilos y el título de la página.
- **body**: Contiene todo el contenido visible.

### Estructura del body

- `<div class="container">`: Contenedor principal que agrupa todo el contenido.
- `<header>`: Título y descripción del taller.
- `<form>`: Formulario principal dividido en varios fieldsets:
  - **Información personal**: Campos para nombre, correo, edad, ciudad y teléfono.
    - Usa `<input>` para texto, email, número y teléfono.
    - `<select>` para elegir ciudad.
  - **Detalles Taller**: 
    - Radios para seleccionar el rol (estudiante, profesional, empleado).
    - Checkboxes para indicar cómo se enteró del taller.
    - `<textarea>` para escribir expectativas, con contador de caracteres.
  - **Preferencias de contacto**:
    - Radios para elegir si prefiere ser contactado por correo o teléfono.
- **Botón de envío**: `<button type="submit">`.
- **Mensajes de estado**: 
  - `<div id="loading-message">` para mostrar mensaje de envío.
  - `<div id="success-message">` para mostrar mensaje de éxito.
- **Script**: Al final, se enlaza el archivo `js/script.js` para la funcionalidad.

---

## styles.css

Este archivo define la apariencia visual del formulario y la página.  
Algunos aspectos que suele incluir:

- **Estilos para el contenedor**: Centrado, fondo, bordes redondeados, padding.
- **Estilos para inputs, selects y textarea**: Tamaño, márgenes, bordes, colores.
- **Estilos para botones**: Color de fondo, bordes, efectos al pasar el mouse.
- **Estilos para mensajes de estado**: Colores y visibilidad de los mensajes de "enviando" y "éxito".
- **Diseño responsivo**: Adaptación a diferentes tamaños de pantalla.

**Ejemplo de estilos:**
```css
.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}
input, select, textarea, button {
  width: 100%;
  margin-bottom: 10px;
}
.loading-message, .success-message {
  display: none;
  margin-top: 10px;
}
.success-message {
  color: green;
}
```

---

## script.js

Este archivo agrega la funcionalidad e interactividad al formulario.  
Algunas funciones típicas que puede tener:

- **Validación de campos**: Verifica que los campos obligatorios estén completos y con el formato correcto antes de enviar.
- **Contador de caracteres**: Actualiza el contador de caracteres del campo "expectativas" en tiempo real.
- **Manejo del envío**: 
  - Muestra el mensaje de "enviando registro..." cuando el usuario envía el formulario.
  - Muestra el mensaje de "registro enviado con éxito" si todo sale bien.
  - Puede evitar el envío real del formulario para hacer validaciones personalizadas.
- **Mostrar/ocultar mensajes**: Controla la visibilidad de los mensajes de estado según la acción del usuario.

**Ejemplo de funcionalidad:**
```javascript
const form = document.getElementById('miFormulario');
const loadingMsg = document.getElementById('loading-message');
const successMsg = document.getElementById('success-message');
const expectativas = document.getElementById('expectativas');
const expectativasCount = document.getElementById('expectativasCount');

expectativas.addEventListener('input', function() {
  expectativasCount.textContent = `${expectativas.value.length}/250`;
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  loadingMsg.style.display = 'block';
  setTimeout(() => {
    loadingMsg.style.display = 'none';
    successMsg.style.display = 'block';
  }, 2000);
});
```

---

## Resumen

- **index.html**: Estructura y campos del formulario.
- **styles.css**: Apariencia visual y diseño responsivo.
- **script.js**: Validaciones, mensajes y lógica interactiva.

