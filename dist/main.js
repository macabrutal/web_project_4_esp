!function(){"use strict";var e=document.querySelector(".cards"),t=document.getElementById("popupAddContainer"),n=document.getElementById("popupImage"),o=(document.querySelectorAll(".popup-container__close-popup"),"#card-template"),r=document.getElementById("addTitle"),i=document.getElementById("addImage"),l=document.getElementById("open-add-button"),a=document.querySelectorAll(".popup"),u={formSelector:".popup",inputSelector:".popup__input-popup",submitButtonSelector:".popup__button-popup",inactiveButtonClass:"popup__button-popup_inactive",inputErrorClass:".popup__input-popup_error",errorClass:".popup__error"},s=Array.from(document.querySelectorAll(".popup-container"));function c(e){e.classList.add("popup-container_show"),document.addEventListener("keydown",d),console.log("abro popup al clik en img")}function p(e){e.classList.remove("popup-container_show"),document.removeEventListener("keydown",p),console.log("cierro la modal ")}function d(e){console.log(e.key),"esc"!==e.key&&"Escape"!==e.key||s.forEach(p)}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key,"string"),"symbol"===m(r)?r:String(r)),o)}var r}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._name=t.name,this._link=t.link,this._openPopup=this.openPopup.bind(this)}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".card__card-title").textContent=this._name,this._element.querySelector(".card__img-card").src=this._link,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__img-card").addEventListener("click",this._openPopup),this._element.querySelector(".card__card-like").addEventListener("click",(function(){e._toggleLikeButton()})),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){e._deleteCard()}))}},{key:"openPopup",value:function(){c(n),n.querySelector(".image-container__image-popup").src=this._link,n.querySelector(".image-container__text-image").textContent=this._name}},{key:"_toggleLikeButton",value:function(){this._element.querySelector(".card__card-like").classList.toggle("card__card-like_active")}},{key:"_deleteCard",value:function(){this._element.querySelector(".card__delete-button").closest(".card").remove()}}])&&_(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key,"string"),"symbol"===y(r)?r:String(r)),o)}var r}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._formSelector=n.formSelector,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._formElement.querySelectorAll(this._inputSelector).forEach((function(){e._formElement.addEventListener("submit",(function(e){e.preventDefault()})),e._setEventListeners()}))}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".popup__error_".concat(e.name));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".popup__error_".concat(e.name));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b=document.getElementById("open-edit-button"),g=document.getElementById("profilePopup"),E=document.getElementById("profileTitle"),S=document.getElementById("profileSubtitle"),k=document.querySelector(".profile__title"),L=document.querySelector(".profile__subtitle"),C=document.forms["edit-profile"];b.addEventListener("click",(function(){console.log("clic en botón edit"),E.value=k.textContent,S.value=L.textContent,c(g)})),[{name:"Valle de Yosemite",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lago Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Montañas Calvas",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Parque Nacional de la Vanoise",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}].forEach((function(t){var n=new f(t,o);e.prepend(n.generateCard())})),l.addEventListener("click",(function(){c(t)})),a.forEach((function(e){new h(e,u).enableValidation()})),a[1].addEventListener("submit",(function(n){n.preventDefault();var l=r.value,a=i.value,u=new f({name:l,link:a},o);e.prepend(u.generateCard()),n.target.reset(),p(t)})),s.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup-container_show")&&(console.log("mousedown fuera de modal"),p(t.target)),t.target.classList.contains("popup-container__close-popup")&&(console.log("cierro mousedown botón X"),p(e))}))})),C.addEventListener("submit",(function(e){e.preventDefault(),console.log("evento"),k.textContent=E.value,L.textContent=S.value,p(g)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQUNxRixHQUNhLElBQUl0QyxFQUFjc0MsRUFBTXBGLEdBQ2hDcUYsa0JBQ3BCLElBVUZ0RixFQUFBQSxHQUFBQSxpQkFBMEIsVUhqQ25CLFNBQXVCc0IsR0FDNUJBLEVBQU1vQyxpQkFDTixJQUFNM0IsRUFBT2xDLEVBQWdCbUYsTUFDdkIvQyxFQUFPbkMsRUFBZ0JrRixNQUN2QkUsRUFBWSxJQUFJekQsRUFDcEIsQ0FDRU0sS0FBQUEsRUFDQUUsS0FBQUEsR0FFRnRDLEdBRUZOLEVBQWU4RixRQUFRRCxFQUFVRSxnQkFDakM5RCxFQUFNaUUsT0FBT0MsUUFDYnJFLEVBQVczQixFQVFiLElBSUVnQixFQUFPZ0IsU0FBUSxTQUFDWixHQUNkQSxFQUFNRyxpQkFBaUIsYUFBYSxTQUFDMEMsR0FDL0JBLEVBQUk4QixPQUFPMUUsVUFBVTRFLFNBQVMsMEJBQ2hDeEUsUUFBUUMsSUFBSSw0QkFDWkMsRUFBV3NDLEVBQUk4QixTQUViOUIsRUFBSThCLE9BQU8xRSxVQUFVNEUsU0FBUyxrQ0FDaEN4RSxRQUFRQyxJQUFJLDRCQUNaQyxFQUFXUCxHQUVmLEdBQ0YsSUdzQkZtRSxFQUFZaEUsaUJBQWlCLFVBWjdCLFNBQWlDTyxHQUMvQkEsRUFBTW9DLGlCQUVOekMsUUFBUUMsSUFBSSxVQUVaMkQsRUFBVXBDLFlBQWNrQyxFQUFXSyxNQUNuQ0YsRUFBYXJDLFlBQWNtQyxFQUFjSSxNQUV6QzdELEVBQVd1RCxFQUNiLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80X2VzcC8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80X2VzcC8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzRfZXNwLy4vc3JjL3NjcmlwdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80X2VzcC8uL3NyYy9zY3JpcHRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNF9lc3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9WQVJJQUJMRSBDQVJEU1xuZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKTsgLy9jb250ZW5lZG9yIGRlIGNhcmRzXG5cbi8vVkFSSUFCTEVTOiBNT0RBTCBBREQgLyBNT0RBTCBJTUFHRU5cbmV4cG9ydCBjb25zdCBwb3B1cEFkZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBBZGRDb250YWluZXJcIik7IC8vYnVzY2FyIG1vZGFsICtcbmV4cG9ydCBjb25zdCBwb3B1cEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3B1cEltYWdlXCIpOyAvL2J1c2NhciBtb2RhbCBwb3B1cEltYWdlIHBvciBJRFxuXG4vL1ZBUklBQkxFOiBTRUxFQ0NJT05PIFRPRE9TIExPUyBCT1RPTkVTIERFIENFUlJBUiBFTiBFTCBET01cbmV4cG9ydCBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICBcIi5wb3B1cC1jb250YWluZXJfX2Nsb3NlLXBvcHVwXCJcbik7XG5cbi8vVkFSSUFCTEUgQ09OIFRPRE9TIExPUyBFTEVNRU5UT1MgREUgTEEgQ0FSRFxuZXhwb3J0IGNvbnN0IGNvbmZpZ0NhcmRTZWxlY3RvcnMgPSB7XG4gIHRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsIC8vVEVNUExBVEUgQ0FSRFxuICBjYXJkU2VsZWN0b3I6IFwiLmNhcmRcIiwgLy9DQVJEXG4gIGltYWdlU2VsZWN0b3I6IFwiLmNhcmRfX2ltZy1jYXJkXCIsIC8vSU1BR0VOIERFIENBUkRcbiAgcG9wdXBJbWFnZVNlbGVjdG9yOiBcIi5pbWFnZS1jb250YWluZXJfX2ltYWdlLXBvcHVwXCIsIC8vSU1BR0VOIERFTCBQT1BVUFxuICBsaWtlQnV0dG9uOiBcIi5jYXJkX19jYXJkLWxpa2VcIiwgLy9MSUtFIEJVVFRPTlxuICByZW1vdmVCdXR0b246IFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIiwgLy9ERUxFVEUgQlVUVE9OXG4gIC8vICBpbWFnZVBvcHVwVGl0bGUgPSBcIiNhZGRUaXRsZVwiLCAgLy9USVRVTE8gSU1BR0VOXG4gIC8vICBpbWFnZVBvcHVwSW1hZ2UgPSBcIiNhZGRJbWFnZVwiLCAgLy9VUkwgZGUgSU1BR0VOXG59O1xuXG4vL1ZBUklBQkxFUyBUSVRVTE8geSBVUkwgZGUgSU1BR0VOXG5leHBvcnQgY29uc3QgaW1hZ2VQb3B1cFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUaXRsZVwiKTtcbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEltYWdlXCIpO1xuXG4vL1ZBUklBQkxFOiBCT1TDk04gQUREICsgKEFCUklSIGxhIE1PREFMIEFDUkVBUiBDQVJEUylcbmV4cG9ydCBjb25zdCBvcGVuQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWFkZC1idXR0b25cIik7IC8vc2VsZWNpb25vIGJvdMOzbiArIGNvbiBJRFxuXG4vL1ZBUklBQkxFOiBUT0RPUyBMT1MgRk9STVNcbmV4cG9ydCBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBcIik7XG5cbi8vVkFSSUFCTEVTOiBERSBMT1MgRUxFTUVOVE9JUyBERSBGT1JNVUxBUklPU1xuZXhwb3J0IGNvbnN0IGNvbmZpZ0Zvcm1TZWxlY3RvciA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cFwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXQtcG9wdXBcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b24tcG9wdXBcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uLXBvcHVwX2luYWN0aXZlXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCIucG9wdXBfX2lucHV0LXBvcHVwX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwiLnBvcHVwX19lcnJvclwiLCAvL21lbnNhamUgZGUgZXJyb3Jcbn07XG5cbi8vVkFSSUFCTEU6IFRFWFRPIFkgTElOSyBERSBMQVMgQ0FSRFNcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbGxlIGRlIFlvc2VtaXRlXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb250YcOxYXMgQ2FsdmFzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGFycXVlIE5hY2lvbmFsIGRlIGxhIFZhbm9pc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcbiIsIi8vVVRJTFM6IGNvbnRyb2xhZG9yZXMgZGUgZXZlbnRvcyB5IGxhIGZ1bmNpw7NuIHF1ZSBhYnJlL2NpZXJyYSBsYXMgdmVudGFuYXMgbW9kYWxlcy5cblxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZC5qc1wiO1xuXG5pbXBvcnQge1xuICBwb3B1cEFkZENvbnRhaW5lcixcbiAgY29uZmlnQ2FyZFNlbGVjdG9ycyxcbiAgaW1hZ2VQb3B1cFRpdGxlLFxuICBpbWFnZVBvcHVwSW1hZ2UsXG4gIGNhcmRzQ29udGFpbmVyLFxufSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuLy9WQVJJQUJMRSBERSBUT0RPUyBMT1MgUE9QVVBTXG5jb25zdCBwb3B1cHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXAtY29udGFpbmVyXCIpKTtcblxuLy8qIEZVTkNJw5NOOiBBQlJJUiAgTU9EQUxcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwLWNvbnRhaW5lcl9zaG93XCIpOyAvL2NhbWJpYXIgQ1NTIGRlIE1PREFMIGNvbiBjbGFzc05hbWUgXCJwb3B1cC1jb250YWluZXJfc2hvd1wiXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGlzRXNjYXBlS2V5KTsgLy9lc2N1Y2hlIGEgQ0VSUkFSIE1PREFMIChMQVMgMylcbiAgY29uc29sZS5sb2coXCJhYnJvIHBvcHVwIGFsIGNsaWsgZW4gaW1nXCIpO1xufVxuXG4vLyBGVU5DScOTTjogQ0VSUkFSIE1PREFMIChMQVMgMylcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cC1jb250YWluZXJfc2hvd1wiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VQb3B1cCk7XG4gIGNvbnNvbGUubG9nKFwiY2llcnJvIGxhIG1vZGFsIFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsb3NlQnV0dG9uKGV2ZW50KSB7XG4gIGNvbnN0IHBvcHVwID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucG9wdXBcIik7XG4gIGNsb3NlUG9wdXAocG9wdXApO1xufVxuXG4vLyBDb250cm9sYWRvciBwYXJhIENFUlJBUiBtb2RhbCBjb24gRVNDXG5leHBvcnQgZnVuY3Rpb24gaXNFc2NhcGVLZXkoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJlc2NcIiB8fCBldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBwb3B1cHMuZm9yRWFjaChjbG9zZVBvcHVwKTtcbiAgfVxufVxuXG4vL0VWRU5UTzogQUJSSVIgbGEgTU9EQUwgQUREXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xpY2tBZGRDYXJkKCkge1xuICBvcGVuUG9wdXAocG9wdXBBZGRDb250YWluZXIpO1xufVxuXG4vL0VWRU5UTzogQ1JFQVIgTlVFVkEgQ0FSRFxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZvcm1BZGQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IGltYWdlUG9wdXBUaXRsZS52YWx1ZTsgLy8xLlRJVFVMTyBkZWwgaW5wdXQgOiB0aXRsZVxuICBjb25zdCBsaW5rID0gaW1hZ2VQb3B1cEltYWdlLnZhbHVlOyAvLzIuIFVSTCBkZWwgaW5wdXQgOiBhZGRJbWFnZVxuICBjb25zdCBudWV2YUNhcmQgPSBuZXcgQ2FyZChcbiAgICB7XG4gICAgICBuYW1lLFxuICAgICAgbGluayxcbiAgICB9LFxuICAgIGNvbmZpZ0NhcmRTZWxlY3RvcnMudGVtcGxhdGVcbiAgKTtcbiAgY2FyZHNDb250YWluZXIucHJlcGVuZChudWV2YUNhcmQuZ2VuZXJhdGVDYXJkKCkpO1xuICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgY2xvc2VQb3B1cChwb3B1cEFkZENvbnRhaW5lcik7IC8vNS5DZXJyYXIgbGEgbW9kYWwgQUREID4gY2FtYmlhbmRvIGRlIGNsYXNlXG5cbiAgLy9EZXNoYWJpbGl0YXIgZWwgQk9Uw5NOIHNpIGxvcyBpbnB1dHMgZXN0w6FuIFZBQ8ONT1MgY3VhbmRvIEFCUkVTIExBIE1PREFMXG4gIC8vIHRvZ2dsZUJ1dHRvblN0YXRlKFxuICAvLyAgIEFycmF5LmZyb20oZXZ0LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZ0Zvcm0uaW5wdXRTZWxlY3RvcikpLFxuICAvLyAgIGV2dC50YXJnZXQucXVlcnlTZWxlY3Rvcihjb25maWdGb3JtLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKSxcbiAgLy8gICBjb25maWdGb3JtLmluYWN0aXZlQnV0dG9uQ2xhc3NcbiAgLy8gKTtcbn1cblxuLy9TRSBDSUVSUkEgTEEgTU9EQUw6IGFsIENsaWMgRlVFUkEgZGUgbGEgTU9EQUwgeSBjb24gQk9Uw5NOIENFUlJBUlxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvcHVwTGlzdGVuZXJzKCkge1xuICBwb3B1cHMuZm9yRWFjaCgocG9wdXApID0+IHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwLWNvbnRhaW5lcl9zaG93XCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2Vkb3duIGZ1ZXJhIGRlIG1vZGFsXCIpOyAvL0NsaWNrIGZ1ZXJhIGRlIG1vZGFsXG4gICAgICAgIGNsb3NlUG9wdXAoZXZ0LnRhcmdldCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cC1jb250YWluZXJfX2Nsb3NlLXBvcHVwXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2llcnJvIG1vdXNlZG93biBib3TDs24gWFwiKTsgLy9DbGljayBlbiBib3TDs24gWFxuICAgICAgICBjbG9zZVBvcHVwKHBvcHVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbiIsIi8vQ0FSRCA6IGNyZWEgMSB0YXJqZXRhIGNvbiB0ZXh0byB5IHVuIGVubGFjZSBkZSBpbWFnZW5cblxuaW1wb3J0IHsgcG9wdXBJbWFnZSB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgb3BlblBvcHVwIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5fb3BlblBvcHVwID0gdGhpcy5vcGVuUG9wdXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTsgLy8gYcOxYWRlIGxvcyBjb250cm9sYWRvcmVzIGRlIGV2ZW50b3NcblxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19jYXJkLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nLWNhcmRcIikuc3JjID0gdGhpcy5fbGluaztcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWctY2FyZFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vcGVuUG9wdXApO1xuXG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY2FyZC1saWtlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlTGlrZUJ1dHRvbigpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fZGVsZXRlQ2FyZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvL2FicmlyIG1vZGFsXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICBvcGVuUG9wdXAocG9wdXBJbWFnZSk7XG4gICAgcG9wdXBJbWFnZS5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLWNvbnRhaW5lcl9faW1hZ2UtcG9wdXBcIikuc3JjID0gdGhpcy5fbGluaztcbiAgICBwb3B1cEltYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2UtY29udGFpbmVyX190ZXh0LWltYWdlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIF90b2dnbGVMaWtlQnV0dG9uKCkge1xuICAgIC8vIFZBUklBQkxFOiBMSUtFIEJVVFRPTlxuICAgIGNvbnN0IGxpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY2FyZC1saWtlXCIpO1xuICAgIGxpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2NhcmQtbGlrZV9hY3RpdmVcIik7IC8vIGVzY3VjaGEgYWwgYm90w7NuIExJS0VcbiAgfVxuXG4gIF9kZWxldGVDYXJkKCkge1xuICAgIC8vL1ZBUklBQkxFOiBERUxFVEUgQlVUVE9OXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIik7XG5cbiAgICBkZWxldGVCdXR0b24uY2xvc2VzdChcIi5jYXJkXCIpLnJlbW92ZSgpO1xuICB9XG59XG4iLCIvLyBWQUxJREFDSU9ORVMgRk9STVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoZm9ybUVsZW1lbnQsIGNvbmZpZ0Zvcm0pIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGNvbmZpZ0Zvcm0uZm9ybVNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWdGb3JtLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWdGb3JtLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWdGb3JtLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnRm9ybS5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZ0Zvcm0uZXJyb3JDbGFzczsgLy9tZW5zYWplIGRlIGVycm9yXG4gIH1cblxuICAvL0Z1bmNpw7NuIGVuYWJsZVZhbGlkYXRpb246IFByb2Nlc2EgdG9kbyBlbCBmb3JtXG4gIC8vTHVlZ28gZm9yRWFjaCBpdGVyYSBzb2JyZSBlbCBhcnJheSBvYnRlbmlkb1xuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1MaXN0ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKTtcblxuICAgIGZvcm1MaXN0LmZvckVhY2goKCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyAvL0NhbmNlbGEgZWwgY29tcG9ydGFtaWVudG8gcG9yIGRlZmVjdG8gZGUgY2FkYSBmb3JtdWxhcmlvXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLzEuTW9zdHJhciBtZW5zYWplIGRlIGVsIGVycm9yXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5wb3B1cF9fZXJyb3JfJHtpbnB1dEVsZW1lbnQubmFtZX1gXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpOyAvL2lucHV0IGNvbiBlcnJvciA+IFJPSk9cbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7IC8vbWVuc2FqZSBkZSBlcnJvciBhY3Rpdm9cbiAgfVxuXG4gIC8vMi4gT2N1bHRhciBtZW5zYWplIGRlIGVycm9yIHNpIGxvcyBkYXRvcyBpbnRyb2R1Y2lkb3Mgc29uIHbDoWxpZG9zOlxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAucG9wdXBfX2Vycm9yXyR7aW5wdXRFbGVtZW50Lm5hbWV9YFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTsgLy9BLkVsaW1pbmFyIGlucHV0IGNvbiBlcnJvciA+IFJPSk9cbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTsgLy8gQi5FbGltaW5hciBsYSBjbGFzZSBkZSBlcnJvciBhY3RpdmEgZGUgZm9ybUVycm9yLlxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICAvL1ZhbGlkYXIgc2kgbm8gZXN0w6EgY29ycmVjdG8gbXVlc3RyYSBtZW5zYWplIGRlIGVycm9yXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9sYSBmdW5jacOzbiBoYXNJbnZhbGlkSW5wdXQgY29tcHJ1ZWJhIGxhIHZhbGlkZXogZGUgbG9zIGNhbXBvcyB5IGRldnVlbHZlwqB0cnVlwqBvwqBmYWxzZVxuICAvL3NvbWUoKSA6IGhhc3RhIHF1ZSBlbmN1ZW50cmUgMSBlbGVtZW50byBkb25kZSBjYWxsYmFjayByZXRvcm5hIHRydWVcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICAvL3RvZ2dsZUJ1dHRvblN0YXRlKCnCoGNhbWJpYSBlbCBlc3RhZG8gZGVsIGJvdMOzbiAoYSBwYXJ0aXIgZGUgbGEgZnVuY2nDs24gaGFzSW52YWxpZElucHV0KVxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vRXNjdWNoYXIgdG9kb3MgbG9zIGV2ZW50b3MgZGVsIGZvcm1cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpOyAvL2NvbXBydWViYSBlbCBlc3RhZG8gZGVsIGJvdMOzbiBjYWRhIHZleiBxdWUgaGF5YSBjYW1iaW9zIGVuIGFsZ8O6biBpbnB1dFxuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpOyAvL2NvbXBydWViYSBlbCBlc3RhZG8gZGVsIGJvdMOzbiBjYWRhIHZleiBxdWUgaGF5YSBjYW1iaW9zIGVuIGFsZ8O6biBpbnB1dFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IENhcmQgZnJvbSBcIi4vc2NyaXB0cy9DYXJkLmpzXCI7XG5pbXBvcnQge1xuICBjYXJkc0NvbnRhaW5lcixcbiAgY29uZmlnQ2FyZFNlbGVjdG9ycyxcbiAgaW5pdGlhbENhcmRzLFxuICBvcGVuQWRkQnV0dG9uLFxuICBmb3JtcyxcbiAgY29uZmlnRm9ybVNlbGVjdG9yLFxufSBmcm9tIFwiLi9zY3JpcHRzL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQge1xuICBoYW5kbGVDbGlja0FkZENhcmQsXG4gIGhhbmRsZUZvcm1BZGQsXG4gIGNsb3NlUG9wdXAsXG4gIG9wZW5Qb3B1cCxcbiAgc2V0UG9wdXBMaXN0ZW5lcnMsXG59IGZyb20gXCIuL3NjcmlwdHMvdXRpbHMuanNcIjtcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5cbi8vIDEuIFNlbGVjY2lvbmEgZWwgZWxlbWVudCBlbiBlbCBET00gOiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudElEXCIpOyAvIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWVsZW1lbnRcIik7XG4vLyAyLiBGdW5jacOzbiBkZSBjb250cm9sYWRvciBkZSBldmVudG9zLCBlajogZnVuY3Rpb24gb3BlblBvcHVwKClcbi8vIDMuIEFncmVnYXIgMSBkZXRlY3RvciBkZSBldmVudG9zLiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wdXApXG5cbi8vVkFSSUFCTEU6IEFCUklSIGxhIE1PREFMIChTRUxFQ0NJT05PIEVMIEJPVMOTTilcbmNvbnN0IG9wZW5FZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLWVkaXQtYnV0dG9uXCIpOyAvL3NlbGVjaW9ubyBib3TDs24gZWRpdCBjb24gSURcbi8vIGNvbnN0IG9wZW5BZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW4tYWRkLWJ1dHRvblwiKTsgLy9zZWxlY2lvbm8gYm90w7NuICsgY29uIElEXG5cbi8vVkFSSUFCTEVTOiBNT0RBTCBFRElULyBNT0RBTCBBREQgLyBNT0RBTCBJTUFHRU5cbmNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVBvcHVwXCIpOyAvL2J1c2NhciBtb2RhbCBFRElUXG4vLyBjb25zdCBwb3B1cEFkZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBBZGRDb250YWluZXJcIik7IC8vYnVzY2FyIG1vZGFsICtcbi8vIGNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwSW1hZ2VcIik7IC8vYnVzY2FyIG1vZGFsIHBvcHVwSW1hZ2UgcG9yIElEXG5cbi8vKiogVkFSSUFCTEVTOiBNT1NUUkFSIFRJVFVMTyBZIFNVQlRJVFVMTyBERUwgUEVSRklMIERFTlRSTyBERSBMT1MgSU5QVVRTIERFIExBIE1PREFMOlxuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVRpdGxlXCIpOyAvLyBidXNjYXIgaW5wdXQgZGUgdMOtdHVsb1xuY29uc3QgaW5wdXRTdWJ0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVN1YnRpdGxlXCIpOyAvL2J1c2NhciBpbnB1dCBkZSBTdWJ0w610dWxvXG5jb25zdCB0ZXh0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpOyAvL2J1c2NhciB0ZXh0byBkZWwgdMOtdHVsbyBlbiBwcm9maWxlXG5jb25zdCB0ZXh0U3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIpOyAvL2J1c2NhciB0ZXh0byBkZWwgU3VidMOtdHVsbyBlbiBwcm9maWxlXG5cbi8vVkFSSUFCTEU6IE1PU1RSQVIgTk9NQlJFIERFIElOUFVUUyBFTiBQRVJGSUwgKGEgdHJhdmVzIGRlIHN1IG5hbWUpXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wiZWRpdC1wcm9maWxlXCJdOyAvLyBidXNjYXIgZWwgZm9ybXVsYXJpbyAoc3UgSUQpXG5cbi8vRVZFTlRPOiBBQlJJUiBsYSBNT0RBTCBFRElUIGNvbiAyIGNvbnRyb2xhZG9yZXMgZW4gdW5vOiBlZGl0YXIgdMOtdHVsbyAvc3VidMOtdHVsbyB5IGFicmlyIG1vZGFsXG5vcGVuRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlZGl0Q2xpY2soKTtcbiAgLy90b2dnbGVCdXR0b25TdGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikpO1xuICBvcGVuUG9wdXAocHJvZmlsZVBvcHVwKTtcbn0pO1xuXG4vL0ZVTkNJw5NOIENBUkdBUiBDQVJEUyBERUwgW10gaW5pdGlhbENhcmRzXG4vLyAxLlJlY29ycmVyIGxhIGluZm8gZGUgY2FyZHMgcXVlIGVzdMOhIGVuIGVsIFtdOmluaXRpYWxDYXJkc1xuLy8gMi4gSW5zdGFuY2lhciBsYSBjbGFzcyBDYXJkIChTZWxlY2Npb25hIGVsIHRlbXBsYXRlKVxuLy8gMy5jcmVhIGxhIGNhcmQgYSBwYXJ0aXIgZGUgZ2VuZXJhdGVDYXJkXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgaW5pdGlhbENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCBudWV2YUNhcmQgPSBuZXcgQ2FyZChjYXJkLCBjb25maWdDYXJkU2VsZWN0b3JzLnRlbXBsYXRlKTsgLy9JbnN0YW5jaWFyIGxhIGNsYXNzIENhcmRcbiAgICBjYXJkc0NvbnRhaW5lci5wcmVwZW5kKG51ZXZhQ2FyZC5nZW5lcmF0ZUNhcmQoKSk7IC8vY3JlYSBsYSBjYXJkIGEgcGFydGlyIGRlIGdlbmVyYXRlQ2FyZFxuICB9KTtcbn1cbnJlbmRlckNhcmRzKCk7IC8vaW52b2NvIGxhIGZ1bmNpw7NuXG5cbi8vRXZlbmV0byBxdWUgYWJyZSBlbCBib3TDs24gZGUgYWdyZWdhciBjYXJkc1xub3BlbkFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tBZGRDYXJkKTtcblxuLy9IQUJJTElUQVIgRUwgRm9ybVZhbGlkYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFsbFZhbGlkYXRpb25zKCkge1xuICBmb3Jtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmV3Rm9ybVZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihpdGVtLCBjb25maWdGb3JtU2VsZWN0b3IpO1xuICAgIG5ld0Zvcm1WYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcbiAgfSk7XG59XG5lbmFibGVBbGxWYWxpZGF0aW9ucygpOyAvL2ludm9jbyBsYSBmdW5jacOzblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdGb3JtVmFsaWRhdGlvbiAoY29uZmlnRm9ybSwgZm9ybUVsZW1lbnQpIHtcbiAgcmV0dXJuIG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ0Zvcm0sIGZvcm1FbGVtZW50KTtcbn07XG5cbi8vZXNjdWNoYSBhbCBldmVudG8gcXVlIGNyZWFyIGNhcmRzXG5mb3Jtc1sxXS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1BZGQpO1xuXG4vL2ludm9jYSBmdW5jacOzbiBRVUUgQ0lFUlJBIExBUyBNT0RBTEVTOiBhbCBDbGljIEZVRVJBIGRlIGxhIE1PREFMIHkgY29uIEJPVMOTTiBDRVJSQVJcbnNldFBvcHVwTGlzdGVuZXJzKCk7XG5cbi8vKiogRlVOQ0nDk046IE1PU1RSQVIgVElUVUxPIFkgU1VCVElUVUxPIERFTCBQRVJGSUwgREVOVFJPIERFIExPUyBJTlBVVFMgREUgTEEgTU9EQUw6XG5mdW5jdGlvbiBlZGl0Q2xpY2soKSB7XG4gIGNvbnNvbGUubG9nKFwiY2xpYyBlbiBib3TDs24gZWRpdFwiKTtcbiAgaW5wdXRUaXRsZS52YWx1ZSA9IHRleHRUaXRsZS50ZXh0Q29udGVudDsgLy92YWxvciBkZWwgdMOtdHVsbyBlcz0gdGV4dG8gdMOtdHVsb1xuICBpbnB1dFN1YnRpdGxlLnZhbHVlID0gdGV4dFN1YlRpdGxlLnRleHRDb250ZW50OyAvL3ZhbG9yIGRlbCBzdWJ0w610dWxvIGVzPSB0ZXh0byBzdWJ0w610dWxvXG59XG5cbi8vKiogRlVOQ0nDk046IE1PU1RSQVIgTk9NQlJFIERFIElOUFVUUyBFTiBQRVJGSUxcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vQ2FuY2VsYSBlbCBjb21wb3J0YW1pZW50byBwb3IgZGVmZWN0byBkZSBjYWRhIGZvcm1cblxuICBjb25zb2xlLmxvZyhcImV2ZW50b1wiKTtcblxuICB0ZXh0VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFRpdGxlLnZhbHVlOyAvL3RleHRvIHTDrXR1bG8gPSB2YWxvciBkZWwgaW5wdXQgdMOtdHVsb1xuICB0ZXh0U3ViVGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFN1YnRpdGxlLnZhbHVlOyAvL3RleHRvIHN1YnTDrXR1bG8gPSBlbCB2YWxvciBkZWwgaW5wdXQgc3VidMOtdHVsb1xuXG4gIGNsb3NlUG9wdXAocHJvZmlsZVBvcHVwKTsgLy8gQWwgZ3VhcmRhciBzZSBDSUVSUkEgbGEgbW9kYWxcbn1cblxuLy8qKiBFVkVOVE86IE1PU1RSQVIgTk9NQlJFIERFIElOUFVUUyBFTiBQRVJGSUxcbnByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQpO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiY2FyZHNDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cEFkZENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicG9wdXBJbWFnZSIsImNvbmZpZ0NhcmRTZWxlY3RvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW1hZ2VQb3B1cFRpdGxlIiwiaW1hZ2VQb3B1cEltYWdlIiwib3BlbkFkZEJ1dHRvbiIsImZvcm1zIiwiY29uZmlnRm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJwb3B1cHMiLCJBcnJheSIsImZyb20iLCJvcGVuUG9wdXAiLCJwb3B1cCIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0VzY2FwZUtleSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZVBvcHVwIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiZm9yRWFjaCIsIkNhcmQiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwidGhpcyIsIl9jYXJkU2VsZWN0b3IiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfb3BlblBvcHVwIiwiYmluZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInRleHRDb250ZW50Iiwic3JjIiwiX3RvZ2dsZUxpa2VCdXR0b24iLCJfZGVsZXRlQ2FyZCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJGb3JtVmFsaWRhdG9yIiwiZm9ybUVsZW1lbnQiLCJjb25maWdGb3JtIiwiX2Zvcm1FbGVtZW50IiwiX2Zvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RWxlbWVudCIsImVycm9yRWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsIl9pbnB1dExpc3QiLCJzb21lIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9idXR0b25FbGVtZW50IiwiZGlzYWJsZWQiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5Iiwib3BlbkVkaXRCdXR0b24iLCJwcm9maWxlUG9wdXAiLCJpbnB1dFRpdGxlIiwiaW5wdXRTdWJ0aXRsZSIsInRleHRUaXRsZSIsInRleHRTdWJUaXRsZSIsInByb2ZpbGVGb3JtIiwidmFsdWUiLCJjYXJkIiwibnVldmFDYXJkIiwicHJlcGVuZCIsImdlbmVyYXRlQ2FyZCIsIml0ZW0iLCJlbmFibGVWYWxpZGF0aW9uIiwidGFyZ2V0IiwicmVzZXQiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=