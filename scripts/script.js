// 1. Selecciona el elemento en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

//VARIABLES: TÍTULO / SUBTÍTULO (con ID)
// const profileTitle = document.querySelector(".profile__title"); //buscar Titulo
// const profileSubtitle = document.querySelector(".profile__subtitle"); //buscar subtitulo

//VARIABLE: ABRIR la MODAL
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
const openAddButton = document.getElementById("open-add-button"); //seleciono botón + con ID
//VARIABLES: MODAL EDIT/ MODAL ADD / MODAL IMAGEN
const popupContainer = document.getElementById("popupContainer"); //buscar modal EDIT
const popupAddContainer = document.getElementById("popupAddContainer"); //buscar modal +
const popupImage = document.getElementById("popupImage"); //buscar modal popupImage por ID
//VARIABLE : CLASE QUE MUESTRA LA MODAL
const showPopup = document.querySelector(".show"); //variable con css que muestra modal
//VARIABLE: CERRAR la MODAL
const closePopup = document.getElementById("close");
const closeAddPopup = document.getElementById("closeAddPopup");

//** VARIABLES: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
const inputTitle = document.getElementById("profileTitle"); // buscar input de título
const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile
//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL
const formElement = document.getElementById("form"); // buscar el formulario (su ID)

//VARIABLE CARDS
const cardsContainer = document.querySelector(".cards"); //busco contenedor de cards
const templateCard = document
  .getElementById("card-template")
  .content.querySelector(".card"); // <template>

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

//FUNCIÓN: CREAR CARDS cardsContainer
// La info de cards está en el array: initialCards
initialCards.forEach((elemento) => {
  //1.crear tarjeta
  const nuevaCard = templateCard.cloneNode(true);
  //2.llenar información (imagen + texto)
  nuevaCard.querySelector(".card__img-card").src = elemento.link;
  nuevaCard.querySelector(".card__card-title").textContent = elemento.name;

  //3. agregar esta info al contenedor de card
  cardsContainer.prepend(nuevaCard);
  //cardsContainer.append(nuevaCard);  //para dejarla al final de las cards
});

//FUNCIÓN: ABRIR la MODAL EDIT
function showClick() {
  console.log("clic en el botón EDIR");

  popupContainer.className = "show"; //cambiar CSS de MODAL con className "show"
  console.log(popupContainer.className); //   MOSTRAR la Modal
}

//FUNCIÓN: ABRIR la MODAL ADD
function showClickAdd() {
  console.log("clic en el botón ADD");

  popupAddContainer.className = "show"; //cambiar CSS de MODAL con className "show"
  console.log(popupAddContainer.className); //   MOSTRAR la Modal ADD
}
//** -------

//FUNCIÓN: CERRAR MODAL

function closeClick() {
  console.log("clic en la X");

  popupContainer.className = "popup-container";
  console.log(popupContainer.className); // CERRAR la  Modal EDIT

  popupAddContainer.className = "popup-container";
  console.log(popupAddContainer.className); // CERRAR la  Modal ADD
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

  popupContainer.className = "popup-container"; // Al guardar se CIERRA la modal
}

//** -------

//** FUNCIÓN: AGREGAR CARD
// 1. Selecciona el elemento en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

const element = document.querySelector(".my-element");

//** -------

//EVENTO: ABRIR la MODAL EDIT / ADD
openEditButton.addEventListener("click", showClick); //detector de evento open.addEventListener()
openAddButton.addEventListener("click", showClickAdd); //detector de evento open.addEventListener()

//EVENTO: CERRAR la MODAL EDIT / ADD
closePopup.addEventListener("click", closeClick);
closeAddPopup.addEventListener("click", closeClick);

//** EVENTO: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
openEditButton.addEventListener("click", editClick); //detector de evento open.addEventListener()

//** EVENTO: MOSTRAR NOMBRE DE INPUTS EN PERFIL
formElement.addEventListener("submit", eventoForm);

//** -------
