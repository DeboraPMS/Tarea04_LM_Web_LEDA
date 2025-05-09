
window.onload = function () {
    // Variables
    const imagenes = [
        'assets/img_signos/aries1.png',
        'assets/img_signos/aries2.png',
        'assets/img_signos/tauro1.png',
        'assets/img_signos/tauro2.png',
        'assets/img_signos/geminis1.png',
        'assets/img_signos/geminis2.png',
        'assets/img_signos/cancer1.png',
        'assets/img_signos/cancer2.png',
        'assets/img_signos/leo1.png',
        'assets/img_signos/leo2.png',
        'assets/img_signos/virgo1.png',
        'assets/img_signos/virgo2.png',
        'assets/img_signos/libra1.png',
        'assets/img_signos/libra2.png',
        'assets/img_signos/escorpio1.png',
        'assets/img_signos/escorpio2.png',
        'assets/img_signos/sagitario1.png',
        'assets/img_signos/sagitario2.png', 
        'assets/img_signos/capricornio1.png',
        'assets/img_signos/capricornio2.png',
        'assets/img_signos/acuario1.png',
        'assets/img_signos/acuario2.png',
        'assets/img_signos/piscis1.png',
        'assets/img_signos/piscis2.png',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactiva los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activa los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
    
}