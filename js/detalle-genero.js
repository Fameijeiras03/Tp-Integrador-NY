
let qs = location.search;
let querytoObjetoLiteral = new URLSearchParams(qs) 

//para obtener la propiedad llamada id
let id = querytoObjetoLiteral.get('id');

//para buscar el genero mi API tenia un link que trae todos los generos, con / y el id del genero, busca el genero

let proxy = 'https://api.allorigins.win/raw?url='
let endpoint =  'https://api.deezer.com/genre'
let url = proxy+endpoint

//para buscar la informacion, uso fetch
fetch(url)
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data) {   
        let info = data.data
    //quiero capturar el titulo, imagen,etc
      let title = document.querySelector('#h3detalledegenero');
      let image = document.querySelector('#imgdetallegenero')
      let detalle = document.querySelector('#parrafodetallegenero')

        //para insertarle los valores que obtenga con estas propiedades a estos elementos del dom

        document.querySelector('#h3detalledegenero').innerText = `Genero: ${info.name} `;
        document.querySelector('#imgdetallegenero').src = info.picture ;
      
    })                   

  .catch(function(errores) {
      console.log(errores);
  })
  


 