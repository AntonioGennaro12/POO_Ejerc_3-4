const Cliente = require("./Cliente.js");
//  AQUÍ SE GENERAN LOS CLIENTES (solamente agregar a continuacíon dentro de los corchetes)
const clientes = [ new Cliente("Juan", 0),
                   new Cliente("Pedro", 0),
                   new Cliente("Carlos", 0),
                   new Cliente("Luis", 0) ];
//
// Definición de los nombres
const Juan      = clientes[0];
const Pedro     = clientes[1];
const Carlos    = clientes[2];
const Luis      = clientes[3];


// Exportación de objetos
module.exports = { clientes, Juan, Pedro, Carlos, Luis };
