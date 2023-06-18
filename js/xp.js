function activarScrollPorElemento(section) {
  var elemento = document.querySelector(section);

  function activar() {
    var alturaContenedor = elemento.getBoundingClientRect();
    var contenedorImgA = document.querySelectorAll(".experiencia__img__impar");
    var elementoHijoImparA;

    var anchoPantalla =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var pantallaMovil = 858;
    if (anchoPantalla > pantallaMovil) {
      if (
        alturaContenedor.top < window.innerHeight &&
        alturaContenedor.bottom > 0
      ) {
        // El elemento está visible en el viewport, activa tu lógica aquí

        for (var i = 0; i < contenedorImgA.length; i++) {
          if (i % 2 == 0) {
            elementoHijoImparA = contenedorImgA[i];
            elementoHijoImparA.classList.add("activa");
          } else {
            elementoHijoImparA = contenedorImgA[i];
            elementoHijoImparA.classList.add("activa1");
          }
        }
      } else {
        for (var i = 0; i < contenedorImgA.length; i++) {
          elementoHijoImparA = contenedorImgA[i];
          elementoHijoImparA.classList.remove("activa");
          elementoHijoImparA.classList.remove("activa1");
        }
      }
    }else{
      
    
    }
  }

  window.addEventListener("scroll", activar);
  // Llama a la función activar() inmediatamente para verificar el estado inicial
  activar();
}

// Ejemplo de uso
activarScrollPorElemento(".experiencia__contenedor");

/*
function calcularAnchoPantalla() {
  var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var pantallaMovil = 858;
  if(anchoPantalla > pantallaMovil){
  
  }

  return anchoPantalla;
}
var ancho = calcularAnchoPantalla();
console.log("Ancho de la pantalla: " + ancho);
*/
