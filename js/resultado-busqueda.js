
let sectionResultado = document.querySelector('#resultadoBusquedaSection')
let qs = location.search;
let qsToObj = new URLSearchParams(qs);
let nombre = qsToObj.get('name')

const urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?name=${nombre}`

fetch(urlArtista)
.then(function(response) {
    console.log(response); 
    
})
.then(function(data) {
    console.log(data);
    
   
})