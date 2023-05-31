function activarScrollPorElemento(section) {
  var elemento = document.querySelector(section);

  function activar() {
    var alturaContenedor = elemento.getBoundingClientRect();
    var contenedorImgA = document.querySelectorAll(".experiencia__img__impar");
    var elementoHijoImparA;

    if (alturaContenedor.top < window.innerHeight && alturaContenedor.bottom > 0) {
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
  }

  window.addEventListener("scroll", activar);
  // Llama a la función activar() inmediatamente para verificar el estado inicial
  activar();
}

// Ejemplo de uso
activarScrollPorElemento(".experiencia__contenedor");


