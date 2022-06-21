// guardar la variable
// uso una variable, let con nombre url para guardar la funete de donde saco la info para el fetch
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart'

let elementos = ''
// con el fetch puedo traerme la info
fetch(url)
//primer metodo del fetch  
        .then(function (response) {
    return response.json()
    //le pido a la funcion que me agarre la info 
})
//tomo los datos del primer metodo then
        .then(function (dataTr) {
            console.log(dataTr);
// nombro estas variables para poder seprar cada parta de la informacion en diferentes grupos
// asi despues busco lo q necesito de cada grupo
            let infoTracks = dataTr.tracks.data

            let infoAlbums = dataTr.albums.data

            let infoArtist = dataTr.artists.data



// Primer article ------ Canciones//
    let etiquetaElementos = document.querySelector('#contenedor')
    // operadores aritmeticos
    //bucle for
    for (let i = 0; i < 5; i++) {
        etiquetaElementos.innerHTML +=
        
// concateno la info con un templeString comenzando con backticks y luego un queryString
        `
    <article class="">
    <a href="./detalle-cancion.html?id=${infoTracks[i].id}"><img class="imgalbum" src=${infoTracks[i].album.cover_medium}></a>
    <a href="./detalle-cancion.html?id=${infoTracks[i].id}"><p class="tamanofuenteh3">${infoTracks[i].title}</p></a>
    <a href="./detalle-artista.html?id=${infoTracks[i].id}"><h3 class="tamanofuenteh3">${infoTracks[i].artist.name}</h3></a>
    
    
        
        </article>
        
        `
    }
    // se repite todo por cada section del html
// Segundo article ------ Artista//
    etiquetaElementos = document.querySelector('#contenedor2')
    for (let i = 0; i < 5; i++) {
        etiquetaElementos.innerHTML +=

        `
    <article class="">
    <a href="./detalle-artista.html?id=${infoArtist[i].id}"><img class="imgalbum" src=${infoArtist[i].picture_medium}></a>
    <a href="./detalle-artista.html?id=${infoArtist[i].id}"><h3 class="tamanofuenteh3">${infoArtist[i].name}</h3></a>
        </article> 
        `
    }
// Tercer article ------ album//
    
etiquetaElementos = document.querySelector('#contenedor3')
for (let i = 0; i < 5; i++) {
    etiquetaElementos.innerHTML +=

    `
<article class="">
<a href="./detalle-album.html?id=${infoAlbums[i].id}"><img class="imgalbum" src=${infoAlbums[i].cover_medium}></a>
<a href="./detalle-album.html?id=${infoAlbums[i].id}"><p class="tamanofuenteh3">${infoAlbums[i].title}</p></a>
<a href="./detalle-artista.html?id=${infoAlbums[i].id}"><h3 class="tamanofuenteh3">${infoAlbums[i].artist.name}</h3></a>


    
    </article>
    `
}
})
.catch(function (error) {
    console.log(error);
})  

// busca el error en el fetch