//Crea la clase PopupWithImage como una clase hija de Popup
//cambiar el método padre open() : añadir 1 imagen al popup y el correspondiente atributo de imagen src junto con una leyenda para la imagen.

import Popup from "./Popup.js"


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    //añadir 1 imagen al popup y el atributo de imagen src junto con una leyenda
    open(alt, src) {
        super.open();
        const img = this._popupSelector.querySelector("img"); //selecciono img del popup y pongo la imagen
        img.src = src // le pone el src con el valor de la img
        img.alt = alt // le pone el alt con el valor del texto de la leyenda

        const parrafo = this._popupSelector.querySelector("p");
        parrafo.textContent = alt
    }
}

