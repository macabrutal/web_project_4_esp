// Array de Tarjetas:
const initialCards = [
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
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

//   _handleOpenPopup() {
//     imagePopupPicture.src = this._link;
//     popups.classList.add("popup-container_show");
//   }

//   _handleClosePopup() {
//     imagePopupPicture.src = this._link;
//     popups.classList.remove("popup-container_show");
//   }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    closeButtons.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}

export default class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._name = data.name;
    this._link = data.link;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__card-title").textContent = this._name;
    this._element.querySelector(
      ".card__img-card"
    ).style.backgroundImage = `url(${this._link})`;

    return this._element;
  }
}
