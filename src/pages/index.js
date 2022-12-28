import "./index.css";

import Card from "../components/Card.js";
import {
  cardsContainer,
  configCardSelectors,
  initialCards,
  openAddButton,
  forms,
  configFormSelector,
  inputTitle,
  inputSubtitle,
  popupAddContainer,
  popupImage,
  textTitle,
  textSubTitle,
  profileAvatar
} from "../utils/constants.js";


import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"

import UserInfo from "../components/UserInfo.js"

import Api from "../components/Api.js"


//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
// const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID

//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT


//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL (a traves de su name)
//const profileForm = document.forms["edit-profile"]; // buscar el formulario (su ID)
const popuProfileForm = new PopupWithForm(profilePopup, handleProfileFormSubmit);

//llamada a UserInfo
const userInfo = new UserInfo(textTitle, textSubTitle)
userInfo.setUserInfo('Jacques Cousteau', 'Explorador');
console.log("nuevo nombre y Job");


//EVENTO: ABRIR la MODAL EDIT 
openEditButton.addEventListener("click", () => {
  popuProfileForm.open()
});


const popupImageObject = new PopupWithImage(popupImage);

function handleCardClick(event) {
  //const popup = new PopupWithImage(popupImage);
  popupImageObject.open(this._name, this._link);
}


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


// FUNCIÓN: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
function editClick() {
  console.log("clic en botón edit");
  inputTitle.value = textTitle.textContent; //valor del título es= texto título
  inputSubtitle.value = textSubTitle.textContent; //valor del subtítulo es= texto subtítulo
}


// FUNCIÓN: MOSTRAR NOMBRE DE INPUTS EN PERFIL
function handleProfileFormSubmit(data) {
  console.log("agrego texto a form edit");
  userInfo.setUserInfo(data.name, data.about);

  popuProfileForm.close(); // Al guardar se CIERRA la modal
}


//llamada a Section
const sectionCard = new Section({
  data: initialCards,
  renderer: (item) => {
    const nuevaCard = new Card(item, configCardSelectors.template, handleCardClick);
    cardsContainer.prepend(nuevaCard.generateCard());

  }
}, cardsContainer);

sectionCard.renderItems();


//Evento: ABRE el BOTÓN de AGREGAR CARDS
openAddButton.addEventListener("click", handleClickAddCard);
const popupAddCardObject = new PopupWithForm(
  popupAddContainer,
  (formValues) => {
    const nuevaCard = new Card({
        name: formValues.title,
        link: formValues.image
      },
      configCardSelectors.template,
      handleCardClick
    );
    cardsContainer.prepend(nuevaCard.generateCard())
  });

// handler que instancia el modal de CREAR CARDS
function handleClickAddCard() {
  popupAddCardObject.open();
}

//API
// ID: web_es_cohort_03
// 8b2ceff6-74bf-49b9-905f-d5ac7225877b

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03",
  headers: {
    authorization: "8b2ceff6-74bf-49b9-905f-d5ac7225877b",
    "Content-Type": "application/json"
  }
});

