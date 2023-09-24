// POO Ejercicio 3-4
// Importo las definiciones de clases
const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const { reporteClientes,
        reporteProductos,
        reporteVentasA,
        estadoProductosClientes }= require("./rutinas.js");
//
//// Funciones locales
/**
 * Consulta estado de Productos y Clientes
 */
//function estadoProductosClientes() {
//    clientes[0].montoGastado();
//    clientes[1].montoGastado();
// Estado de Stock 
//    productos[0].cuantoStockTienes();
//    productos[1].cuantoStockTienes();
// Reporte de Ventas
//    productos[0].reporteDeVentas();
//    productos[1].reporteDeVentas();
//}
/// Presentación de Productos y Clientes...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS Y CLIENTES");
reporteProductos();
reporteClientes();
//console.log("Producto 1:");
//productos[0].cualEstuNombre();
//productos[0].cuantoStockTienes();
//
//console.log("Producto 2:");
//productos[1].cualEstuNombre();
//productos[1].cuantoStockTienes();
//
//console.log("Cliente 1:");
//clientes[0].cualEstuNombre();
//clientes[0].montoGastado();
//
//console.log("Cliente 2:");
//clientes[1].cualEstuNombre();
//clientes[1].montoGastado();
//
// Interacciones  PRIMER DÍA
// Ciente1 compra 1Kg de Yerba y 1 Kg de Azucar
// Liente2 compra 1kg de Azucar
// 
console.log("DÍA '1' Ventas del Día");
// Cliente 1 Operación 1
//cliente1.comprarProducto(producto1, 1);
productos[0].venderACliente(clientes[0], 1);
// Cliente 1 operación 2
//cliente1.comprarProducto(producto2, 1);
productos[1].venderACliente(clientes[0], 1);
// Cliente 2 operación 1
productos[1].venderACliente(clientes[1], 1);
//
console.log("Cierre del día 1");
estadoProductosClientes();
/////////////////////////////////
// Dia 2
console.log("DÍA '2' Ventas del Día");
productos[0].venderACliente(clientes[0], 2);
productos[0].venderACliente(clientes[1], 3);
/////
console.log("Cierre del día 2");
estadoProductosClientes();
/////////////
// Dia 3
console.log("DÍA '3' Ventas del Día");
productos[1].venderACliente(clientes[0], 2);
productos[0].venderACliente(clientes[1], 2);
/////
console.log("Cierre del día 3");
estadoProductosClientes();
//
/* Fin */


