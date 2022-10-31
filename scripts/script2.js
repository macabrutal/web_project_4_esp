// VALIDACIONES FORM

//.1.Mostrar mensaje de el error
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input-popup_error"); //input con error > ROJO
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error-message_active"); //mensaje de error activo
};

//2. Ocultar mensaje de error si los datos introducidos son válidos:
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input-popup_error"); //A.Eliminar input con error > ROJO
  errorElement.classList.remove("popup__error-message_active"); // B.Eliminar la clase de error activa de formError.
  errorElement.textContent = "";
};

//Validar si no está correcto muestra mensaje de error
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
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
const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button-popup_inactive");
  } else {
    buttonElement.classList.remove("popup__button-popup_inactive");
  }
};

//Escuchar todos los eventos del form
const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__input-popup")
  );
  const buttonElement = formElement.querySelector(".popup__button-popup");
  debugger;
  toggleButtonState(inputList, buttonElement); //comprueba el estado del botón cada vez que haya cambios en algún input

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement); //comprueba el estado del botón cada vez que haya cambios en algún input
    });
  });
};

//La función enableValidation Procesa todo el form con la clase .popup
//Luego forEach itera sobre el array obtenido
// Declara la constante fieldsetList: es 1 array de todos los elementos con la clase popup__fieldset
//Recorre con  forEach() sobre el array de fieldsetList
//llama a la función setEventListeners() y pásale el argumento fieldset
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault(); //Cancela el comportamiento por defecto de cada formulario
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__fieldset")
    );
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset); //escuchar los forms (toma al fieldset como argumento)
    });
  });
};

enableValidation(); //invoco a la función enableValidation

//--FIN VALIDACIONES FORM --------
