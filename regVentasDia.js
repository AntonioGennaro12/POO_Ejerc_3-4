const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
//
const ventasDia01   =   [   [productos[0], 1, clientes[0]],     // Yerba  x1 a Juan
                            [productos[1], 1, clientes[0]],     // Azucar x1 a Juan
                            [productos[1], 1, clientes[1]]  ];  // Azucar x1 a Pedro

const ventasDia02   =   [   [productos[0], 2, clientes[0]],     // Yerba  x2 a Juan
                            [productos[0], 3, clientes[1]]  ];  // Yerba  x3 a Pedro

const ventasDia03   =   [   [productos[1], 2, clientes[0]],     // Azucar x2 a Juan
                            [productos[0], 2, clientes[1]]  ];  // Yerba  x2 a Pedro

const ventasDia04   =   [   [productos[2], 2, clientes[2]],     // Café   x2 a Carlos
                            [productos[3], 3, clientes[2]],     // Té     x3 a Carlos 
                            [productos[2], 1, clientes[3]]  ];  // Café   x1 a Luis    
                            
const ventasDia05   =   [   [productos[3], 2, clientes[3]],     // Té     x2 a Luis
                            [productos[2], 2, clientes[2]],     // Café   x2 a Carlos 
                            [productos[3], 3, clientes[2]]  ];  // Té     x3 a Carlos 

const ventasDia06   =   [   [productos[2], 1, clientes[3]],     // Café   x1 a Luis
                            [productos[3], 1, clientes[2]],     // Té     x1 a Carlos 
                            [productos[2], 2, clientes[3]]  ];  // Café   x2 a Luis    
                            
// ....
// .... AGREGAR MAS DÍAS o ventas dentro del día

// Puntero a Ventas x día  
const ventasDia  = [ventasDia01, ventasDia02, ventasDia03, 
                    ventasDia04, ventasDia05, ventasDia06 ];
// Agregar en el arreglo, todos los días 
//
module.exports = ventasDia;