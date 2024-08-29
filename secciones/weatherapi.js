// "use strict";
// var app = {};
// app.apikey = "6cb73af52acab5d27448d1c281034f27";
// app.url = "http://api.openweathermap.org/data/2.5/weather?q=Ushuaia&APPID=" + app.apikey + "&units=metric";

// app.cargaDatos = function(){
// 	$.ajax({
// 		url: app.url,
// 		success: function( data ) {
// 			app.datos = data;
// 			app.procesaDatos();
// 		},
// 		error: function(){
// 			alert("¡Ups! No puedo obtener información de la API");
// 		}
// 	});
// }
// app.procesaDatos = function(){
// 	app.condicionNombre = app.datos.weather[0].main;
// 	app.temperatura = app.datos.main.temp;

// 	var condicionIcono = app.datos.weather[0].icon;
// 	app.icono = app.obtenIcono( condicionIcono );

// 	app.muestra();

// } 
// app.muestra = function(){
// 	$('#js_w_temp').append("<p class='weather_temperature'>" +  app.temperatura + "º</p>");
// 	$('#js_w_icon').append(" <i class='wi " + app.icono + "'></i>");

// 	$('#js_w_icon').append("<p class='weather_name'>" +  app.condicionNombre.toUpperCase() + "</p>");

// }
// app.obtenIcono = function( weatherIcon ) {

// 	var icon;
// 	switch( weatherIcon ){
// 		case "01d":
// 		case "01n":
// 		icon = "wi-day-sunny";
// 		break;
// 		case "02d":
// 		case "02n":
// 		icon = "wi-day-cloudy";
// 		break;

// 		case "03d":
// 		case "03n":
// 		icon = "wi-cloud";
// 		break;

// 		case "04d":
// 		case "04n":
// 		icon = "wi-cloudy";
// 		break;

// 		case "09d":
// 		case "09n":
// 		icon = "wi-rain";
// 		break;

// 		case "10d":
// 		case "10n":
// 		icon = "wi-day-rain-mix";
// 		break;

// 		case "11d":
// 		case "11n":
// 		icon = "wi-thunderstorm";
// 		break;

// 		case "13d":
// 		case "13n":
// 		icon = "wi-snow";
// 		break;

// 		case "50d":
// 		case "50n":
// 		icon = "wi-fog";
// 		break;

// 		default:
// 		icon = "wi-day-sunny";
// 		break;

// 	}

// 	return icon;
// }
// app.cargaDatos();

const apiKey = "dd23faaa4c56bff3c7f3f6a984b8c20e"; // Sustituye esto por tu clave API real
const city = 'Buenos Aires'; // Sustituye por la ciudad que quieras consultar
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al consultar la API de OpenWeather');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
	// Acceder a los elementos específicos del objeto de datos 
	const windSpeed = data.wind.speed; // Velocidad del viento 
	const humidity = data.main.humidity; // Humedad 
	const tempMin = data.main.temp_min; // Temperatura mínima 
	// Actualizar el innerHTML de la etiqueta div 
	const weatherBlock = document.querySelector('#card'); 
	weatherBlock.innerHTML = `
	<div> 
	<p>Velocidad del viento: ${windSpeed} m/s</p> 
	<p>Humedad: ${humidity}%</p> 
	<p>Temperatura mínima: ${tempMin}°C</p> 
	</div>`
	;
	
  })
  .catch(error => {
    console.error('Error:', error);
  });
