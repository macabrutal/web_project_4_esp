//UTILS: controladores de eventos y la función que abre/cierra las ventanas modales.

//VARIABLE DE TODOS LOS POPUPS
const popups = Array.from(document.querySelectorAll(".popup-container"));

//VARIABLE MODAL IMAGEN
const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM)
const closeButtons = document.querySelectorAll(".popup-container__close-popup");

export function handleOpenPopup() {
  popupImage.src = this._link;
  popups.classList.add("popup-container_show");
}

export function handleClosePopup() {
  popupImage.src = this._link;
  popups.classList.remove("popup-container_show");
}

closeButtons.addEventListener("click", handleClosePopup);
