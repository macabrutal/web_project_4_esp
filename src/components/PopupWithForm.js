//Crea PopupWithForm como una clase hija de Popup > ok
//Lleva un callback del envío del formulario al constructor, así como el selector popup.
//Almacena un método privado llamado _getInputValues(), que recopila datos de todos los campos de entrada.
//El método setEventListeners() debe agregar al formulario un controlador de eventos submit y el detector de eventos click para el icono cerrar.
//Modifica el método padre close() para reiniciar el formulario cuando se ha cerrado el popup.

import Popup from "./Popup.js"
// import {inputSelector} from "../utils/constants.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

        // this._inputList = Array.from(this._formSelector.querySelectorAll(inputSelector));	//Array.from() devuelve 1 [] completo 

    }

    //recopila datos de todos los campos de entrada
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll(inputSelector); // 1.Obtiene los elementos de todos los campos
        this._formValues = {}; // 2.Crea un objeto vacío

        // 3.Agrega los valores de los campos a este objeto
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;		  // 4.Devuelve el objeto values
    }

    //agregar al formulario un controlador de eventos submit
    //el detector de eventos click para el icono cerrar.
    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues())
        })

    }

    //reiniciar el formulario cuando se ha cerrado el popup.
    close() {
        super.close();
        this._popupSelector.querySelector('form').reset();
    }

}