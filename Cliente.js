const Producto  = require("./Producto.js");

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
        console.log("Mi nombre es: "+this.getNombreCliente());
    }

    comprarProducto (producto, cantidad) {
        console.log("Soy: " + this.#nombreCliente + " estoy comprando: " + cantidad + " de: "+producto.getNombreProducto() );
        this.#montoComprado += producto.getPrecioProducto(); 
    }
       
    cuantoGastaste () {
        console.log("Soy: " + this.#nombreCliente+", llevo gastado: "+this.#montoComprado);
    }
    



}

module.exports = Cliente;


