// 1. Selecciona el elemento en el DOM :  let element = document.getElementById("elementID"); / let element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

//ABRIR la modal
// let open = document.querySelector(".profile__edit-button"); //en botón edit con CSS
let open = document.getElementById("open"); //seleciono botón edit con ID
let popupContainer = document.getElementById("popupContainer");
let show = document.querySelector(".show");
let close = document.getElementById("close");

let profileTitle = document.querySelector(".profile__title"); //buscar Titulo
let profileSubtitle = document.querySelector(".profile__subtitle"); //buscar subtitulo

function showClick() {
  console.log("clic en el elemento");

  popupContainer.className = "show";
  console.log(popupContainer.className); //   MOSTRAR la Modal
}

open.addEventListener("click", showClick); //detector de evento open.addEventListener()
close.addEventListener("click", closeClick);
//** -------

//CERRAR la modal

function closeClick() {
  console.log("clic en la X");

  popupContainer.className = "popup-container";
  console.log(popupContainer.className); // CERRAR la  Modal
}
//** -------

//** MOSTRAR TITULO Y SUBTITULO DEL PERFIL DENTRO DE LOS INPUTS DE LA MODAL:

let inputTitle = document.getElementById("profileTitle"); // buscar input de título
let inputSubtitle = document.getElementById("profileSubtitle"); //buscar input de Subtítulo
let textTitle = document.querySelector(".profile__title"); //buscar texto del título en profile
let textSubTitle = document.querySelector(".profile__subtitle"); //buscar texto del Subtítulo en profile

function editClick() {
  console.log("clic en botón edit");
  inputTitle.value = textTitle.textContent; //valor del título es= texto título
  inputSubtitle.value = textSubTitle.textContent; //valor del subtítulo es= texto subtítulo
}

open.addEventListener("click", editClick); //detector de evento open.addEventListener()
//** -------

//** MOSTRAR NOMBRE DE INPUTS EN PERFIL

let form = document.getElementById("form"); // buscar el formulario (su ID)

function eventoForm(event) {
  event.preventDefault();

  console.log("evento");

  textTitle.textContent = inputTitle.value; //texto título = valor del input título
  textSubTitle.textContent = inputSubtitle.value; //texto subtítulo = el valor del input subtítulo

  popupContainer.className = "popup-container"; // Al guardar se CIERRA la modal
}

form.addEventListener("submit", eventoForm);

//** -------

// let save = document.getElementById("save");
