const Producto  = require("./Producto.js");
//const clientes = require("./defClientes.js");
//const productos = require("./defProductos.js");


class Cliente {
    #nombreCliente;    // nombre completo 
    #montoComprado;    //acumulado por cliente  

    constructor(nombre, comprado) {
        this.#nombreCliente = nombre;
        this.#montoComprado = comprado;
    }

    setNombreCliente (nombre) {
        this.#nombreCliente = nombre;
    }

    getNombreCliente() {
        return (this.#nombreCliente);
    }

    setMontoComprado (monto) {
        this.#montoComprado += monto;   // se podría hacer una para poner en cero
    }

    getMontoComprado() {
        return (this.#montoComprado);
    }

// Procedimientos

    cualEstuNombre () {
        console.log("El Nombre de cliente es: "+this.getNombreCliente());
    }

    comprarProducto (prod, cant) {
        console.log("Cliente: " + this.#nombreCliente + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        this.#montoComprado += prod.getPrecioProducto(); 
    }
       
    montoGastado () {
        console.log("Cliente: " + this.#nombreCliente+", lleva gastado: "+this.#montoComprado);
    }
    
}

module.exports = Cliente;


