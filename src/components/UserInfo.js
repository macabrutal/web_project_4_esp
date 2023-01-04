// información sobre el usuario
//En el constructor dos elementos: nombre del usuario, trabajo del usuario.
//Método público getUserInfo():con info sobre el usuario. Este método será útil para cuando es necesario mostrar los datos del usuario en el formulario abierto.
//método público setUserInfo():toma los datos del nuevo usuario y los agrega en la página.

export default class UserInfo {
    constructor(nameUser, jobUser, avatar) {
        this._nameUser = nameUser; //nombre del usuario
        this._jobUser = jobUser; //trabajo del usuario
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            about: this._jobUser.textContent,
            //id: this._idUse,

        }
    }

    

    setUUserInfo({_id, name, about, avatar}) {
        if(name){
            this._nameUser.textContent = name;
        }
        if(about){
            this._jobUser.textContent = about;
        }
        if(avatar){
            this._avatar.src = avatar;
        }
        if(_id){
            this._idUser = _id;
        }
    }


    // setUserInfo({idUser, name, about, avatar}) {
    //     if(name){
    //         this._nameUser.textContent = name;
    //     }
    //     if(about){
    //         this._jobUser.textContent = about;
    //     }
    //     if(avatar){
    //         this._avatar.src = avatar;
    //     }
    //     if(idUser){
    //         this._idUser = idUser;
    //     }
    // }

   
}
