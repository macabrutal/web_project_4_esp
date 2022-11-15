// VALIDACIONES FORM

export default class FormValidator {

//1.Mostrar mensaje de el error
const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(
      `.popup__error_${inputElement.name}`
    );
    inputElement.classList.add(inputErrorClass); //input con error > ROJO
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass); //mensaje de error activo
  };
  
  //2. Ocultar mensaje de error si los datos introducidos son válidos:
  const hideInputError = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(
      `.popup__error_${inputElement.name}`
    );
    inputElement.classList.remove(inputErrorClass); //A.Eliminar input con error > ROJO
    errorElement.classList.remove(errorClass); // B.Eliminar la clase de error activa de formError.
    errorElement.textContent = "";
  };
  
  //Validar si no está correcto muestra mensaje de error
  const checkInputValidity = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
      );
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  //la función hasInvalidInput comprueba la validez de los campos y devuelve true o false
  //some() : hasta que encuentre 1 elemento donde callback retorna true
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  //toggleButtonState() cambia el estado del botón (a partir de la función hasInvalidInput)
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };
  
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
  const configForm = {
    formSelector: ".popup",
    inputSelector: ".popup__input-popup",
    submitButtonSelector: ".popup__button-popup",
    inactiveButtonClass: "popup__button-popup_inactive",
    inputErrorClass: ".popup__input-popup_error",
    errorClass: ".popup__error", //mensaje de errror
  };
  
  enableValidation(configForm);
  
  
}
