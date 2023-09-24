const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");

const ventasDia01   =   [   [productos[0], 1, clientes[0]],     // Yerba  x1 a Juan
                            [productos[1], 1, clientes[0]],     // Azucar x1 a Juan
                            [productos[1], 1, clientes[1]]  ];  // Azucar x1 a Pedro

const ventasDia02   =   [   [productos[0], 2, clientes[0]],     // Yerba  x2 a Juan
                            [productos[0], 3, clientes[1]]  ];  // Yerba  x3 a Pedro

const ventasDia03   =   [   [productos[1], 2, clientes[0]],     // Azucar x2 a Juan
                            [productos[0], 2, clientes[1]]  ];  // Yerba  x2 a Pedro

// .... AGREGAR MAS DÍAS o ventas dentro del día

// Puntero a Ventas x día  
const ventasDia  = [ventasDia01, ventasDia02, ventasDia03];
// Agregar en el arreglo, todos los días 

module.exports = ventasDia;