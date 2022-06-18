
let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');

console.log(id);



let url = ` https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
console.log(url);

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)


        let image = document.querySelector('#imgDetalleCancion')
        let nombreCancion = document.querySelector('#nombreCancionn')
        let nombreArtista = document.querySelector('#texto')
        let nombreDisco = document.querySelector('#nombreAlbum')
       

         image.src = data.album.cover_big
         nombreCancion.innerText = 'Canción:' + ' ' + data.title
         nombreArtista.innerText = 'Artista:' + ' ' + data.artist.name
         nombreDisco.innerText = 'Albúm:'+ ' ' + data.album.title 
         

    })

