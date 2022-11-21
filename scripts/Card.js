//CARD : crea 1 tarjeta con texto y un enlace de imagen

//import { handleOpenPopup, handleClosePopup } from "./utils.js";

import { popupImage } from "./constants.js";
import { openPopup } from "./utils.js";

//** -------

export default class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._openPopup = this.openPopup.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._setEventListeners; //cargo los eventos

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); // añade los controladores de eventos

    this._element.querySelector(".card__card-title").textContent = this._name;
    this._element.querySelector(".card__img-card").src = this._link;
    // this._element.querySelector(
    //   ".card__img-card"
    // ).style.backgroundImage = `url(${this._link})`;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__img-card")
      .addEventListener("click", this._openPopup);

    // this._element.addEventListener("click", () => {
    //   console.log("clic en modal imagen");
    //   this._handleOpenPopup();
    // });

    this._element
      .querySelector(".card__card-like")
      .addEventListener("click", () => {
        console.log("like <3");
        this._likeButton();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        console.log("clic en botón eliminar");
        this._deleteButton();
      });
  }

  //abrir modal
  openPopup() {
    openPopup(popupImage);
    popupImage.querySelector(".image-container__image-popup").src = this._link;
  }

  // _handleOpenPopup() {
  //   handleOpenPopup(popupImage);
  //   imagePopupPicture.src = this._link;
  // }

  _handleClosePopup() {
    handleClosePopup(this._link);
  }

  _likeButton() {
    // VARIABLE: LIKE BUTTON
    const likeButton = this._element.querySelector(".card__card-like");

    likeButton.classList.toggle("card__card-like_active"); // escucha al botón LIKE

    // likeButton.addEventListener("click", () => {
    //   likeButton.classList.toggle("card__card-like_active"); // escucha al botón LIKE
    // });
  }

  _deleteButton() {
    ///VARIABLE: DELETE BUTTON
    const deleteButton = this._element.querySelector(".card__delete-button");

    deleteButton.closest(".card").remove();

    // deleteButton.addEventListener("click", () => {
    //   // escucha al botón ELIMINAR
    //   deleteButton.closest(".card").remove();
    // });
  }
}

//-- código crear card ANTIGUO

// constructor(element) {
//     const newCard = templateCard.cloneNode(true); //clorar elementos de initialCards
//     const cardImage = newCard.querySelector(".card__img-card"); //elementos de la imagen
//     cardImage.src = element.link; //link
//     cardImage.alt = element.name; //alt
//     newCard.querySelector(".card__card-title").textContent = element.name;

//     cardImage.addEventListener("click", (evt) => {
//       imagePopupPicture.src = evt.target.src; //SRC
//       imagePopupPicture.alt = evt.target.alt; // ALT
//       imagePopuptext.textContent = evt.target.alt; // TEXTO
//       openPopup(popupImage);
//     });

//     const likeButton = newCard.querySelector(".card__card-like");

//     likeButton.addEventListener("click", () => {
//       likeButton.classList.toggle("card__card-like_active"); // escucha al botón LIKE
//     });

//     const deleteButton = newCard.querySelector(".card__delete-button");

//     deleteButton.addEventListener("click", () => {
//       // escucha al botón ELIMINAR
//       deleteButton.closest(".card").remove();
//     });

//     this._cardContent = newCard;
//   }
