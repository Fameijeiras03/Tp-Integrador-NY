
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let proxy = 'https://api.allorigins.win/raw?url=    '
let endpoint =  `https://api.deezer.com/album/${id}`
let url = proxy+endpoint

let seccionDetalleAlbum = document.querySelector('#seccionAlbum')

console.log(id);
console.log(endpoint);

fetch(url) 
.then(function (response) {
    return response.json(); 
})

.then(function(data) {   
   console.log(data);
    let canciones = " "
   for (let i = 0; i < data.tracks.data.length; i++) {
    canciones +=  
    `<article class=" ">
       <li> ${data.tracks.data[i].title} </li>

    </article> `
   }
   seccionDetalleAlbum.innerHTML += 
   `<article class=" ">
   <h3 class="tamanofuenteh3">${data.title}</h3>
   <img class="imgalbum" src="${data.cover}" alt="">
   <h2 class="tamanofuenteh3">Artista:</h2>
   <h3 class="tamanofuenteh3">${data.artist.name}</h3>
   <h2 class="tamanofuenteh3">Genero:</h2>
   <h3 class="tamanofuenteh3">${data.genres.data[i].name}</h3>
   <h2 class="tamanofuenteh3">Fecha de publicacion:</h2>
   <h3 class="tamanofuenteh3">${data.release_date}</h3>
   <h2 class="tamanofuenteh3">Canciones del album:</h2>
   <ul> ${canciones} </ul>
</article> `
    

})                   

.catch(function(errores) {
  console.log(errores);
})