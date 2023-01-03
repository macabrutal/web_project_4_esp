import Popup from "./Popup.js"

import {
    popupDelete,
    removeButtons
} from "../utils/constants.js"

export default class PopupWithQuestion extends Popup {
    constructor(popupSelector, cardId, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._cardId = cardId;
        this._popupDelete = popupDelete;
        this.removeButtons = removeButtons;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener("submit", () => {
            //evt.preventDefault();
        this._handleFormSubmit(this._cardId);
        })
    }

    close() {
        super.close();
    }
}



