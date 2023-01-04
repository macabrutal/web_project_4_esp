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
  likeCounter: document.getElementById("countLikes"), //CONTADOR DE LIKES
  //removeButton: ".card__delete-button", //DELETE BUTTON

  //  imagePopupTitle = "#addTitle",  //TITULO IMAGEN
  //  imagePopupImage = "#addImage",  //URL de IMAGEN
};

//VARIABLES PARA LIKES:
export const likeButton = document.querySelector(".card__card-like"); //LIKE BUTTON
export const likeCounter = document.getElementById("countLikes"); //CONTADOR DE LIKES

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

//** VARIABLES: INPUTS del TITULO Y SUBTITULO DEL PERFIL en LA MODAL:
export const inputTitle = document.getElementById("profileTitle"); // buscar input de título
export const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo

//** VARIABLES: TITULO Y SUBTITULO DEL PERFIL
export const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
export const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile

//VARIABLE: MODAL EDIT (por ID)
export const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT

//VARIABLE AVATAR DEL PERFIL
export const profileAvatar = document.querySelector(".profile__avatar");

//VARIABLES: MODAL AVATAR (por ID)
export const popupAvatar = document.getElementById("popupAvatar"); //popup avatar

export const avatarEditButton = document.querySelector('.profile__avatar-edit'); //botón avatar


//VARIABLE: POP UP DELETE CARD
export const popupDelete = document.getElementById("popupDelete");

export const removeButtons = document.querySelectorAll(configCardSelectors.removeButton);




//VARIABLE: TEXTO Y LINK DE LAS CARDS
export const initialCards = [{
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