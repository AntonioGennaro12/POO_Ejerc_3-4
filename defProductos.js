const Producto = require("./Producto.js");
//  AQUÍ SE GENERAN LOS PRODUCTOS (solamente agregar a continuacíon dentro de los corchetes)
const productos = [ new Producto("YerbaMateC/Px1Kg", 1750, 10, 3),
                    new Producto("AzucarBlancax1Kg", 900, 5, 2),
                    new Producto("CafeMolidox500gr", 2100, 8, 2),
                    new Producto("TeEnHebrasX180gr", 750, 12, 3) ];
//
module.exports = productos;
