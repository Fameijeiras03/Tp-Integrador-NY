
let proxy = 'https://api.allorigins.win/raw?url=' ; 
let endpoint =  'https://api.deezer.com/artist/' ;
let urlArtist = endpoint;


function searchArtist() {
    
    let datoFormulario = document.getElementById('busqueda').value //con el .value toma el dato que escribi en el formulario (para el valor que escribiste ene l formulario)
    let ArtistaBuscar = `${urlArtist}${datoFormulario}` 
    
fetch(ArtistaBuscar)
        .then(function (response) {
    return response.json() ;
   
})
        .then(function (data) {
         
})
.catch(function (error) {
    alert(error);
})

}









