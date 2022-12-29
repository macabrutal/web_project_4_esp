// ID: web_es_cohort_02
// 8b2ceff6-74bf-49b9-905f-d5ac7225877b



export default class Api {
  constructor({
    baseUrl,headers
  }) {
    this._baseUrl = baseUrl;
    this.headers = headers;
    this._authorization = headers.authorization;
  }

  //1.INFO DEL USUARIO
  //GET https://around.nomoreparties.co/v1/groupId/users/me 
  //propiedades: name, about, avatar _id
  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  //2.CARGAR CARDS
  //GET https://around.nomoreparties.co/v1/groupId/cards 
  //propiedades: name y link
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        method: "GET",
        headers: {
          authorization: this._authorization,
        },
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // si el servidor devuelve un error, rechaza el promise
        return Promise.reject(`Error: ${res.status}`);
      });
  }


  //3.EDITAR PERFIL
  //PATCH https://around.nomoreparties.co/v1/groupId/users/me 
  //propiedades, name y about
  //Agrega: "Content-Type": "application/json"
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(res => res.json())
  }

  //4.AÑADIR UNA NUEVA CARD
  //POST https://around.nomoreparties.co/v1/groupId/cards 
  //propiedades:name y link
  //agrega "Content-Type": "application/json"
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(res => res.json())
  }


  //5.MOSTRAR CUÁNTOS LIKES TIENE 1 CARD
  //propiedad: likes




  //7.BORRAR 1 CARD
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId 
  //El cardId en la URL debe ser sustituido por _id de la tarjeta a eliminar. 
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/5d1f0611d321eb4bdcd707dd 

  deleteCard() {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    })
  }

  //8. AÑADIR y ELIMINAR "LIKES"
  // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId 
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId 
  //cardId en la URL debe sustituirse por la propiedad _id de la tarjeta
  //el icono del corazón debería cambiar de color, y el contador de "me gustas" debería aumentar o disminuir respectivamente
  //Para cambiar el número de "me gustas", envía una solicitud al servidor con el método correspondiente

  addCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    })
  }

  deleteCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    })
  }

  //9.Actualizar la foto de perfil
  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar 
  // propiedad, avatar : debe contener un enlace a la nueva foto de perfil

  newAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
      },
      body: JSON.stringify({
        avatar: link
      })
    })
  }


}