//CARD : crea 1 tarjeta con texto y un enlace de imagen

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
    popupImage.querySelector(".image-container__text-image").textContent =
      this._name;
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
  }

  _deleteButton() {
    ///VARIABLE: DELETE BUTTON
    const deleteButton = this._element.querySelector(".card__delete-button");

    deleteButton.closest(".card").remove();
  }
}
