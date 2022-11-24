//UTILS: controladores de eventos y la función que abre/cierra las ventanas modales.

import Card from "./Card.js";

import {
  popupAddContainer,
  configCardSelectors,
  imagePopupTitle,
  imagePopupImage,
  cardsContainer,
} from "./constants.js";

//VARIABLE DE TODOS LOS POPUPS
const popups = Array.from(document.querySelectorAll(".popup-container"));

//* FUNCIÓN: ABRIR  MODAL
export function openPopup(popup) {
  popup.classList.add("popup-container_show"); //cambiar CSS de MODAL con className "popup-container_show"
  document.addEventListener("keydown", isEscapeKey); //escuche a CERRAR MODAL (LAS 3)
  console.log("abro popup al clik en img");
}

// FUNCIÓN: CERRAR MODAL (LAS 3)
export function closePopup(popup) {
  popup.classList.remove("popup-container_show");
  document.removeEventListener("keydown", closePopup);
  console.log("cierro la modal ");
}

export function handleCloseButton(event) {
  const popup = event.target.closest(".popup");
  closePopup(popup);
}

// Controlador para CERRAR modal con ESC
export function isEscapeKey(event) {
  console.log(event.key);
  if (event.key === "esc" || event.key === "Escape") {
    popups.forEach(closePopup);
  }
}

//EVENTO: ABRIR la MODAL ADD
export function handleClickAddCard() {
  openPopup(popupAddContainer);
}

//EVENTO: CREAR NUEVA CARD
export function handleFormAdd(event) {
  event.preventDefault();
  const name = imagePopupTitle.value; //1.TITULO del input : title
  const link = imagePopupImage.value; //2. URL del input : addImage
  const nuevaCard = new Card(
    {
      name,
      link,
    },
    configCardSelectors.template
  );
  cardsContainer.prepend(nuevaCard.generateCard());
  event.target.reset();
  closePopup(popupAddContainer); //5.Cerrar la modal ADD > cambiando de clase

  //Deshabilitar el BOTÓN si los inputs están VACÍOS cuando ABRES LA MODAL
  // toggleButtonState(
  //   Array.from(evt.target.querySelectorAll(configForm.inputSelector)),
  //   evt.target.querySelector(configForm.submitButtonSelector),
  //   configForm.inactiveButtonClass
  // );
}

//SE CIERRA LA MODAL: al Clic FUERA de la MODAL y con BOTÓN CERRAR
export function setPopupListeners() {
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup-container_show")) {
        console.log("mousedown fuera de modal"); //Click fuera de modal
        closePopup(evt.target);
      }
      if (evt.target.classList.contains("popup-container__close-popup")) {
        console.log("cierro mousedown botón X"); //Click en botón X
        closePopup(popup);
      }
    });
  });
}

