//1.Header y footer: el campo no debe estar vacio
function validateForm() {
    let resultadoBusqueda = document.forms["myForm"]["fname"].value;
    if (resultadoBusqueda == "" ) {
      alert("El campo esta vacío. Debe rellenar el campo");
      return false;
    }
  }