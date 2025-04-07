let indiceActual = 0;
const imagenes = document.getElementsByClassName('carrusel-imagen');

function cambiarImagen(direccion) {
    imagenes[indiceActual].classList.remove('activa');
    
    indiceActual = indiceActual + direccion;
    
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    
    imagenes[indiceActual].classList.add('activa');
}

setInterval(function() {
    cambiarImagen(1);
}, 5000);
