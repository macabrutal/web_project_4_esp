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
        const img = this._popupSelector.queryselector("img"); //selecciono img del popup y pongo la imagen 
        img.src = src // le pone el src con el valor de la img
        img.alt = alt // le pone el alt con el valor del texto de la leyenda
        console.log("hola PopupWithImage");
       
    Popup(this._popupSelector);
        
    }
}