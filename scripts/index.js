import Card from "./Card.js";
import {
  cardsContainer,
  configCardSelectors,
  initialCards,
  openAddButton,
  forms,
  configFormSelector,
} from "./constants.js";

import {
  handleKeyPress,
  handleClickAddCard,
  handleFormAdd,
  closePopup,
} from "./utils.js";

import FormValidator from "./FormValidator.js";

// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function openPopup()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", openPopup)

//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
// const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID

//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT
// const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
// const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//** VARIABLES: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
const inputTitle = document.getElementById("profileTitle"); // buscar input de título
const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile

//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL (a traves de su name)
const profileForm = document.forms["edit-profile"]; // buscar el formulario (su ID)

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

//HACE OPERATIVO EL FormValidator
forms.forEach((item) => {
  const newFormValidation = new FormValidator(item, configFormSelector);
  newFormValidation.enableValidation();
});

//ch
export const newFormValidator = function (configForm, formElement) {
  return new FormValidator(configForm, formElement);
};
//ch

//escucha al evento que crear cards
forms[1].addEventListener("submit", handleFormAdd);

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
