
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id} `


let seccionDetalleAlbum = document.querySelector('#seccionAlbum')
let ulCancionesArtista = document.querySelector('#listaCanciones')
let contenidoDeLista = ' '
console.log(id);


fetch(url) 
.then(function (response) {
    return response.json(); 
})

.then(function(data) {   
   console.log(data);
   
   
   for (let i = 0; i < 1; i++) {

      seccionDetalleAlbum.innerHTML += 
  
      `<article class=" ">
      <h2 class="tamanofuenteh3"> Album: ${data.title}</h2>
      <img class="imgalbum" src="${data.cover_medium}" alt="">
      
      <a href="./detalle-artista.html?id=${data.artist.id}"> <h3 class="tamanofuenteh3">Artista: ${data.artist.name} </h3></a>
     
      <a href="./detallle-genero.html?id=${data.genre_id}"><h3 class="tamanofuenteh3">Genero: ${data.genres.data[i].name} </h3></a>
      
      <h3 class="tamanofuenteh3">Fecha de publicacion: ${data.release_date}</h3>
      
      <h2 class="tamanofuenteh3">Canciones del album:</h2>
      </article>
         
      `
    }
    for (let i = 0; i < 2; i++) {
   
      contenidoDeLista += `<li>${data.tracks.data[i].title}</li> `
       
     }
     ulCancionesArtista.innerHTML += `<li>${data.tracks.data[i].title}</li> ` ;
   
         

})                   

.catch(function(errores) {
  console.log(errores);
})

