//capturamos el valor de id proveniente de la queryString
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
let urlCancionesDelArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums?limit=5`;
//especificamos con el document.querySelector donde vamos a querer que se renderice la informacion de la api
let seccionDetalleArtista = document.querySelector("#seccionDetalleArtista");
let seccionCancionesArtista = document.querySelector(".listaArtista");

console.log(id);

fetch(urlArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); 

    //renderizamos en el html la informacion de la api 
    seccionDetalleArtista.innerHTML += `<article class="articuloDetalleArtista">
    <h2 class="tamanofuenteh2"> El artista es: ${data.name} </h2>
    <div class="divImagen">
    <img src="${data.picture_big}" alt="" class="imgalbum">
    </div>
    <h2 class="tamanofuenteh2">Top 5 Albums</h2>
    
</article>

`;
  })

  .catch(function (errores) {
    console.log(errores);
  });

let contenidoDeLista = " ";

fetch(urlCancionesDelArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 5; i++) {
      contenidoDeLista += ` <a style="color: white;" href="./detalle-album.html?id=${data.data[i].id}"><li>${data.data[i].title}</li></a>`;
    }

    seccionCancionesArtista.innerHTML += contenidoDeLista;
  })

  .catch(function (errores) {
    console.log(errores);
  });
