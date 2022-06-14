// let proxy = 'https://api.allorigins.win/raw?url=    '
// let endpoint =  'https://api.deezer.com/chart'
// let url = proxy+endpoint

// let queryString = location.search;
// let queryStringObjLiteral = new URLSearchParams(queryString)
// let infoCancion = queryStringObjLiteral.get('id')

// let info = url + infoCancion



// fetch(info)
//         .then(function(response) {
//         return response.json()
//         })
//         .then(function(data) {

//                 let image = document.querySelector()
//                 let nombreCancion = document.querySelector()
//                 let nombreArtista = document.querySelector()
//                 let discoCancion = document.querySelector()
//                 let playerCancion = document.querySelector()
//                 let linkPlaylist = document.querySelector()

               

//         console.log(data);

        


        
//         })
//         .catch(function(error) {
//         }) 

/*
let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');

let proxy = 'https://api.allorigins.win/raw?url=    '
let endpoint =  `https://api.deezer.com/chart?${id}`
let url = proxy+endpoint

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    for (let i = 0; i < data.length; i++) {
        if (id== data[i].id){
          document.querySelector('#divcanciones').innerHTML = `<article>${data[i].title}</article>`
        }
    }})
    */