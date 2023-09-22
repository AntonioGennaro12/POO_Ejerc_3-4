class Producto {
    #nombreProducto;        // puede haber muchos procuctos
    #precioProducto;        // valor numérico
    #vendidoA;              // Array bi-dimensional pueden ser varios
    #cantidadStock; 
    #stockMinimo;        // cantidad si menos que 2 hay que avisar

    constructor (nombre, precio, cantidad, stockMin) {
        this.#nombreProducto = nombre;        // puede haber muchos procuctos
        this.#precioProducto = precio;        // valor numérico
        this.#cantidadStock = cantidad;       // valor numérico
        this.#stockMinimo   = stockMin;       // valor numérico
        this.#vendidoA = [];                  // a uno o mas clientes
    }
    
    setNombreProducto (nombre) {
        this.#nombreProducto = nombre;   // se podría hacer una para poner en cero
    }

    getNombreProducto() {
        return (this.#nombreProducto);
    }

    setPrecioProducto (precio) {
        this.#precioProducto = precio;   // se podría hacer una para poner en cero
    }

    getPrecioProducto() {
        return (this.#precioProducto);
    }

    setCantidadStock (cantidad) {
        this.#cantidadStock = cantidad ;   // stock
    }

    getCantidadStock() {
        return (this.#cantidadStock);          // devuelve stock
    }

    setStockMinimo(cantidad) {
        this.#stockMinimo = cantidad ;   // stock
    }
    
    getStockMinimo() {
        return (this.#stockMinimo);          // devuelve stock
    }
    

    setVendidoA (nombre, cant) {
        this.#vendidoA.push(nombre, cant) ;   // pueden ser varios
    }

    getVendidoA() {
        return (this.#vendidoA);                // devuelve un array
    }

    /// Procedimientos
    cualEstuNombre () {
        console.log("Soy el producto: "+this.getNombreProducto());
    }

    venderACliente (cliente, cantidad) {
        console.log("Soy: " + this.#nombreProducto + " le vendo: " + cantidad + 
                    " unidad a: "+cliente.getNombreCliente() );
        this.#vendidoA.push (cliente.getNombreCliente(), cantidad); 
        this.#cantidadStock -= cantidad;
        if (this.#cantidadStock <= this.#stockMinimo) {
            console.log("Alerta Stock Mínimo!! Producto: "+this.#nombreProducto+" cant. "+this.#cantidadStock);
        }
    }
       
    cuantoQuedaDeStock () {
        console.log("Producto: "+this.#nombreProducto+" quedan: "+this.#cantidadStock+" unidades");
    }

    reporteDeVentas() {
        console.log("Reporte de Ventas Producto: "+this.#nombreProducto+" Vendido a: "+this.#vendidoA);
        //console.table("Reporte de Ventas Producto: "+this.#nombreProducto+" Vendido a: "+this.#vendidoA);
    }
   
}

module.exports = Producto;
