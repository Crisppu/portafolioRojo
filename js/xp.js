({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: {file: "index.html"} // Located in project root
});

const contenedorXp = document.querySelector("[data-contenedorXp]");

function activarScrollPorElContenedor(section) {
  function activar() {
    var alturaContenedor = section.getBoundingClientRect();
    var contenedorImagenesXp = document.querySelectorAll(".experiencia__img");
    var elementoHijoImpar;
    var elementoHijoPar;


    var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var pantallaMovil = 858;
    if (anchoPantalla > pantallaMovil) {
      if (alturaContenedor.top < window.innerHeight && alturaContenedor.bottom > 0) {
        for (let i = 0; i < contenedorImagenesXp.length; i++) {
          if (i % 2 == 0) {
            elementoHijoPar = contenedorImagenesXp[i];
            elementoHijoPar.classList.add("activa");
          } else {
            elementoHijoImpar = contenedorImagenesXp[i];
            elementoHijoImpar.classList.add("activa1");
          }
        }
      } else {
        for (let i = 0; i < contenedorImagenesXp.length; i++) {
          if (i % 2 == 0) {
            elementoHijoPar = contenedorImagenesXp[i];
            elementoHijoPar.classList.remove("activa");
          } else {
            elementoHijoImpar = contenedorImagenesXp[i];
            elementoHijoImpar.classList.remove("activa1");
          }
        }

      }
    }
  }

  window.addEventListener("scroll", activar);
  // Llama a la función activar() inmediatamente para verificar el estado inicial
  activar();
}

// Ejemplo de uso
activarScrollPorElContenedor(contenedorXp);
console.log(contenedorXp);
/*
window.addEventListener("scroll", function() {
  var alturaContenedor = contenedorXp.getBoundingClientRect();
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
  console.log(anchoPantalla)
});*/
