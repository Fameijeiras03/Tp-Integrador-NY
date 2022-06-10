

let proxy = 'https://api.allorigins.win/raw?url='
let endpoint =  'https://api.deezer.com/chart'
let url = proxy+endpoint

let elementos = ''

fetch(url).then(function (response) {
    return response.json()
    //agarro la info en json
})
.then(function (dataTr) {
    console.log(dataTr);
    let info = dataTr.tracks.data
    
    let etiquetaElementos = document.querySelector('#contenedor')

    for (let i = 0; i < 5; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-album.html"><img class="imgalbum" src=${info[i].album.cover}></a>
       <a href="./detalle-artista.html"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
       <a href="./detallecancion.html"> <p class="tamanofuenteh3">${info[i].title}</p></a>
       
        
        </article>
        
        `
    }
    etiquetaElementos = document.querySelector('#contenedor2')
    for (let i = 5; i < 10; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-album.html"><img class="imgalbum" src=${info[i].album.cover}></a>
       <a href="./detalle-artista.html"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
       <a href="./detallecancion.html"> <p class="tamanofuenteh3">${info[i].title}</p></a>
        </article>
        
        `
    }
    /*etiquetaElementos = document.querySelector('#contenedor3')
    for (let i = 10; i < 15; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
        <img class="imgalbum" src=${info[i].album.cover}>
        <h3 class="tamanofuenteh3">${info[i].title}</h3>
        </article>
        
        `
    }*/
})
.catch(function (error) {
    console.log(error);
})






/* <a href="./detallecancion.html" class="aimg">
                    <img src="./img/timelezz.jpeg" alt="logo" class="imgalbum">
                </a>
                <h3 class="tamanofuenteh3">
                    Dilema
                </h3>
                <p class="tamanofuentetexto">
                    <a href="./detalle-artista.html" class="estiloa">Jhay Cortez</a>
                </p> */

