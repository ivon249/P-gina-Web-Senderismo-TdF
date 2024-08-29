function saludar(nameuser) {   
    alert('Hola ' + nameuser +'! Bienvenido/a a Tierra del Fuego'); 
    } 
function procesarEntradaUsuario(callback) { 
let nameuser = prompt("Por favor ingresa tu nombre");
callback(nameuser);
}
procesarEntradaUsuario(saludar);

let ciudades = document.getElementsByClassName("ciudad");
console.log(ciudades[0].innerHTML);
console.log(ciudades[1].innerHTML);
console.log(ciudades[2].innerHTML);

let ciudad = prompt("Dime desde qué ciudad iniciarás el paseo: Rio Grande, Tolhuin o Ushuaia ?")
if (ciudad == "") {
alert("No ingresaste la ciudad de tu elección");} 
else if (ciudad === "Rio Grande"){
document.getElementById("ciudadrg").value = "Rio Grande";
}
else if (ciudad ==="Tolhuin"){
document.getElementById("ciudadth").value = "Tolhuin";
} 
else if (ciudad === "Ushuaia"){
document.getElementById("ciudadus").value = "Ushuaia";
}

let recorrerSenderos =`[
{"id": 1,"nombre": "Sendero Laguna Sofía","dificultad": "Baja","distanciaenkm": 6,"tiempoenhs": 2},
{"id": 2,"nombre": "Sendero Mirador Cabo San Pablo","dificultad": "Baja","distanciaenkm": 4.4,"tiempoenhs" : 2},
{"id": 3,"nombre": "Sendero de la Ruca","dificultad": "Baja","distanciaenkm": 2.4,"tiempoenhs" : 0.5},
{"id": 4,"nombre": "Sendero Laguna Negra","dificultad": "Baja","distanciaenkm": 4,"tiempoenhs" : 2},
{"id": 5,"nombre": "Sendero al Lago Fagnano","dificultad": "Media","distanciaenkm": 12,"tiempoenhs" : 4}
]`;

function agregarSenderoRecorridoPorPrompt(recorrerSenderos){
    let nombre = prompt("Ingrese el sendero de su elección:");
    let dificultad = prompt("Ingrese la dificultad del sendero seleccionado:");
    let tiempoenhs = prompt("Ingrese el tiempo de recorrido:");
    let distanciaenkm = prompt("Ingrese la distancia recorrida:");

    let senderos = JSON.parse(recorrerSenderos);
    console.log(senderos.length);

    let id = senderos.length + 1;

    senderos.push({id: id, nombre: nombre, dificultad: dificultad, tiempoenhs: tiempoenhs, distanciaenkm: distanciaenkm});
    console.log("El sendero fué agregado correctamente")
    console.log("ID: ${id}, Sendero: ${nombre}, Dificultad: ${dificultad}, Tiempo en horas ${tiempoenhs},  Distancia en kilómetros ${distanciaenkm}")

guardarSenderosEnLocalStorage();
mostrarSenderosEnConsola();
}
function mostrarSenderosEnConsola(){
    console.log("Listado de Senderos:");
console.log (senderos);
return JSON.parse(senderos);

//    for(let i = 0; i< senderos.length; i++){
//    console.log("ID: " + senderos[i].id + ", Sendero: " + senderos[i].nombre + ", Dificultad: " + senderos[i].dificultad + ", Tiempo en horas: " + senderos[i].tiempoenhs + ", Distancia en kilómetros: " + senderos[i].distanciaenkm); 
//   }
}

function guardarSenderosEnLocalStorage(){
    localStorage.setItem("senderos",JSON.stringify(senderos));
}

function cargarSenderosDesdeLocalStorage(){
    let senderosGuardados = localStorage.getItem("senderos");
    if(senderosGuardados)
        return JSON.parse(senderosGuardados);
    }
let senderos = cargarSenderosDesdeLocalStorage();
mostrarSenderosEnConsola();

agregarSenderoRecorridoPorPrompt(recorrerSenderos);

function despedir(nameuser){   
    alert("Gracias " + nameuser + " por visitar nuestra página web"); 
    } 
function procesarSalidaUsuario(callback){ 
callback(nameuser);
}
procesarSalidaUsuario(despedir);

localStorage.setItem(nameuser)
console.log("Gracias"+ nameuser +"por aportar a nuestra página")
alert("Gracias"+ nameuser +"por aportar a nuestra página")



