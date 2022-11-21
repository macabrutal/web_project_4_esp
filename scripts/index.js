import Card from "./Card.js";
import {
  cardsContainer,
  configCardSelectors,
  initialCards,
  openAddButton,
  forms,
  //configFormSelector,
} from "./constants.js";

import { handleKeyPress, handleClickAddCard, handleFormAdd } from "./utils.js";

import FormValidator from "./FormValidator.js";

// form = new FormValidator(configForm);
// form.enableValidation(configForm());

// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function openPopup()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", openPopup)

//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
// const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM)
// const closeButtons = document.querySelectorAll(".popup-container__close-popup");

//VARIABLE : CLASE QUE MUESTRA LA MODAL
const showPopup = document.querySelector(".popup-container_show"); //variable con css que muestra modal

//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT
const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//BORRAR: VARIABLE: CERRAR la MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profileCloseButton = document.getElementById("close");
const closeAddPopup = document.getElementById("closeAddPopup");
const closeImagePopup = document.getElementById("closeImagePopup");

//** VARIABLES: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
const inputTitle = document.getElementById("profileTitle"); // buscar input de título
const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile

//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL (a traves de su name)
const profileForm = document.forms["edit-profile"]; // buscar el formulario (su ID)

// -- CARDS

//VARIABLE FORM DE AGREGAR CARDS (a traves de su name)
const cardForm = document.forms["add-place"]; //Busco el form de imágenes

//VARIABLE BOTÓN ELIMINAR nuevaCard
// const deleteButton = document.querySelector("card");

//VARIABLE CARDS
// const cardsContainer = document.querySelector(".cards"); //busco contenedor de cards

// <template> cards
// const templateCard = document
//   .getElementById("card-template")
//   .content.querySelector(".card");

//VARIABLE CARD
// const cardElement = templateCard.querySelector(".card");

// -- FIN CARDS

//VARIABLE IMAGEN DEL POPUP
// const imagePopupPicture = document.querySelector(
//   ".image-container__image-popup"
// );

//VARIABLE TEXTO DE LA IMAGEN DEL POPUP
// const imagePopuptext = document.querySelector(".image-container__text-image");

//VARIABLES TITULO y URL de IMAGEN
// const imagePopupTitle = document.getElementById("addTitle");
// const imagePopupImage = document.getElementById("addImage");

//VARIABLE DE TODOS LOS POPUPS
// const popups = Array.from(document.querySelectorAll(".popup-container"));

//-------

//* FUNCIÓN: ABRIR  MODAL
function openPopup(popup) {
  popup.classList.add("popup-container_show"); //cambiar CSS de MODAL con className "popup-container_show"
  document.addEventListener("keydown", handleKeyPress);
}

//-------

//EVENTO: ABRIR la MODAL EDIT con 2 controladores en uno: editar título /subtítulo y abrir modal
openEditButton.addEventListener("click", function () {
  editClick();
  //toggleButtonState(document.getElementById("form"));
  openPopup(profilePopup);
});

//** -------

//FUNCIÓN CARGAR CARDS DEL [] initialCards
// 1.Recorrer la info de cards que está en el []:initialCards
// 2. Instanciar la class Card (Selecciona el template)
// 3.crea la card a partir de generateCard

initialCards.forEach((card) => {
  const nuevaCard = new Card(card, configCardSelectors.template); //Instanciar la class Card
  cardsContainer.prepend(nuevaCard.generateCard()); //crea la card a partir de generateCard
});

openAddButton.addEventListener("click", handleClickAddCard);

// forms.forEach((item) => {
//   const newFormValidation = new FormValidator(item, configFormSelector);
//   newFormValidation.enableValidation();
// });

//ch
export const newFormValidator = function (configForm, formElement) {
  return new FormValidator(configForm, formElement);
};
//ch

//escucha al evento que crear cards
forms[1].addEventListener("submit", handleFormAdd);

// closeButtons.forEach((item) => {
//   item.addEventListener("click", handleCloseButton);
// });

//** -------

//** FUNCIÓN: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
function editClick() {
  console.log("clic en botón edit");
  inputTitle.value = textTitle.textContent; //valor del título es= texto título
  inputSubtitle.value = textSubTitle.textContent; //valor del subtítulo es= texto subtítulo
}

//** -------

//** FUNCIÓN: MOSTRAR NOMBRE DE INPUTS EN PERFIL
function handleProfileFormSubmit(event) {
  event.preventDefault(); //Cancela el comportamiento por defecto de cada form

  console.log("evento");

  textTitle.textContent = inputTitle.value; //texto título = valor del input título
  textSubTitle.textContent = inputSubtitle.value; //texto subtítulo = el valor del input subtítulo

  closePopup(profilePopup); // Al guardar se CIERRA la modal
}

//** -------

//** EVENTO: MOSTRAR NOMBRE DE INPUTS EN PERFIL
profileForm.addEventListener("submit", handleProfileFormSubmit);

//--
