// información sobre el usuario
//En el constructor dos elementos: nombre del usuario, trabajo del usuario.
//Método público getUserInfo():con info sobre el usuario. Este método será útil para cuando es necesario mostrar los datos del usuario en el formulario abierto.
//método público setUserInfo():toma los datos del nuevo usuario y los agrega en la página.

export default class UserInfo {
    constructor(nameUser, jobUser, idUser, avatar) {
        this._nameUser = nameUser; //nombre del usuario
        this._jobUser = jobUser; //trabajo del usuario
        this._idUser = idUser; //id 
        this._avatar = avatar; //avatar
    
    }

    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            about: this._jobUser.textContent,
            // id: this._idUse,
            
        }
    }

    setUserInfo(name, job, avatar) {
        this._nameUser.textContent = name;
        this._jobUser.textContent = job;
        this._avatar.src = avatar;
    
    }

    // setAvatar(data) {
    //     this._avatar.src = data.avatar;
    //   }
}