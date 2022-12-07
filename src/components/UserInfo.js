// información sobre el usuario
//En el constructor dos elementos: nombre del usuario, trabajo del usuario.
//Método público getUserInfo():con info sobre el usuario. Este método será útil para cuando es necesario mostrar los datos del usuario en el formulario abierto.
//método público setUserInfo():toma los datos del nuevo usuario y los agrega en la página.

export default class UserInfo {
    constructor(nameUser, jobUser) {
        this._nameUser = nameUser;    //nombre del usuario
        this._jobUser = jobUser;  //trabajo del usuario
        this._profileForm = document.forms["edit-profile"]; // buscar el formulario (su ID)
    }

    getUserInfo() {
        this._nameUser.textContent = inputTitle.value; //valor del título es = texto título
        this._jobUser.textContent = inputSubtitle.value; //valor del subtítulo es = texto subtítulo
    }

    setUserInfo() {
        this._profileForm.addEventListener("submit", getUserInfo());
    }

}
