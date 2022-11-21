// VALIDACIONES FORM

export default class FormValidator {
  constructor(formElement, configForm) {
    this._formElement = formElement;
    //this._configForm = configForm;
    this._formSelector = configForm.formSelector;
    this._inputSelector = configForm.inputSelector;
    this._submitButtonSelector = configForm.submitButtonSelector;
    this._inactiveButtonClass = configForm.inactiveButtonClass;
    this._inputErrorClass = configForm.inputErrorClass;
    this._errorClass = configForm.errorClass; //mensaje de error
  }

  enableValidation() {
    const formList = this._formElement.querySelectorAll(this._inputSelector);

    formList.forEach(() => {
      this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault(); //Cancela el comportamiento por defecto de cada formulario
      });
      this._setEventListeners();
    });
  }

  //ch
  // enableValidation() {
  //   const formInputs = this._form.querySelectorAll(
  //     this._configForm.inputSelector
  //   );

  //   formInputs.forEach((item) => {
  //     item.addEventListener("input", (event) => {
  //       if (!event.target.validity.valid) {
  //         this._showErrorMessage(event.target, event.target.validationMessage);
  //       } else {
  //         this._showErrorMessage(event.target, "");
  //       }
  //       this._toggleStateButton(formInputs);
  //     });
  //   });
  //   this._toggleStateButton(formInputs);
  // }
  //

  //1.Mostrar mensaje de el error
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.popup__error_${inputElement.name}`
    );
    inputElement.classList.add(this._inputErrorClass); //input con error > ROJO
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass); //mensaje de error activo
  }

  //2. Ocultar mensaje de error si los datos introducidos son válidos:
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.popup__error_${inputElement.name}`
    );
    inputElement.classList.remove(this._inputErrorClass); //A.Eliminar input con error > ROJO
    errorElement.classList.remove(this._errorClass); // B.Eliminar la clase de error activa de formError.
    errorElement.textContent = "";
  }

  //Validar si no está correcto muestra mensaje de error
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //la función hasInvalidInput comprueba la validez de los campos y devuelve true o false
  //some() : hasta que encuentre 1 elemento donde callback retorna true
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //toggleButtonState() cambia el estado del botón (a partir de la función hasInvalidInput)
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  //Escuchar todos los eventos del form
  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState(); //comprueba el estado del botón cada vez que haya cambios en algún input

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(); //comprueba el estado del botón cada vez que haya cambios en algún input
      });
    });
  }

  //La función enableValidation Procesa todo el form con la clase .popup
  //Luego forEach itera sobre el array obtenido
  // Declara la constante fieldsetList: es 1 array de todos los elementos con la clase popup__fieldset
  //Recorre con  forEach() sobre el array de fieldsetList
  //llama a la función setEventListeners() y pásale el argumento fieldset
}
