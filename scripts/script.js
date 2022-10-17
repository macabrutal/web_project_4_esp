// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

//VARIABLES: TÍTULO / SUBTÍTULO (con ID)
// const profileTitle = document.querySelector(".profile__title"); //buscar Titulo
// const profileSubtitle = document.querySelector(".profile__subtitle"); //buscar subtitulo

//VARIABLE: ABRIR la MODAL (SELECCIONO EL BOTÓN)
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID
//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const profilePopup = document.getElementById("profilePopup"); //buscar modal EDIT
const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID
//VARIABLE : CLASE QUE MUESTRA LA MODAL
const showPopup = document.querySelector(".popup-container_show"); //variable con css que muestra modal
//VARIABLE: CERRAR la MODAL EDIT/ MODAL ADD / MODAL IMAGEN
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

//VARIABLE FORM DE AGREGAR CARDS (a traves de su name)
const cardForm = document.forms["add-place"]; //Busco el form de imágenes

//VARIABLE BOTÓN ELIMINARnuevaCard
const deleteButton = document.querySelector("card");

//VARIABLE CARDS
const cardsContainer = document.querySelector(".cards"); //busco contenedor de cards
const templateCard = document
  .getElementById("card-template")
  .content.querySelector(".card"); // <template>

//VARIABLE CARD
const cardElement = templateCard.querySelector(".card");

//VARIABLES TITULO y URL de IMAGEN
const nombreLugarInput = document.getElementById("addTitle");
const imgLugarInput = document.getElementById("addImage");

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
function createCard(element) {
  const createCard = templateCard.cloneNode(true); //clorar elementos de initialCards
  const cardImage = createCard.querySelector(".card__img-card"); //elementos de la imagen
  cardImage.src = element.link; //link
  cardImage.alt = element.name; //alt
  createCard.querySelector(".card__card-title").textContent = element.name;
  return createCard;
}

// La info de cards está en el array: initialCards
initialCards.forEach((element) => {
  //1.crear tarjeta
  const nuevaCard = createCard(element);
  //3. agregar esta info al contenedor de card
  cardsContainer.prepend(nuevaCard);
});

//FUNCIÓN CREAR CARDS
cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault(); //para que no me mande a otra pág.
  //1.TITULO del input : title
  const title = nombreLugarInput.value;
  //2. URL del input : addImage
  const addImage = imgLugarInput.value;
  //4.clono la info de del array de initialCards  en el template
  const nuevaCard = createCard({ link: addImage, name: title });
  //3.Crear una nueva CARD con la info: URL + ALT + texto
  //4.Agregar la info a la página
  cardsContainer.prepend(nuevaCard);

  //5.Cerrar la modal ADD > cambiando de clase
  popupAddContainer.className = "popup-container";
  console.log(popupAddContainer.className);

  //limpiar los inputs pfel form ara que no quede nombres guardados
  evt.target.reset();
});

//FUNCIÓN con MANEJADOR DE EVENTO: PARA ABRIR MODAL DE IMAGEN
//1.Creo 1 función handler que controle el evento al hacer clicken la imagen
// target de event contendrá el element IMG sobre el que he pulsado
function handleImgClick(evt) {
  //esta es la imagen
  if (evt.target.tagName === "IMG") {
    console.log("Click en imagen");

    //2.Poner la imagen en la modal con id popupImage / agregarle su ruta con src = evt.target.src
    popupImage.querySelector(".image-container__image-popup").src =
      evt.target.src; // css image
    popupImage.querySelector(".image-container__image-popup").alt =
      evt.target.alt; //ALT
    popupImage.querySelector(".image-container__text-image").textContent =
      evt.target.alt; // css TITLE

    //3.Mostrar modal de imagen (usar clase popup-container_show )
    popupImage.className = "popup-container_show"; //cambiar CSS de MODAL con className "popup-container_show"
    console.log("handleImgClick");
  }

  //BORRAR UNA CARD: target de event contendrá el element BUTTON sobre el que quiero hacer click:
  if (evt.target.tagName === "BUTTON") {
    if (evt.target.classList.contains("card__delete-button")) {
      console.log("Click en botón eliminar");
      evt.target.closest(".card").remove();
    }

    //BOTÓN LIKE
    if (evt.target.classList.contains("card__card-like")) {
      console.log("Click en botón LIKE");
      evt.target.classList.toggle("card__card-like_active");
    }
  }
}

cardsContainer.addEventListener("click", handleImgClick); //al click activa la función handle que controla el evento

//FUNCIÓN: ABRIR la MODAL EDIT
function showClick() {
  console.log("clic en el botón EDIR");

  profilePopup.className = "popup-container_show"; //cambiar CSS de MODAL con className "popup-container_show"
  console.log(profilePopup.className); //   MOSTRAR la Modal
}

//FUNCIÓN: ABRIR la MODAL ADD
function showClickAdd() {
  console.log("clic en el botón ADD");

  popupAddContainer.className = "popup-container_show"; //cambiar CSS de MODAL con className "popup-container_show"
  console.log(popupAddContainer.className); //   MOSTRAR la Modal ADD
}
//** -------

//FUNCIÓN: CERRAR MODAL

function closeClick() {
  console.log("clic en la X");

  profilePopup.className = "popup-container";
  console.log(profilePopup.className); // CERRAR la  Modal EDIT

  popupAddContainer.className = "popup-container";
  console.log(popupAddContainer.className); // CERRAR la  Modal ADD

  popupImage.className = "popup-container";
  console.log(popupImage.className); // CERRAR la  Modal IMAGE
}
//** -------

//** FUNCIÓN: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:

function editClick() {
  console.log("clic en botón edit");
  inputTitle.value = textTitle.textContent; //valor del título es= texto título
  inputSubtitle.value = textSubTitle.textContent; //valor del subtítulo es= texto subtítulo
}

//** -------

//** FUNCIÓN: MOSTRAR NOMBRE DE INPUTS EN PERFIL

function eventoForm(event) {
  event.preventDefault();

  console.log("evento");

  textTitle.textContent = inputTitle.value; //texto título = valor del input título
  textSubTitle.textContent = inputSubtitle.value; //texto subtítulo = el valor del input subtítulo

  profilePopup.className = "popup-container"; // Al guardar se CIERRA la modal
}

//** -------

//** FUNCIÓN: AGREGAR CARD
// 1. Selecciona el element en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

const element = document.querySelector(".my-element");

//** -------

//EVENTO: ABRIR la MODAL EDIT / ADD
openEditButton.addEventListener("click", showClick); //detector de evento open.addEventListener()
openAddButton.addEventListener("click", showClickAdd); //detector de evento open.addEventListener()

//EVENTO: CERRAR la MODAL EDIT / ADD
profileCloseButton.addEventListener("click", closeClick);
closeAddPopup.addEventListener("click", closeClick);
closeImagePopup.addEventListener("click", closeClick);

//** EVENTO: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
openEditButton.addEventListener("click", editClick); //detector de evento open.addEventListener()

//** EVENTO: MOSTRAR NOMBRE DE INPUTS EN PERFIL
profileForm.addEventListener("submit", eventoForm);

//** -------
