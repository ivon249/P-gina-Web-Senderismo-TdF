function saludar(nameuser) {   
    alert('Hola ' + nameuser +'! Bienvenido/a a Tierra del Fuego'); 
    } 
function procesarEntradaUsuario(callback) { 
let nameuser = prompt("Por favor ingresa tu nombre");
callback(nameuser);
}
procesarEntradaUsuario(saludar);

'use strict'  
window.addEventListener('load',function(){  
 console.log("DOM cargado");  
 var formulario=document.querySelector("#formulario");  
 var box_dashed=document.querySelector(".dashed");  
 box_dashed.style.display="none";  
 formulario.addEventListener('submit',function(){  
  console.log("Evento submit capturado");  
  var nombre=document.querySelector('#nombre').value;
  var dificultad=document.querySelector('#dificultad').value;  
  var distanciaenkm=document.querySelector('#distanciaenkm').value;
  var tiempoenhs=document.querySelector('#tiempoenhs').value;

  box_dashed.style.display="block";  
  console.log(nombre, dificultad, distanciaenkm, tiempoenhs);  
  //Método 1  
  var parrafo =document.createElement('p');  
  parrafo.append(nombre+" ");  
  parrafo.append(dificultad+" ");  
  parrafo.append(distanciaenkm);
  parrafo.append(tiempoenhs);  
  box_dashed.append(parrafo);  
 });  
});  
