//Contiene 1 objeto con dos propiedades (items y renderer) como el primer parámetro del constructor. 
//El segundo parámetro debe ser un selector de clase CSS en donde vas a agregar los elementos de la tarjeta.
//Almacena un método público que renderiza todos los elementos en la página. La función renderer() renderizará cada elemento en una página.
//Almacena un método público llamado addItem() que toma un elemento del DOM y lo agrega al contenedor.


export default class Section{
    constructor({data, renderer }, cardsContainer){
        this._data = data;
        this._renderer = renderer;
        this._cardsContainer= cardsContainer;
    }

    clear() {
        this._cardsContainer.innerHTML = "";
      }

    renderItems(){
        this.clear();

        this._data.forEach(item => {
            this._renderer(item); 
        });
    }

    addItem(element){
        this._cardsContainer.append(element);
    }

   

}

