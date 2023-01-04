import Popup from "./Popup.js"

import {
    popupDelete,
    removeButtons
} from "../utils/constants.js"

export default class    extends Popup {
    constructor(popupSelector, cardId, handleDeleteCard) {
        super(popupSelector);
        this._handleDeleteCard = handleDeleteCard;
        this._cardId = cardId;
        this._popupDelete = popupDelete;
        this.removeButtons = removeButtons;
        
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener("submit", (evt) => {
            evt.preventDefault();
        this._handleFormSubmit(this._cardId);
        })
    }

    close() {
        super.close();
    }
}



