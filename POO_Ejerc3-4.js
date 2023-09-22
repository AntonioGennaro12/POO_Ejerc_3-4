// POO Ejercicio 3-4
// Importo las clases
const Producto  = require("./Producto.js");
const Cliente   = require("./Cliente.js");   
/// defino los objetos y los inicializo con el "constructor"
// productos
const producto1 = new Producto("YerbaMatex1Kg", 1750, 10, 3);
const producto2 = new Producto("Azucarx1Kg", 900, 5, 2);
// clientes
const cliente1  = new Cliente("Juan", 0);
const cliente2  = new Cliente("Pedro", 0);
////
/// Presentación de Productos y Clientes...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS Y CLIENTES");
console.log("Producto 1:");
producto1.cualEstuNombre();
producto1.cuantoQuedaDeStock();
//
console.log("Producto 2:");
producto2.cualEstuNombre();
producto2.cuantoQuedaDeStock();
//
// Interacciones  PRIMER DÍA
// Ciente1 compra 1Kg de Yerba y 1 Kg de Azucar
// Liente2 compra 1kg de Azucar
// 
console.log("DÍA '1' Compras del Día");
// Cliente 1 Operación 1
cliente1.comprarProducto(producto1, 1);
producto1.venderACliente(cliente1, 1);
// Cliente 1 operación 2
cliente1.comprarProducto(producto2, 1);
producto2.venderACliente(cliente1, 1);
// Cliente 2 operación 1
cliente2.comprarProducto(producto2, 1);
producto2.venderACliente(cliente2, 1);
//
console.log("Cierre del día");
// Estado de cuenta de clientes
cliente1.cuantoGastaste();
cliente2.cuantoGastaste();
// Estado de Stock 
producto1.cuantoQuedaDeStock();
producto2.cuantoQuedaDeStock();
// Reporte de Ventas
producto1.reporteDeVentas();
producto2.reporteDeVentas();

/////////////////////////////////
// Dia 2
console.log("DÍA '2' Compras del Día");
cliente1.comprarProducto(producto1, 2);
producto1.venderACliente(cliente1, 2);

cliente2.comprarProducto(producto1, 3);
producto1.venderACliente(cliente2, 3);
/////
console.log("Cierre del día");
// Estado de cuenta de clientes
cliente1.cuantoGastaste();
cliente2.cuantoGastaste();
// Estado de Stock 
producto1.cuantoQuedaDeStock();
producto2.cuantoQuedaDeStock();
// Reporte de Ventas
producto1.reporteDeVentas();
producto2.reporteDeVentas();
/////////////
// Dia 3
console.log("DÍA '3' Compras del Día");
cliente1.comprarProducto(producto2, 2);
producto2.venderACliente(cliente1, 2);

cliente2.comprarProducto(producto1, 2);
producto1.venderACliente(cliente2, 2);
/////
console.log("Cierre del día");
// Estado de cuenta de clientes
cliente1.cuantoGastaste();
cliente2.cuantoGastaste();
// Estado de Stock 
producto1.cuantoQuedaDeStock();
producto2.cuantoQuedaDeStock();
// Reporte de Ventas
producto1.reporteDeVentas();
producto2.reporteDeVentas();
/////////////
/* Fin */





