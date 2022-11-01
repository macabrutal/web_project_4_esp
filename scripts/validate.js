const forms = document.querySelectorAll(".popup");
forms.forEach((form) => setEventListener(form));

function setEventListener(form) {
  form.addEventListener("input", (event) => {
    const target = event.target;
    const name = target.name;
    const texto = form.querySelector(".popup__error_" + name);

    if (!target.validity.valid) {
      texto.textContent = target.validationMessage;
      target.classList.add("popup__input-popup_error");
    } else {
      texto.textContent = "";
      target.classList.remove("popup__input-popup_error");
    }

    enableButton(form);
  });
}

function enableButton(form) {
  const formsubmit = form.querySelector(".popup__button-popup");

  //si aún no están validados los inputs desabilita el botón enviar
  if (!formValid(form)) {
    // formsubmit.disabled = true;
    formsubmit.classList.add("popup__button-popup_inactive");
  } else {
    // formsubmit.disabled = false;
    // buttonElement.classList.remove("popup__button-popup_inactive");
    formsubmit.classList.remove("popup__button-popup_inactive");
  }
}

//función que valida si todos los inputs están correctos
function formValid(form) {
  const formInputs = Array.from(form.querySelectorAll(".popup__input-popup")); //todos los inputs
  return formInputs.every(function (item) {
    return item.validity.valid;
  });
}
//--FIN VALIDACIONES FORM --------
