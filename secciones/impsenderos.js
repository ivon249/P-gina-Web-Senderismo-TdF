const fs = require('fs');

function importarSenderos() {
    // Leer el archivo JSON
    const data = fs.readFileSync('../bdsenderos.json', 'utf8');
    // Convertir el JSON a un array de objetos
    const senderos = JSON.parse(data);
    // Retornar el array de senderos
    return senderos;
}

// Exportar la función para su uso en otros archivos
module.exports = {
    importarSenderos
};