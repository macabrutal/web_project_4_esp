// 1. Selecciona el elemento en el DOM :  let element = document.getElementById("elementID"); / let element = document.querySelector(".my-element");
// 2. Función de controlador de eventos, ej: function showClick()
// 3. Agregar 1 detector de eventos. element.addEventListener("click", showClick)

//ABRIR la modal
// let open = document.querySelector(".profile__edit-button");
let open = document.getElementById("open"); //en botón edit
let popupContainer = document.getElementById("popupContainer");
let show = document.querySelector(".show");
let close = document.getElementById("close");

function showClick() {
  console.log("clic en el elemento");

  popupContainer.className = "show";
  console.log(popupContainer.className); //   MOSTRAR la Modal
}

open.addEventListener("click", showClick); //detector de evento open.addEventListener()

//CERRAR la modal
function closeClick() {
  console.log("clic en la X");

  popupContainer.className = "popup-container";
  console.log(popupContainer.className); // CERRAR la  Modal
}
close.addEventListener("click", closeClick); //detector de evento close.addEventListener()

// let save = document.getElementById("save");
