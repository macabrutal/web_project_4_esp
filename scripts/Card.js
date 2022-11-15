//VARIABLE FORM DE AGREGAR CARDS (a traves de su name)
const cardForm = document.forms["add-place"]; //Busco el form de imágenes

//VARIABLE BOTÓN ELIMINAR nuevaCard
const deleteButton = document.querySelector("card");

//VARIABLE CARDS
const cardsContainer = document.querySelector(".cards"); //busco contenedor de cards
const templateCard = document
  .getElementById("card-template")
  .content.querySelector(".card"); // <template>

//VARIABLE CARD
// const cardElement = templateCard.querySelector(".card");

//VARIABLE DE TODOS LOS POPUPS
const popups = Array.from(document.querySelectorAll(".popup-container"));

//VARIABLE : CLASE QUE MUESTRA LA MODAL
// const showPopup = document.querySelector(".popup-container_show");

//VARIABLE IMAGEN DEL POPUP
const imagePopupPicture = document.querySelector(
  ".image-container__image-popup"
);

//VARIABLE TEXTO DE LA IMAGEN DEL POPUP
const imagePopuptext = document.querySelector(".image-container__text-image");

//VARIABLES TITULO y URL de IMAGEN
const imagePopupTitle = document.getElementById("addTitle");
const imagePopupImage = document.getElementById("addImage");

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM)
const closeButtons = document.querySelectorAll(".popup-container__close-popup");

//** -------

export default class Card {
  constructor(element) {
    const newCard = templateCard.cloneNode(true); //clorar elementos de initialCards
    const cardImage = newCard.querySelector(".card__img-card"); //elementos de la imagen
    cardImage.src = element.link; //link
    cardImage.alt = element.name; //alt
    newCard.querySelector(".card__card-title").textContent = element.name;

    cardImage.addEventListener("click", (evt) => {
      imagePopupPicture.src = evt.target.src; //SRC
      imagePopupPicture.alt = evt.target.alt; // ALT
      imagePopuptext.textContent = evt.target.alt; // TEXTO
      openPopup(popupImage);
    });

    const likeButton = newCard.querySelector(".card__card-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__card-like_active"); // escucha al botón LIKE
    });

    const deleteButton = newCard.querySelector(".card__delete-button");

    deleteButton.addEventListener("click", () => {
      // escucha al botón ELIMINAR
      deleteButton.closest(".card").remove();
    });

    this._cardContent = newCard;
  }

  //   constructor(cardSelector) {
  //     this._cardSelector = cardSelector;
  //   }

  //   _getTemplate() {
  //     const cardElement = document
  //       .querySelector(this._cardSelector)
  //       .content.querySelector(".card")
  //       .cloneNode(true);

  //     return cardElement;
  //   }

  //   _handleOpenPopup() {
  //     imagePopupPicture.src = this._link;
  //     popups.classList.add("popup-container_show");
  //   }

  //   _handleClosePopup() {
  //     imagePopupPicture.src = this._link;
  //     popups.classList.remove("popup-container_show");
  //   }

  //   _setEventListeners() {
  //     this._element.addEventListener("click", () => {
  //       this._handleOpenPopup();
  //     });

  //     closeButtons.addEventListener("click", () => {
  //       this._handleClosePopup();
  //     });
  //   }
}

// export default class DefaultCard extends Card {
//   constructor(data, cardSelector) {
//     super(cardSelector);
//     this._name = data.name;
//     this._link = data.link;
//   }

//   generateCard() {
//     this._element = super._getTemplate();
//     super._setEventListeners();

//     this._element.querySelector(".card__card-title").textContent = this._name;
//     this._element.querySelector(
//       ".card__img-card"
//     ).style.backgroundImage = `url(${this._link})`;

//     return this._element;
//   }
// }
