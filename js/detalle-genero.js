//En esta pagina lo que queremos lograr es que al apretar un genero me traiga el detalle de ese genero en particular

let qs = location.search; //capturamos la informacion que viene de la queryString (viene en string)
let qstoObjetoLiteral = new URLSearchParams(qs); //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get("id"); //queremos obtener un valor de la qs, el id

let seccionCantantes = document.querySelector(".DetallesArtistasGeneros");

//para buscar el genero mi API tenia un link que trae todos los generos, con / y el id del genero, busca el genero

//espacio de memoria
const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;
const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

//para buscar la informacion, uso fetch
fetch(url)
  .then(function (response) {
    //callback
    return response.json(); //no hacemos .parse() porque lo cambia automaticamente a tipo de dato que js entiende
  })
  .then(function (data) {
    //informacion ya pasada a tipo de dato que entiende js
    console.log(data);

    //con un document.querySelector especifico donde voy a querer que se renderice la informacion de la API
    let title = document.querySelector("#h3detalledegenero");
    let image = document.querySelector("#imgdetallegenero");

    //para insertarle los valores que obtenga de la api a estos elementos del dom (modelo virtual)
    title.innerText = `El genero es: ${data.name}`; //templeString
    image.src = data.picture_big;
  })

  .catch(function (errores) {
    console.log(errores);
  });

fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let generoArtista = data.data;
    console.log(generoArtista);

    for (let i = 0; i < generoArtista.length; i++) {
      //permite recorrer el array de la infromacion que viene de la api y pasar por cada indice del mismo

      seccionCantantes.innerHTML += ` <article> 
    <div class="dispo-listado divelementos-home">
    <a href="./detalle-artista.html?id=${generoArtista[i].id}"><h3 class="tamanofuenteh3"> ${generoArtista[i].name}</h3></a>
    <a href="./detalle-artista.html?id=${generoArtista[i].id}"><img class="imgalbum" src=${generoArtista[i].picture_big}></a>

    </div> 
    </article>`;
    }
  })

  .catch(function (errores) {
    console.log(errores);
  });
