const { clientes, Juan, Pedro, Carlos, Luis } = require("./defClientes.js");
const productos = require("./defProductos.js");
//
const ventasDia01   =   [   [productos[0], 1, Juan],     // Yerba  x1 a Juan
                            [productos[3], 1, Carlos],   // Té     x1 a Carlos                             
                            [productos[1], 1, Luis]  ];  // Azucar x1 a Luis

const ventasDia02   =   [   [productos[0], 2, Pedro],    // Yerba  x2 a Pedro
                            [productos[2], 1, Luis]  ];  // Café   x1 a Luis   

const ventasDia03   =   [   [productos[1], 2, Juan],     // Azucar x2 a Juan
                            [productos[3], 3, Pedro]  ]; // Té     x3 a Pedro 

const ventasDia04   =   [   [productos[2], 2, Carlos],   // Café   x2 a Carlos
                            [productos[3], 3, Luis],     // Té     x3 a Luis 
                            [productos[0], 3, Carlos]  ]; // Yerba  x3 a Carlos
                             
const ventasDia05   =   [   [productos[3], 2, Juan],     // Té     x2 a Juan
                            [productos[2], 2, Pedro],    // Café   x2 a Pedro 
                            [productos[0], 2, Luis]  ];  // Yerba  x2 a Luis

const ventasDia06   =   [   [productos[2], 1, Luis],     // Café   x1 a Luis
                            [productos[1], 1, Juan],     // Azucar x1 a Juan
                            [productos[2], 2, Carlos]  ]; // Café   x2 a Carlos    
                            
// ....
// .... AGREGAR MAS DÍAS o ventas dentro del día

// Puntero a Ventas x día  
const ventasDia  = [ventasDia01, ventasDia02, ventasDia03, 
                    ventasDia04, ventasDia05, ventasDia06 ];
// Agregar en el arreglo, todos los días 
//
module.exports = ventasDia;