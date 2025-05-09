document.addEventListener("DOMContentLoaded", function() {
    // Código a ejecutar una vez que el DOM esté listo
  const enlaces = document.querySelectorAll('.nav-menu-punto');

    enlaces.forEach(enlace => {
      enlace.addEventListener('mouseover', () => {
        enlace.classList.add('hovered');
      });

      enlace.addEventListener('mouseout', () => {
        enlace.classList.remove('hovered');
      });
    });
    

    document.getElementById("form-contacto").addEventListener("submit", function(e) {
        e.preventDefault();
      
        const datos = {
          nombre: document.getElementById("nombre").value,
          email: document.getElementById("email").value,
          telefono: document.getElementById("telefono").value,
          respuesta: document.getElementById("respuesta").value,
          consulta: document.getElementById("consulta").value,
          interes: document.getElementById("interes").value,
          sesion: document.querySelector('input[name="sesion"]:checked')?.value || "",
          fecha: document.getElementById("fecha").value,
          hora: document.getElementById("hora").value,
          lugar: document.getElementById("lugar").value,
          acepto: Array.from(document.querySelectorAll('input[name="acepto"]:checked')).map(el => el.value),
        };
      
        document.getElementById("formulario-section").style.display = "none";
        document.getElementById("resumen-section").style.display = "block";
      
        const resumen = document.getElementById("resumen");
        resumen.innerHTML = `
          <dl>
            <dt>Nombre completo</dt><dd>${datos.nombre}</dd>
            <dt>Correo electrónico</dt><dd>${datos.email}</dd>
            <dt>Teléfono</dt><dd>${datos.telefono}</dd>
            <dt>Tu mensaje</dt><dd><blockquote>${datos.respuesta}</blockquote></dd>
            <dt>Tus datos de nacimiento</dt>
            <dt>Fecha</dt><dd>${datos.fecha}</dd>
            <dt>Hora</dt><dd>${datos.hora}</dd>   
            <dt>Lugar</dt><dd>${datos.lugar}</dd> 
            <dt>Consulta personalizada</dt>
            <dt>Consulta</dt><dd>${datos.consulta}</dd>
            <dt>Interes</dt><dd>${datos.interes}</dd>
            <dt>Sesion</dt><dd>${datos.sesion}</dd>   
            <dt>Acepto</dt><dd>${datos.acepto.join(", ")}</dd>                
          </dl>
          <br>
          <p>Gracias por tu consulta, ${datos.nombre}. Nos pondremos en contacto contigo pronto.</p>
          <p>Si deseas realizar otra consulta, puedes volver a la sección de contacto.</p>

          
        `;
      });
      
});