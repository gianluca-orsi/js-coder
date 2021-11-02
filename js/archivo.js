var precioKg = parseFloat() /* precio del paquete en base a los kilos */
var precioTamano = parseFloat () /* precio del paquete en base a su tamaño */
var precioIva = parseFloat () /* iva del paquete, precioKg + precioTamano */
var precioTotal = parseFloat () /* precio total del paquete, precioKg + precioTamano + precioIva */
var cantidadPaq = parseInt();
var precioTotalAcumulado = 0;

class Cotizador {
    constructor (x, y, z, pesoPaq) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pesoPaq = pesoPaq;
    }
    peso (pesoPaq) {
        if (pesoPaq >= 100) {
            precioKg = 1200;
        }
        else if (pesoPaq >= 50 && pesoPaq <= 99) {
            precioKg = 800;
        }
        else if (pesoPaq >= 30 && pesoPaq <= 49) {
            precioKg = 650;
        }
        else if (pesoPaq >= 20 && pesoPaq <= 29) {
            precioKg = 500;
        }
        else if (pesoPaq >= 10 && pesoPaq <= 19) {
            precioKg = 400;
        }
        else {
            precioKg = 300;
        }    
        
        console.log("Peso total: " +pesoPaq + " kg.");
        console.log("Precio por peso: $" + precioKg);
    }
    tamano (x, y, z) {
        if (x >= 400 || y >= 400 || z >= 400) {
            precioTamano = 1200;
        }
        else if (x >= 200 || y >= 200 || z >= 200) {
            precioTamano = 800;
        }
        else if (x >= 100 || y >= 100 || z >= 100) {
            precioTamano = 650;
        }
        else if (x >= 50 || y >= 50 || z >= 50) {
            precioTamano = 500;
        }
        else {
            precioTamano = 350
        }
    
        console.log("Ancho del paquete: " + x +" cm.");
        console.log("Altura del paquete: " + y +" cm.");
        console.log("Profundidad del paquete: " + z +" cm.");
        console.log("Precio por tamano: $" + precioTamano);
    }
    iva (num1, num2) {
        precioIva = (num1 + num2) * 0.21;
        console.log("Total IVA: $" + precioIva)
    }
    ingresoPeso () {
        let pesoPaq;
        let validar = true
        do {
            pesoPaq = prompt("Ingrese el peso de su paquete en kilogramos: ");
            if (pesoPaq == null || pesoPaq == "" || pesoPaq <= 0) {
                validar = false;
            }
            else {
                validar = true
            }
        }
        while (validar == false);

        this.peso(pesoPaq);
    }
    ingresoTamano (){
        let x;
        let y;
        let z;
        let validarX = true
        let validarY = true
        let validarZ = true
        do {
            x = prompt("Ingrese el ancho de su paquete en centimetros: ");
            if (x == null || x == "" || x <= 0) {
                validarX = false;
            }
            else {
                validarX = true
            }
        }
        while (validarX == false);
    
        do {
            y = prompt("Ingrese la altura de su paquete en centimetros: ");
            if (y == null || y == "" || y <= 0) {
                validarY = false;
            }
            else {
                validarY = true
            }
        }
        while (validarY == false);
    
        do {
            z = prompt("Ingrese la profundidad de su paquete en centimetros: ");
            if (z == null || z == "" || z <= 0) {
                validarZ = false;
            }
            else {
                validarZ = true
            }
        }
        while (validarZ == false);
        
        this.tamano(x, y, z);
    }
    total (precio1, precio2, precio3) {
        precioTotal = precio1 + precio2 + precio3;
        alert ("Precio de este paquete: $" + precioTotal);
    }
}

cantidadPaq = prompt("Ingrese la cantidad de paquetes a cotizar: ")
for (let i = 0; i <cantidadPaq; i++){
    const cotizacion= new Cotizador;
    console.log("Este es el paquete numero: " + (i+1) + ".")
    cotizacion.ingresoPeso();
    cotizacion.ingresoTamano();
    cotizacion.iva(precioKg, precioTamano);
    cotizacion.total (precioKg, precioTamano, precioIva);
    precioTotalAcumulado = precioTotalAcumulado + precioTotal;
}

alert ("Precio total: $" + precioTotalAcumulado);