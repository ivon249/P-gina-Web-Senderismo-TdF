let formulario = document.forms["estadistica"];

formulario.addEventListener("submit", function(event){
    event.preventDefault();
   let inputNombre = document.querySelector("input.name");
   if (inputNombre.value == "" ){
    alert("El campo nombre tiene que estar completo")
   }else if( inputNombre.value.length < 3){
    alert("El campo nombre debe tener al menos 3 caracteres")
   }
   });
   formulario.addEventListener("submit", function(event){
    //Creamos array vacío para luego llenarlo si existen errores
    let errores = []
    //Seleccionamos el input a validar
    let inputNombre = document.querySelector("input.name");
    if (inputNombre.value == "" ){
    //Si el input está vacío, pushear el error al array
     errores.push("El campo nombre tiene que estar completo")
    }else if( inputNombre.value.length < 3){
     errores.push("El campo nombre debe tener al menos 3 caracteres")
    }
    //Si la longitud del array de errores es mayor a 0, no enviar el formulario
    if (errores.length > 0) {
     event.preventDefault();
    }
    //Imprimir el array en el div que creamos anteriormente
    let ulErrores = document.querySelector("div.errores ul");
    for(let i = 0; i < errores.length; i++){
     ulErrores.innerHTML += '<li> ' + errores[i] + '</li>'}
    });