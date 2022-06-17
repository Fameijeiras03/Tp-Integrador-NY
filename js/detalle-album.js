
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let proxy = 'https://api.allorigins.win/raw?url=    '
let endpoint =  `https://api.deezer.com/chart/${id}`
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
    
   seccionDetalleAlbum.innerHTML += 

    `<article class=" ">
    <img src="${data.albums.data.album.cover_medium}" alt="imagen" class="imgalbum" >
    
    
</article>

`
})                   

.catch(function(errores) {
  console.log(errores);
})