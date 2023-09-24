// POO Ejercicio 3-4
// Importo las definiciones de clases
const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const { reporteClientes,
        reporteProductos,
        reporteVentasA,
        estadoProductosClientes }= require("./rutinas.js");
//
//  SUPERMERCADO DEVS (Manejo de Stock)
//
/// Presentación de Productos y Clientes registrados...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS Y CLIENTES");
reporteProductos();
reporteClientes();
//
// Ventas PRIMER DÍA
// Ciente1 compra 1Kg de Yerba y 1 Kg de Azucar
// Cliente2 compra 1kg de Azucar
console.log("DÍA '1' Ventas del Día");
productos[0].venderACliente(clientes[0], 1);
productos[1].venderACliente(clientes[0], 1);
productos[1].venderACliente(clientes[1], 1);
//
console.log("Estado al cierre del día 1");
estadoProductosClientes();
/////////////////////////////////
// Dia 2
console.log("DÍA '2' Ventas del Día");
productos[0].venderACliente(clientes[0], 2);
productos[0].venderACliente(clientes[1], 3);
/////
console.log("Estado al cierre del día 2");
estadoProductosClientes();
/////////////
// Dia 3
console.log("DÍA '3' Ventas del Día");
productos[1].venderACliente(clientes[0], 2);
productos[0].venderACliente(clientes[1], 2);
/////
console.log("Estado al cierre del día 3");
estadoProductosClientes();
//
/* Fin */


