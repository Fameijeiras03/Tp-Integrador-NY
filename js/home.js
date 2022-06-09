let campoBusqueda = document.querySelector('#busqueda')

//todo  aca agarro el from

let formBusqueda = document.querySelector('.ubiform')

formBusqueda.addEventListener('submit',function(e) {

    e.preventDefault()

    if (campoBusqueda.value == "" || campoBusqueda.value.length <=3 ) {
        
        alert('Para realizar la busuqeda debe escribir al menos 3 caracteres')
    }
        else{
            this.submit()   
        }
    
})
