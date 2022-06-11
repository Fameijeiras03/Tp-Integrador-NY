/*
let query = location.search;
let querytoObjetoLiteral = new URLSearchParams(query) 

//para obtener la propiedad llamada id
let id = querytoObjetoLiteral.get('id');

//para buscar el genero mi API tenia un link que trae todos los generos, con / y el id del genero, busca el genero

const url = `https://api.deezer.com/genre/${id}`

//para buscar la informacion, uso fetch
fetch(url)
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data) {    
      let h3 = document.querySelector('.tamanofuenteh3')
      h3.innerText = `El nombre del genero es: ${data.name}`;
        
    })                   

  .catch(function(errores) {
      console.log(errores);
  })
  */