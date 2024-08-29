// Importar el módulo de senderos
const { importarSenderos } = require('./impsenderos');

// Crear un objeto literal que contiene los senderos recorridos
const estadistica = {
    senderos: importarSenderos()
};

// Función para buscar un sendero por su ID (índice en el array)
function buscarSenderoPorId(id) {
    const sendero = estadistica.senderos.filter((sendero, index) => index === id);
    return sendero.length > 0 ? sendero[0] : null;
}

// Función para registrar un sendero por su ID
function registrarSendero(id) {
    const sendero = buscarSenderoPorId(id);
    if (sendero) {
        sendero.Recorrido = true;
        return sendero;
    } else {
        return "Sendero no encontrado";
    }
}

// Función para devolver los senderos que aún no han sido recorridos
function senderosNoRecorridos() {
    return estadistica.senderos.filter(sendero => !sendero.Recorrido);
}

// Función para calcular la suma de las distancias en km recorridos
function totalEstadística() {
    return estadistica.senderos
        .filter(sendero => sendero.Recorrido)
        .reduce((total, sendero) => total + sendero.distanciaenkm, 0);
}
// Aquí puedes hacer pruebas llamando a las funciones
console.log(buscarSenderoPorId(0)); // Debería devolver el sendero con ID 1
console.log(recorrerSendero(0)); // Debería cambiar el estado de recorrido del sendero con ID 1
console.log(senderoNoRecorrido()); // Debería mostrar los senderos que aún no están recorridos
console.log(totalEstadística()); // Debería devolver la suma de los km de los senderos recorridos



// Exportar las funciones para su uso en otros archivos
// module.exports = {
//     buscarSenderoPorId,
//     recorrerSendero,
//     senderoNoRecorrido,
//     totalEstadística
// };