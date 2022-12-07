import "./index.css";

import Card from "../components/Card.js";
import {
  cardsContainer,
  configCardSelectors,
  initialCards,
  openAddButton,
  forms,
  configFormSelector,
} from "../utils/constants.js";

import {
  handleClickAddCard,
  handleFormAdd,
  closePopup,
  openPopup,
  setPopupListeners,
} from "../utils/utils.js";


import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"

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

//EVENTO: ABRIR la MODAL EDIT con 2 controladores en uno: editar título /subtítulo y abrir modal
openEditButton.addEventListener("click", () => {
  editClick();
  //toggleButtonState(document.getElementById("form"));
  openPopup(profilePopup);
});

//FUNCIÓN CARGAR CARDS DEL [] initialCards
// 1.Recorrer la info de cards que está en el []:initialCards
// 2. Instanciar la class Card (Selecciona el template)
// 3.crea la card a partir de generateCard

export function renderCards() {
  initialCards.forEach((card) => {
    const nuevaCard = new Card(card, configCardSelectors.template); //Instanciar la class Card
    cardsContainer.prepend(nuevaCard.generateCard()); //crea la card a partir de generateCard
  });
}
renderCards(); //invoco la función

//Eveneto que abre el botón de agregar cards
openAddButton.addEventListener("click", handleClickAddCard);

//HABILITAR EL FormValidator
export function enableAllValidations() {
  forms.forEach((item) => {
    const newFormValidation = new FormValidator(item, configFormSelector);
    newFormValidation.enableValidation();
  });
}
enableAllValidations(); //invoco la función


export function newFormValidation(configForm, formElement) {
  return new FormValidator(configForm, formElement);
};

//escucha al evento que crear cards
forms[1].addEventListener("submit", handleFormAdd);

//invoca función QUE CIERRA LAS MODALES: al Clic FUERA de la MODAL y con BOTÓN CERRAR
setPopupListeners();

//** FUNCIÓN: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
function editClick() {
  console.log("clic en botón edit");
  inputTitle.value = textTitle.textContent; //valor del título es= texto título
  inputSubtitle.value = textSubTitle.textContent; //valor del subtítulo es= texto subtítulo
}

//** FUNCIÓN: MOSTRAR NOMBRE DE INPUTS EN PERFIL
function handleProfileFormSubmit(event) {
  event.preventDefault(); //Cancela el comportamiento por defecto de cada form

  console.log("evento");

  textTitle.textContent = inputTitle.value; //texto título = valor del input título
  textSubTitle.textContent = inputSubtitle.value; //texto subtítulo = el valor del input subtítulo

  closePopup(profilePopup); // Al guardar se CIERRA la modal
}

//** EVENTO: MOSTRAR NOMBRE DE INPUTS EN PERFIL
profileForm.addEventListener("submit", handleProfileFormSubmit);


//llamada a Section
const sectionCard = new Section({
  data: initialCards,
  renderer: (item) => {
    const nuevaCard = new Card(item, configCardSelectors.template);
    cardsContainer.prepend(nuevaCard.generateCard());

  }
}, cardsContainer);

sectionCard.renderItems();

//llamada a PopupWithForm:

// const handleFormSubmit = (formSelector) => {
//   const name = imagePopupTitle.value; //1.TITULO del input : title
//   const link = imagePopupImage.value; //2. URL del input : addImage
// }

const popupForm = new PopupWithForm(
  configCardSelectors.template,
  (name, link) => {
    return new Card({
      name,
      link
    }, configCardSelectors.template);
  });

cardsContainer.prepend(nuevaCard.generateCard());

popupForm.close()



//llamada a Popup de imagen y de formulario de cards
const popupImage = new PopupWithImage(popupSelector);

popupImage.open();

popupImage.setEventListeners();
