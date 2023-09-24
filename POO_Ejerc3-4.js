// POO Ejercicio 3-4
// Importo las definiciones de clases
const VentasDelDia = require("./VentasDelDia.js");
const cargaVentasDia = require("./cargaVentasDia.js");
const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const ventasDeDia = require("./defVentasDelDia.js");
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
// Ventas x DÍA
// Aquí definimos los objetos de la clase "VentasDelDia"
// uno por día, por ahora 3 días
//const ventasDia1 = new VentasDelDia (1, null);
//const ventasDia2 = new VentasDelDia (2, null);
//const ventasDia3 = new VentasDelDia (3, null);
// 
// Ahora cargamos los datos de las ventas del día
// /al mismo tiempo se actualizan los stocks y datos de cliente
// console.log("DÍA '1' Ventas del Día");
//productos[0].venderACliente(clientes[0], 1);
//productos[1].venderACliente(clientes[0], 1);
//productos[1].venderACliente(clientes[1], 1);
////ventasDeDia[0].agregaVentaDia(productos[0], 1, clientes[0]); // Yerba  x1 a Juan
////ventasDeDia[0].agregaVentaDia(productos[1], 1, clientes[0]); // Azucar x1 a Juan
////ventasDeDia[0].agregaVentaDia(productos[1], 1, clientes[1]); // Azuar  x1 a Pedor
////console.log("Estado al cierre del día 1");
////ventasDeDia[0].getVentaDia();
////estadoProductosClientes();
/////////////////////////////////
// Dia 2
////console.log("DÍA '2' Ventas del Día");
////ventasDeDia[1].agregaVentaDia(productos[0], 2, clientes[0]); // Yerba  x2 a Juan
////ventasDeDia[1].agregaVentaDia(productos[0], 3, clientes[1]); // Yerba  x3 a Pedro
//productos[0].venderACliente(clientes[0], 2);
//productos[0].venderACliente(clientes[1], 3);
////console.log("Estado al cierre del día 2");
////ventasDeDia[1].getVentaDia();
////estadoProductosClientes();
/////////////
// Dia 3
//console.log("DÍA '3' Ventas del Día");
//ventasDeDia[2].agregaVentaDia(productos[1], 2, clientes[0]); // Azucar x2 a Juan
//ventasDeDia[2].agregaVentaDia(productos[0], 2, clientes[1]); // Yerba  x2 a Pedro
//productos[1].venderACliente(clientes[0], 2);
//productos[0].venderACliente(clientes[1], 2);
//console.log("Estado al cierre del día 3");
//ventasDeDia[2].getVentaDia();
//
console.log("DÍA '1' Ventas del Día");
cargaVentasDia(0);
console.log("DÍA '2' Ventas del Día");
cargaVentasDia(1);
console.log("DÍA '3' Ventas del Día");
cargaVentasDia(2);
estadoProductosClientes();
//
/* Fin */


