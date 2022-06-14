
    let qs = location.search ;
    let qsToObj = new URLSearchParams(qs);
    let id = qsToObj.get('id');

    let proxy = 'https://api.allorigins.win/raw?url= ' ;
    let endpoint =  'https://api.deezer.com/track/3135556' ;
    let url = proxy+endpoint ;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        
        let SectionCanciones = document.querySelector('#sectionCanciones')

        SectionCanciones.innerHTML += `<article>
        <h3 class="">${data.album.title}</h3>
        
        </article>`

    })