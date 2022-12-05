//Crea PopupWithForm como una clase hija de Popup > ok
//Lleva un callback del envío del formulario al constructor, así como el selector popup.
//Almacena un método privado llamado _getInputValues(), que recopila datos de todos los campos de entrada.
//El método setEventListeners() debe agregar al formulario un controlador de eventos submit y el detector de eventos click para el icono cerrar.
//Modifica el método padre close() para reiniciar el formulario cuando se ha cerrado el popup.

import Popup from "./Popup.js"
import {formSelector, inputSelector } from "../utils/constants.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._formSelector = formSelector;  //".popup" (los forms)
        this._inputSelector = inputSelector; //".popup__input-popup" (los inputs)
        
    }

    //recopila datos de todos los campos de entrada
    _getInputValues() {

    }

    //agregar al formulario un controlador de eventos submit
    //el detector de eventos click para el icono cerrar.
    setEventListeners() {
        super.setEventListeners();
        this._submitCallback(this._formSelector);
    }

    //reiniciar el formulario cuando se ha cerrado el popup.
    close() {
        super.close();
        this._popupSelector.reset();
    }

}