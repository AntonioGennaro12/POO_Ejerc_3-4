// POO Ejercicio 3-4
// Importo las definiciones de clases
const VentasDelDia = require("./VentasDelDia.js");
const cargaVentasDia = require("./cargaVentasDia.js");
const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const ventasDeDia = require("./defVentasDelDia.js");
const {reporteClientes, reporteProductos, reporteVentasA, estadoProductosClientes} = require("./rutinas.js");
//  INICIO 
//  SUPERMERCADO DEVS (Manejo de Stock)
//
/// Presentación de Productos y Clientes registrados...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS Y CLIENTES");
reporteProductos();
reporteClientes();
//
// Ventas x DÍA
console.log("DÍA '1' Ventas del Día");
cargaVentasDia(0);
console.log("DÍA '2' Ventas del Día");
cargaVentasDia(1);
console.log("DÍA '3' Ventas del Día");
cargaVentasDia(2);
estadoProductosClientes();
//
/* Fin */


