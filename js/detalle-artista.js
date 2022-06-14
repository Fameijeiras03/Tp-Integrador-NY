//no borrar esto
let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get('id');

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id} `
let urlCancionesDelArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`

fetch(urlArtistas)