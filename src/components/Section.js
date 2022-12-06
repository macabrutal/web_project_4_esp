//Contiene 1 objeto con dos propiedades (items y renderer) como el primer parámetro del constructor. 
//El segundo parámetro debe ser un selector de clase CSS en donde vas a agregar los elementos de la tarjeta.
//Almacena un método público que renderiza todos los elementos en la página. La función renderer() renderizará cada elemento en una página.
//Almacena un método público llamado addItem() que toma un elemento del DOM y lo agrega al contenedor.


export default class Section{
    constructor({data, renderer }, containerSelector){
        this._data = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    clear() {
        this._container.innerHTML = "";
      }

    renderItems(){
        this.clear();

        this._data.forEach(item => {
            this._renderer(item); 
        });
    }

    addItem(element){
        this._container.append(element);
    }

   

}

