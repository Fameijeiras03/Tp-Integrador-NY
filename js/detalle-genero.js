
let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');
let seccionCantantes = document.querySelector('.DetallesArtistasGeneros')

//para buscar el genero mi API tenia un link que trae todos los generos, con / y el id del genero, busca el genero

let proxy = 'https://api.allorigins.win/raw?url='
let endpoint =  `https://api.deezer.com/genre/${id}`
const url = proxy+endpoint;

let endpoint2 = `https://api.deezer.com/genre/${id}/artists`
const url2 = proxy+endpoint2 ;

console.log(url);

//para buscar la informacion, uso fetch
fetch(url)
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data) {   
        console.log(data);

    //quiero capturar el titulo, imagen,etc
    let title = document.querySelector('#h3detalledegenero');
    let image = document.querySelector('#imgdetallegenero')
   

        //para insertarle los valores que obtenga con estas propiedades a estos elementos del dom

        title.innerText = `El genero es: ${data.name}`
        image.src = data.picture      
    })                   

  .catch(function(errores) {
      console.log(errores);
  })

  fetch(url2)
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data) {   
     
  let generoArtista = data.data
  console.log(generoArtista);

  for (let i = 0; i <5; i++) {

    seccionCantantes.innerHTML += ` <article> 
    <div class="dispo-listado divelementos-home"> 
    <h3 class="tamanofuenteh3"> Artista que pertenece a este genero: ${generoArtista[i].name}</h3>
    <img class="imgalbum" src=${generoArtista[i].picture_medium}>
    
    </div> 
    </article>`

     
      
  }
    })                   

  .catch(function(errores) {
      console.log(errores);
  })