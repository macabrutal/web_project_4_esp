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
  profileAvatar,
  profilePopup,
  popupAvatar,
  popupDelete,
  avatarEditButton,
  removeButtons
} from "../utils/constants.js";


import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import PopupWithQuestion from "../components/PopupWithQuestion.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"

import UserInfo from "../components/UserInfo.js"

import Api from "../components/Api.js"


//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
// const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID


//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL (a traves de su name)
const popuProfileForm = new PopupWithForm(profilePopup, handleProfileFormSubmit);


//VARIABLE: MOSTRAR URL DE INPUTS EN AVATAR (a traves de su name)
const popupProfileAvatar = new PopupWithForm(popupAvatar, handleAvatarFormSubmit);

//VARIABLE: MODAL PARA ELIMINAR ¿ESTÁS SEGURO?
const popupRemove = new PopupWithQuestion(popupDelete, handleDeleteCard);
  

 

//EVENTO: ABRIR la MODAL AVATAR
avatarEditButton.addEventListener('click', () => {
  popupProfileAvatar.open();
})


 //EVENTO: ABRIR la MODAL EDIT
openEditButton.addEventListener("click", () => {
  popuProfileForm.open()
});


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


// FUNCIÓN: MOSTRAR NOMBRE DE INPUTS EN PERFIL / name: edit-profile
function handleProfileFormSubmit(data) {
  console.log("agrego texto a form edit");
  document.forms['edit-profile'].querySelector('button[type="submit"]').textContent = 'Guardando...'
  api.editProfile(data.name, data.about).then(userData => {
    userInfo.setUserInfo(userData);
  }).finally(() => {
    document.forms['edit-profile'].querySelector('button[type="submit"]').textContent = 'Guardar'
    popuProfileForm.close(); // Al guardar se CIERRA la modal
  })
}

// FUNCIÓN: MOSTRAR NUEVO AVATAR EN PERFIL / name: edit-avatar
function handleAvatarFormSubmit(data) {
  console.log("agrego NUEVO AVATAR");
  document.forms['edit-avatar'].querySelector('button[type="submit"]').textContent = 'Guardando...'
  api.newAvatar(data.avatar).then(userData => {
    userInfo.setUserInfo(userData);
  }).finally(() => {
    document.forms['edit-avatar'].querySelector('button[type="submit"]').textContent = 'Guardar'
    popuProfileForm.close(); // Al guardar se CIERRA la modal
  })
}


const popupImageObject = new PopupWithImage(popupImage);

function handleCardClick(event) {
  //const popup = new PopupWithImage(popupImage);
  popupImageObject.open(this._name, this._link);
}




//llamada a Section
const sectionCard = new Section({
  data: initialCards,
  renderer: (item) => {

    const nuevaCard = new Card(item, configCardSelectors.template, handleCardClick, handleDeleteCard);
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
//https://around.nomoreparties.co/v1/web_es_cohort_02

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "8b2ceff6-74bf-49b9-905f-d5ac7225877b",
    "Content-Type": "application/json"
  }
});

//leer las cards de api y ponerlas en la pagina
api.getInitialCards().then(json => {
  sectionCard.clear();
  sectionCard.setItems(json);
  sectionCard.renderItems();
  console.log('API JSON', json);
})



//Info del usuario (name, about, avatar, _id)
const userInfo = new UserInfo(textTitle, textSubTitle, profileAvatar)

api.getProfileInfo().then(json => {
  console.log('API JSON', json);
  userInfo.setUserInfo({...json, job : json.about});

})

//ANTERIOR: llamada a UserInfo (name, about, avatar _id)
// const userInfo = new UserInfo(textTitle, textSubTitle)
// userInfo.setUserInfo('Jacques Cousteau', 'Explorador');
// console.log("nuevo nombre y Job");



 //EVENTO: ABRIR MODAL PARA ELIMINAR ¿ESTÁS SEGURO?
 removeButtons.addEventListener('click', () => {
  popupRemove.open();
})

// FUNCIÓN: DELETE CARD
function handleDeleteCard(data) {
  if( data._id === getCardId){
    sectionCard.remove();
  } 
  
  console.log("DELETE CARD");
}

  
