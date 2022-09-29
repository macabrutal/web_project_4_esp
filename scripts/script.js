// 1. Selecciona el elemento en el DOM :  const element = document.getElementById("elementID"); / const element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

//VARIABLES: TÍTULO / SUBTÍTULO (con ID)
// const profileTitle = document.querySelector(".profile__title"); //buscar Titulo
// const profileSubtitle = document.querySelector(".profile__subtitle"); //buscar subtitulo

//VARIABLE: ABRIR la MODAL
const openEditButton = document.getElementById("open-edit-button"); //seleciono botón edit con ID
//VARIABLES: MODAL / CLASE QUE MUESTRA LA MODAL
const popupContainer = document.getElementById("popupContainer"); //buscar modal
const showPopup = document.querySelector(".show"); //variable con css que muestra modal
//VARIABLE: CERRAR la MODAL
const closePopup = document.getElementById("close");

//** VARIABLES: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
const inputTitle = document.getElementById("profileTitle"); // buscar input de título
const inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
const textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
const textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile
//VARIABLE: MOSTRAR NOMBRE DE INPUTS EN PERFIL
const formElement = document.getElementById("form"); // buscar el formulario (su ID)

//FUNCIÓN: ABRIR la MODAL
function showClick() {
  console.log("clic en el elemento");

  popupContainer.className = "show"; //cambiar CSS de MODAL con className "show"
  console.log(popupContainer.className); //   MOSTRAR la Modal
}

//** -------

//FUNCIÓN: CERRAR MODAL

function closeClick() {
  console.log("clic en la X");

  popupContainer.className = "popup-container";
  console.log(popupContainer.className); // CERRAR la  Modal
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

//EVENTO: ABRIR la MODAL
openEditButton.addEventListener("click", showClick); //detector de evento open.addEventListener()

//EVENTO: CERRAR la MODAL
closePopup.addEventListener("click", closeClick);

//** EVENTO: MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:
openEditButton.addEventListener("click", editClick); //detector de evento open.addEventListener()

//** EVENTO: MOSTRAR NOMBRE DE INPUTS EN PERFIL
formElement.addEventListener("submit", eventoForm);
