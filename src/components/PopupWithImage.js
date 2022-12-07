//Crea la clase PopupWithImage como una clase hija de Popup
//cambiar el método padre open() : añadir 1 imagen al popup y el correspondiente atributo de imagen src junto con una leyenda para la imagen.



// import { from } from "core-js/core/array";
import Popup from "./Popup.js"



export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = this._popupSelector.imagePopupTitle; //1.TITULO del input : title
        this._link = this._popupSelector.imagePopupImage; //2. URL del input : addImage
    }


    //añadir 1 imagen al popup y el atributo de imagen src junto con una leyenda
    open(src, alt) {
        super.open();
        const img = this._popupSelector.queryselector(".image-container__image-popup");   //selecciono img del popup
        img.src = src; // le pone el src con el valor de la img
        img.alt = alt; // le pone el alt con el valor del texto de la leyenda

        // pongo la imagen en el popup
        Popup(this._popupSelector);

    }

}