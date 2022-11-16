import Card from "./Card.js";
import Utils from "./utils.js";
import FormValidator from "./FormValidator.js";

// form = new FormValidator(configForm);
// form.enableValidation(configForm());

// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function openPopup()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", openPopup)

//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID

//VARIABLE: SELECCIONO TODOS LOS BOTONES DE CERRAR EN EL DOM)
const closeButtons = document.querySelectorAll(".popup-container__close-popup");

//VARIABLE : CLASE QUE MUESTRA LA MODAL
const showPopup = document.querySelector(".popup-container_show"); //variable con css que muestra modal

//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT
const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID

//BORRAR: VARIABLE: CERRAR la MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profileCloseButton = document.getElementById("close");
const closeAddPopup = document.getElementById("closeAddPopup");
const closeImagePopup = document.getElementById("closeImagePopup");

//** VARIABLES: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
const inputTitle = document.getElementById("profileTitle"); // buscar input de título
const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile

//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL (a traves de su name)
const profileForm = document.forms["edit-profile"]; // buscar el formulario (su ID)

// -- CARDS

//VARIABLE FORM DE AGREGAR CARDS (a traves de su name)
const cardForm = document.forms["add-place"]; //Busco el form de imágenes

//VARIABLE BOTÓN ELIMINAR nuevaCard
// const deleteButton = document.querySelector("card");

//VARIABLE CARDS
const cardsContainer = document.querySelector(".cards"); //busco contenedor de cards
const templateCard = document
  .getElementById("card-template")
  .content.querySelector(".card"); // <template>

//VARIABLE CARD
const cardElement = templateCard.querySelector(".card");

// -- FIN CARDS

//VARIABLE IMAGEN DEL POPUP
const imagePopupPicture = document.querySelector(
  ".image-container__image-popup"
);

//VARIABLE TEXTO DE LA IMAGEN DEL POPUP
const imagePopuptext = document.querySelector(".image-container__text-image");

//VARIABLES TITULO y URL de IMAGEN
const imagePopupTitle = document.getElementById("addTitle");
const imagePopupImage = document.getElementById("addImage");

//VARIABLE DE TODOS LOS POPUPS
const popups = Array.from(document.querySelectorAll(".popup-container"));

//-------

//* FUNCIÓN: ABRIR  MODAL
function openPopup(popup) {
  popup.classList.add("popup-container_show"); //cambiar CSS de MODAL con className "popup-container_show"
  document.addEventListener("keydown", handleKeyPress);
}

//-------

// FUNCIÓN: CERRAR MODAL (LAS 3)
function closePopup(popup) {
  popup.classList.remove("popup-container_show");
  document.removeEventListener("keydown", handleKeyPress);
}

// Controlador para CERRAR modal con ESC
function handleKeyPress(event) {
  console.log(event.key);
  if (event.key === "esc" || event.key === "Escape") {
    popups.forEach(closePopup);
  }
}

//SE CIERRA LA MODAL: al Clic FUERA de la MODAL y con BOTÓN CERRAR

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup-container_show")) {
      console.log("mousedown fuera de modal"); //Click fuera de modal
      closePopup(evt.target);
    }
    if (evt.target.classList.contains("popup-container__close-popup")) {
      console.log("mousedown botón X"); //Click en botón X
      closePopup(popup);
    }
  });
});

//--

//EVENTO: ABRIR la MODAL EDIT con 2 controladores en uno: editar título /subtítulo y abrir modal
openEditButton.addEventListener("click", function () {
  editClick();
  //toggleButtonState(document.getElementById("form"));
  openPopup(profilePopup);
});

//*EVENTO: ABRIR la MODAL  ADD
openAddButton.addEventListener("click", function () {
  openPopup(popupAddContainer);
});

//** -------

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
//** -------

//FUNCIÓN AGREGAR CARDS
// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function createCard()
// 3. Agregar 1 detector de eventos. createCard.addEventListener("click", handleImgClick)

// La info de cards está en el array: initialCards
initialCards.forEach((element) => {
  //1.crear tarjeta
  const nuevaCard = new Card(element);
  //3. agregar esta info al contenedor de card
  cardsContainer.prepend(nuevaCard._cardContent);
});

//FUNCIÓN CREAR CARDS

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault(); //para que no me mande a otra pág.
  //1.TITULO del input : title
  const title = imagePopupTitle.value;
  //2. URL del input : addImage
  const addImage = imagePopupImage.value;
  //4.clono la info de del array de initialCards  en el template
  const nuevaCard = createCard({
    link: addImage,
    name: title,
  });
  //3.Crear una nueva CARD con la info: URL + ALT + texto
  //4.Agregar la info a la página
  cardsContainer.prepend(nuevaCard);

  //5.Cerrar la modal ADD > cambiando de clase
  closePopup(popupAddContainer);
  console.log(closePopup(popupAddContainer));

  //limpiar los inputs del form para que no quede nombres guardados
  evt.target.reset();

  //Deshabilitar el BOTÓN si los inputs están VACÍOS cuando ABRES LA MODAL
  toggleButtonState(
    Array.from(evt.target.querySelectorAll(configForm.inputSelector)),
    evt.target.querySelector(configForm.submitButtonSelector),
    configForm.inactiveButtonClass
  );
});

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
