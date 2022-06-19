let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let artistName = queryStringObjLiteral.get("name");
let id = queryStringObjLiteral.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`;
let seccionDetalleArtista = document.querySelector("#seccionDetalleArtista");
let seccionCancionesArtista = document.querySelector(".listaArtista");

fetch(urlArtistas)
  .then(function (response) {
    console.log(response); //imprime el estado de la promesa (estados de codigo), si el estado de la peticion es 200, que haga algo, sino que muestre el spinner, porque quiere decir que no se cargo
   
    if (response.status === 200) {
        return response.json() ;
} else {
    seccionDetalleArtista.innerHTML +=  
`
    <article>
    <img class="imgalbum" src="./img/spinner.gif"/>
    </article>
    `
}         

    
  })
  .then(function (data) {

    if (data.name) {
        
        //le pongo solo = y no += asi cada vez que escribo algo nuevo se borra el anterior
      seccionDetalleArtista.innerHTML = `
      <article class="articuloDetalleArtista">
          <h1 class="tamanofuenteh1"> El artista es: ${data.name} </h1>
          <img src="${data.picture_medium}" alt="" class="imgalbum" id="imgArtistas">
          <h2 class="tamanofuenteh2">Top 5 Albums</h2>
      </article>
  `;
    } else {
        alert('No hay resultados para tu busqueda')
    }









     
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

        seccionCancionesArtista.innerHTML += contenidoDeLista;
      })

      .catch(function (errores) {
        console.log(errores);
      });
  })
  .catch(function (errores) {
    console.log(errores);
  });

let contenidoDeLista = " ";
