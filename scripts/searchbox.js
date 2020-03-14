const searchInput = document.getElementById('search');
const searchList = document.getElementById('searchList');

// todo: fetch data and complete the list
const exampleData = ['12345', '23456', '789123'];

searchInput.onkeyup = function(ev){
    // Si hay un valor
    if(this.value){
        // Muestro la lisat
        searchList.classList.add('ns-search-box__dropdown--visible');
        // Vacio la lista de la busqueda anterior
        searchList.innerHTML = '';
        // Itero los DNIS obtenidos
        // todo: iterar la lista del servidor
        exampleData.forEach(function(item){
            // Creo un nuevo <li> y le asigno todo
            const newElement = document.createElement('li');
            newElement.className = "ns-search-box__item";
            newElement.innerText = item;
            newElement.onclick = function(){
                searchInput.value = this.innerText;
                searchList.classList.remove('ns-search-box__dropdown--visible');
            }
            // Lo agrego a la lista
            searchList.appendChild(newElement);
        });
    }else{
        // Si está vacío lo oculto
        searchList.classList.remove('ns-search-box__dropdown--visible');
    }
}