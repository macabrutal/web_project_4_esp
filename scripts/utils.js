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

//VARIABLE MODAL IMAGEN
// export const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM)
// const closeButtons = document.querySelectorAll(".popup-container__close-popup");

//VARIABLE IMAGEN DEL POPUP
// export const imagePopupPicture = document.querySelector(
//   ".image-container__image-popup"
// );
//---

//* FUNCIÓN: ABRIR  MODAL
export function openPopup(popup) {
  popup.classList.add("popup-container_show"); //cambiar CSS de MODAL con className "popup-container_show"
  document.addEventListener("keydown", handleKeyPress); //escuche a CERRAR MODAL (LAS 3)
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
export function handleKeyPress(event) {
  console.log(event.key);
  if (event.key === "esc" || event.key === "Escape") {
    popups.forEach(closePopup);
  }
}

//*EVENTO: ABRIR la MODAL  ADD
// openAddButton.addEventListener("click", function () {
//   openPopup(popupAddContainer);
// });

export function handleClickAddCard() {
  openPopup(popupAddContainer);
}

//FUNCIÓN CREAR CARDS (el ttítulo se saca de name)
// export function handleFormAdd(evt) {
//   evt.preventDefault(); //para que no me mande a otra pág.
//   const title = imagePopupTitle.value; //1.TITULO del input : title
//   const addImage = imagePopupImage.value; //2. URL del input : addImage
//   //3.Crear una nueva CARD con la info: URL + ALT + texto
//   const nuevaCard = new Card({ link: addImage, name: title });
//   cardsContainer.prepend(nuevaCard.generateCard()); //4.Agregar la info a la página
//   closePopup(popupAddContainer); //5.Cerrar la modal ADD > cambiando de clase
//   console.log(closePopup(popupAddContainer));
//   evt.target.reset(); //limpiar los inputs del form para que no quede nombres guardados

//   //Deshabilitar el BOTÓN si los inputs están VACÍOS cuando ABRES LA MODAL
//   toggleButtonState(
//     Array.from(evt.target.querySelectorAll(configForm.inputSelector)),
//     evt.target.querySelector(configForm.submitButtonSelector),
//     configForm.inactiveButtonClass
//   );
// }

export function handleFormAdd(event) {
  event.preventDefault();
  const name = imagePopupTitle.value; //1.TITULO del input : title
  const link = imagePopupImage.value; //2. URL del input : addImage
  const nuevaCard = new Card({ name, link }, configCardSelectors.template);
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
