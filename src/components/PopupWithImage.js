//Crea la clase PopupWithImage como una clase hija de Popup
//cambiar el método padre open() : añadir 1 imagen al popup y el correspondiente atributo de imagen src junto con una leyenda para la imagen.



import Popup from "./Popup.js"

import {
    imagePopupTitle,
    imagePopupImage
} from "../utils/constants.js"; //VARIABLES TITULO y URL de IMAGEN



export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = this._popupSelector.imagePopupTitle; //1.TITULO del input : title
        this._link = this._popupSelector.imagePopupImage; //2. URL del input : addImage

    }


    //añadir 1 imagen al popup y el atributo de imagen src junto con una leyenda
    open() {
        super.open(image, );
        // this._name = this._popupSelector.imagePopupTitle.value; //1.TITULO del input : title
        // this._link = this._popupSelector.imagePopupImage.value; //2. URL del input : addImage

        this._name.alt = imagePopupImage.alt;
        this._link.src = imagePopupImage.src;
        this._popupCaption.textContent = imagePopupTitle;
    }

}