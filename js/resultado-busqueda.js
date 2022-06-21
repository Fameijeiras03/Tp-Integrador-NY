let queryString = location.search; //capturamos la informacion que viene de la queryString (viene en string)
let queryStringObjLiteral = new URLSearchParams(queryString); //para convertir una querystring a un objeto literal
let artistName = queryStringObjLiteral.get("name"); //queremos obtener un valor de la qs, el name
let id = queryStringObjLiteral.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`; //especificamos ruta de endpoint de nuestra API
let urlGenero = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;



let seccionDetalleArtista = document.querySelector("#seccionDetalleArtista"); //especificamos donde vamos a querer que se renderice la info de la API
let seccionAlbumesArtista = document.querySelector(".listaArtista");


//uso este endpoint para que me traiga de la api el nombre del artista
fetch(urlArtistas)
  .then(function (response) {
    console.log(response); //imprime el estado de la promesa (codigos de estado)
    //cada vez que el servidor recibe un request, emite un código que indica de forma abreviada el estado de la respuesta HTTP

    // estructura del lenguaje que refleja una pregunta y define qué código se ejecutará de acuerdo a la respuesta obtenida

    if (response.status === 200) {
      //si el estado de la peticion es 200, que devuelva la respuesta en json (porque quiere decir que esta OK)
      return response.json();
    } else {
      seccionDetalleArtista.innerHTML +=
        //sino que muestre el spinner, porque quiere decir que no se cargo 
        //(en principio siempre se cargaba y por eso no se veia el spinner, pero cuando dejo de andar el proxy y no cargaba la informacion, se veia el spinnner)
        `
    <article>
    <img class="imgalbum" src="./img/spinner.gif"/>    
    </article>
    `;
    }
  })
  .then(function (data) {
    //hago un if y pido una condicion: si data.name es true (es decir, existe el nombre que se esta escribiendo), que se ejecute todo lo posterior
    if (data.name) {
      //le pongo solo = y no += asi cada vez que escribo algo nuevo se borra el anterior
      seccionDetalleArtista.innerHTML = `
      <article class="articuloDetalleArtista">
      <a href="./detalle-artista.html?id=${data.id}"><h1 class="tamanofuenteh1"> El artista es: ${data.name} </h1></a>
       
          <div class="divImagen">
          <img src="${data.picture_big}" alt="" class="imgalbum">
          </div>
          <h2 class="tamanofuenteh2">Top 5 Albums</h2>
      </article>
  `;
    } else {
      //pero si no existe ese nombre, que se ejecute un alert que diga que no hay resultados para tu busqueda
      seccionDetalleArtista.innerHTML = `
        <article class="articuloDetalleArtista">
        <h1 class="tamanofuenteh1"> No hay resultados para tu busqueda </h1>
        </article>
    `;
    }

    //uso este endpoint para que me traiga los 5 albumes del artista
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${data.id}/albums?limit=5`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (let i = 0; i < 5; i++) {
          contenidoDeLista += `<li>${data.data[i].title}</li>`;
        }

        seccionAlbumesArtista.innerHTML += contenidoDeLista;
      })

      .catch(function (errores) {
        console.log(errores);
      });



      
  })
  .catch(function (errores) {
    console.log(errores);
  });

let contenidoDeLista = " ";

