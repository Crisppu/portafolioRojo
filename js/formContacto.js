const $form = document.querySelector('[data-form]');
$form.addEventListener("submit", function ejecutarSiHayUnSubmit(evento) {
  evento.preventDefault();

  const from = new FormData($form);
  const nombreIngresado = from.get("nombre");
  const correoIngresado = from.get('email');
  const asuntoIngresado = from.get('asunto');
  const mensajeIngresado = from.get('mensaje');

  const nuevaEtiquetaA = document.createElement("a");
  nuevaEtiquetaA.setAttribute("class","a11");
  nuevaEtiquetaA.setAttribute('data-mailto','correo');
  document.querySelector("[data-contenedorFormulario]").appendChild( nuevaEtiquetaA);
const $botonMailto1 = document.querySelector('.a11');
$botonMailto1.setAttribute('href',`mailto:${correoIngresado}?subject=${asuntoIngresado}&body=${mensajeIngresado}`);
$botonMailto1.click();
$form.reset();

});


