var precioKg = parseFloat()
var precioTamano = parseFloat ()
var precioIva = parseFloat ()
var precioTotal = parseFloat ()
var pesoPaq = parseFloat ()
var tamanoPaq = parseFloat ()

function peso (cantidadKg){
    if (cantidadKg >= 100) {
        precioKg = 1200;
    }
    else if (cantidadKg >= 50 && cantidadKg <= 99) {
        precioKg = 800;
    }
    else if (cantidadKg >= 30 && cantidadKg <= 49) {
        precioKg = 650;
    }
    else if (cantidadKg >= 20 && cantidadKg <= 29) {
        precioKg = 500;
    }
    else if (cantidadKg >= 10 && cantidadKg <= 19) {
        precioKg = 400;
    }
    else {
        precioKg = 300;
    }    
    
    console.log("Peso total: " +cantidadKg + " kg.");
    console.log("Precio por peso: $" + precioKg);
}

function tamano (x, y, z) {
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

function iva (num1, num2) {
    precioIva = (num1 + num2) * 0.21;
    console.log("Total IVA: $" + precioIva)
}

function ingresoPeso () {
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

    peso(pesoPaq);
}

function ingresoTamano (){
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

    tamano(x, y, z);
}

function total (precio1, precio2, precio3) {
    precioTotal = precio1 + precio2 + precio3;
    alert ("Precio total: $" + precioTotal);
}

ingresoPeso();
ingresoTamano();
iva(precioKg, precioTamano);
total (precioKg, precioTamano, precioIva);






/* alert("El precio de su paquete es: $" + precioKg); */