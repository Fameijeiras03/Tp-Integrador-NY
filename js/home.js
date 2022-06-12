
//!no sacar este espacio que hay, no se pq si lo sacamos se deja de renderizar todo
let proxy = 'https://api.allorigins.win/raw?url=    '
let endpoint =  'https://api.deezer.com/chart'
let url = proxy+endpoint

let elementos = ''

fetch(url)

        .then(function (response) {
    return response.json()
    //agarro la info en json
})

        .then(function (dataTr) {
             console.log(dataTr);
            let info = dataTr.tracks.data
// Primer article ------ Canciones//
    let etiquetaElementos = document.querySelector('#contenedor')

    for (let i = 0; i < 5; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-cancion.html?id=${info[i].id}"><img class="imgalbum" src=${info[i].album.cover}></a>
       <a href="./detalle-cancion.html?id=${info[i].id}"><p class="tamanofuenteh3">${info[i].title}</p></a>
       <a href="./detalle-artista.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
     
       
        
        </article>
        
        `

    }

// Segundo article ------ Artista//

    etiquetaElementos = document.querySelector('#contenedor2')
    for (let i = 5; i < 10; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-artista.html?id=${info[i].id}"><img class="imgalbum" src=${info[i].artist.picture_small}></a>
       <a href="./detalle-artista.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
        </article> 
        `
    }



// Tercer article ------ album//
    
etiquetaElementos = document.querySelector('#contenedor3')
for (let i = 0; i < 5; i++) {

    etiquetaElementos.innerHTML +=

    `
   <article class="">
   <a href="./detalle-album.html?id=${info[i].id}"><img class="imgalbum" src=${info[i].album.cover}></a>
   <a href=""./detalle-album.html?id=${info[i].id}""><p class="tamanofuenteh3">${info[i].album.title}</p></a>
   <a href="./detalle-artista.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
 
   
    
    </article>
    `

}



})
.catch(function (error) {
    console.log(error);
})  

   




