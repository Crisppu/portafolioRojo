addEventListener("DOMContentLoaded", () => {
  const barsImg = document.querySelector("[data-barsImg]");
  const menuLista = document.querySelector("[data-nav]");
  const menuListaA = document.querySelectorAll("[data-menuA]");
  barsImg.addEventListener("click", function() {
    menuLista.classList.toggle("show");
  });
  for (let i = 0; i < menuListaA.length; i++) {
    const element = menuListaA[i];
    console.log(element);
    element.addEventListener("click", function() {
      menuLista.classList.toggle("show");
    });
  }
});
