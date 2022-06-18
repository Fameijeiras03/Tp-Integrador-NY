

let proxy = 'https://api.allorigins.win/raw?url=' ; 
let endpoint =  'https://api.deezer.com/artist/' ;
let urlArtist = endpoint;



function searchArtist() {
    
    let sectionResultado = document.querySelector('#resultadoBusquedaSection')

    let datoFormulario = document.querySelector('#busqueda').value //con el .value toma el dato que escribi en el formulario (para el valor que escribiste ene l formulario)
    let ArtistaBuscar = `${urlArtist}${datoFormulario}` 
    
fetch(ArtistaBuscar)
        .then(function (response) {
            console.log(response); //imprime el estado de la promesa (estados de codigo), si el estado de la peticion es 200, que haga algo, sino que muestre el spinner, porque quiere decir que no se cargo
   
            if (response.status === 200) {
                return response.json() ;
    } else {
        sectionResultado.innerHTML +=  
        `
            <article>
            <img class="imgalbum" src="./img/spinner.gif"/>
            </article>
            `
    }         
})
        .then(function (data) {
            console.log(data);

        if (data.name) {
            sectionResultado.innerHTML =      //no le pongo += asi no me va sumando los distintos resultados de busqueda que hago
            `
            <article>
            <h2 class="tamanofuenteh3">Tu resultado de busqueda...</h2>
            <img class="imgalbum" src=${data.picture_medium}>
            <a href="./detalle-artista.html?id=${data.id}"> <h3 class="tamanofuenteh3">${data.name}</h3></a>
            
            </article>
            `
        } else {
            alert('No hay resultados para tu busqueda')
        }
    
})
.catch(function (error) {
    
})

}
/*
function fetchAlbumArtist(artist) {
    let urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'
    fetch(urlAlbum)
}
*/





