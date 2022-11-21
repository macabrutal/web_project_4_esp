//VARIABLE CARDS
export const cardsContainer = document.querySelector(".cards"); //contenedor de cards

//VARIABLES: MODAL ADD / MODAL IMAGEN
export const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
export const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM
export const closeButtons = document.querySelectorAll(
  ".popup-container__close-popup"
);

//VARIABLE CON TODOS LOS ELEMENTOS DE LA CARD
export const configCardSelectors = {
  template: "#card-template", //TEMPLATE CARD
  cardSelector: ".card", //CARD
  imageSelector: ".card__img-card", //IMAGEN DE CARD
  popupImageSelector: ".image-container__image-popup", //IMAGEN DEL POPUP
  likeButton: ".card__card-like", //LIKE BUTTON
  removeButton: ".card__delete-button", //DELETE BUTTON
  //  imagePopupTitle = "#addTitle",  //TITULO IMAGEN
  //  imagePopupImage = "#addImage",  //URL de IMAGEN
};

//VARIABLES TITULO y URL de IMAGEN
export const imagePopupTitle = document.getElementById("addTitle");
export const imagePopupImage = document.getElementById("addImage");

//VARIABLE: BOTÓN ADD + (ABRIR la MODAL ACREAR CARDS)
export const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID

//VARIABLE: TODOS LOS FORMS
export const forms = document.querySelectorAll(".popup");

//VARIABLES: DE LOS ELEMENTOIS DE FORMULARIOS
export const configFormSelector = {
  formSelector: ".popup",
  inputSelector: ".popup__input-popup",
  submitButtonSelector: ".popup__button-popup",
  inactiveButtonClass: "popup__button-popup_inactive",
  inputErrorClass: ".popup__input-popup_error",
  errorClass: ".popup__error", //mensaje de error
};

//VARIABLE: TEXTO Y LINK DE LAS CARDS
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//-- TODO LO DEL TEMPLATE CARD
// // VARIABLE: <template> cards
// export const templateCard = document
//   .getElementById("card-template")
//   .content.querySelector(".card");

// //VARIABLE: CARD
// export const cardElement = templateCard.querySelector(".card");

// //VARIABLE: IMAGEN DE CARD
// export const imageSelector = templateCard.querySelector(".card__img-card");

// //VARIABLE: IMAGEN DEL POPUP
// export const imagePopupPicture = document.querySelector(
//   ".image-container__image-popup"
// );

// // VARIABLE: LIKE BUTTON
// export const likeButton = this._element.querySelector(".card__card-like");

// ///VARIABLE: DELETE BUTTON
// export const deleteButton = this._element.querySelector(".card__delete-button");

//--
