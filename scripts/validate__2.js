//VALIDACIONES FORM

const forms = document.querySelectorAll(formSelector);
forms.forEach((form) => setEventListener(form));

function setEventListener(form) {
  form.addEventListener("input", (event) => {
    const target = event.target;
    const name = target.name;
    const texto = form.querySelector(".popup__error_" + name);

    if (!target.validity.valid) {
      texto.textContent = target.validationMessage;
      target.classList.add("selector.inputErrorClass");
    } else {
      texto.textContent = "";
      target.classList.remove("popup__input-popup_error");
    }

    toggleButtonState(form);
  });
}

function toggleButtonState(form) {
  const formsubmit = form.querySelector(".popup__button-popup");

  //si aún no están validados los inputs desabilita el botón enviar
  if (!formValid(form)) {
    formsubmit.disabled = true;
    formsubmit.classList.add(inactiveButtonClass);
  } else {
    formsubmit.disabled = false;
    formsubmit.classList.remove(inactiveButtonClass);
  }
}

//función que valida si todos los inputs están correctos
function formValid(form) {
  const formInputs = Array.from(form.querySelectorAll(".popup__input-popup")); //todos los inputs
  return formInputs.every(function (item) {
    return item.validity.valid;
  });
}
//--FIN VALIDACIONES FORM --------

//Escuchar todos los eventos del form
function setEventListeners(
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass); //comprueba el estado del botón cada vez que haya cambios en algún input

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, buttonElement, inactiveButtonClass); //comprueba el estado del botón cada vez que haya cambios en algún input
    });
  });
}
//La función enableValidation Procesa todo el form con la clase .popup
//Luego forEach itera sobre el array obtenido
// Declara la constante fieldsetList: es 1 array de todos los elementos con la clase popup__fieldset
//Recorre con  forEach() sobre el array de fieldsetList
//llama a la función setEventListeners() y pásale el argumento fieldset
function enableValidation(selector) {
  const formList = Array.from(document.querySelectorAll(selector.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); //Cancela el comportamiento por defecto de cada formulario
    });
    setEventListeners(
      formElement,
      selector.inputSelector,
      selector.submitButtonSelector,
      selector.inactiveButtonClass,
      selector.inputErrorClass,
      selector.errorClass
    );
  });
}

// habilitar la validación llamando a enableValidation(), pasar todas las configuraciones en la llamada
enableValidation({
  formSelector: ".popup",
  inputSelector: ".popup__input-popup",
  submitButtonSelector: ".popup__button-popup",
  inactiveButtonClass: ".popup__button-popup_inactive",
  inputErrorClass: ".popup__input-popup_error",
  errorClass: ".popup__error", //mensaje de errror
});
