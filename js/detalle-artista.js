//no borrar esto
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`
let urlCancionesDelArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`
let seccionDetalleArtista = document.querySelector('#seccionDetalleArtista')
console.log(id);

fetch(urlArtistas)
.then(function (response) {
    return response.json(); 
})
.then(function(data) {   
   console.log(data);
    
    seccionDetalleArtista.innerHTML += 

    `<article class="">
    <h1 class="tamanofuenteh1"> El artista es: ${data.name} </h1>
    <img src="${data.picture_medium}" alt="" class="imgalbum">
    <h2 class="tamanofuenteh2">Top 5 Canciones</h2>
    
</article>

`
})                   

.catch(function(errores) {
  console.log(errores);
})

fetch(urlCancionesDelArtistas)
.then(function (response) {
    return response.json(); 
})
.then(function(data) {   
   console.log(data);
    for (let i = 0; index < 5; i++) {
        
     seccionDetalleArtista.innerHTML += 

    `<article class="">

    <ul class="datos estilo-listas listadetalles">
        <li>${data.data.title}</li>
    </ul>

</article>

`
        
    }


})                   

.catch(function(errores) {
  console.log(errores);
})