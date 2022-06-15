//no borrar esto
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`
let urlCancionesDelArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`
let seccionDetalleArtista = document.querySelector('#seccionDetalleArtista')


fetch(urlArtistas)
.then(function (response) {
    return response.json(); 
})
.then(function(data) {   
   console.log(data);
    
   seccionDetalleArtista.innerHTML += `<article>
        <h1 class="tamanofuenteh1"> El artista es: ${data.name}</h1>
        <img src="" alt="${data.album.cover}" class="imgalbum">
        <h2 class="tamanofuenteh2">Top 5 Canciones</h2>
        <ul class="datos estilo-listas listadetalles">
            <li>Nombre: </li>
        </ul>

    </article>
    
    `
    

})                   

.catch(function(errores) {
  console.log(errores);
})
