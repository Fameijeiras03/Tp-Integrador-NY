
let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');

console.log(id);

let proxy = 'https://api.allorigins.win/raw?url='
let endpoint = ` https://api.deezer.com/track/${id}`
let url = proxy+endpoint

console.log(url);

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)


        let image = document.querySelector('#imgDetalleCancion')
        let nombreCancion = document.querySelector('#nombreCancionn')

         image.src = data.album.cover_medium
         nombreCancion.innerText = data.title 
    })

