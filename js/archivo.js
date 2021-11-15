var precioPorKg = [100, 200, 350, 600, 800, 1000];
var precioPorTamano = [100, 200, 350, 600, 800, 1000];
var iva = 0.21;
var cantidadPaq = 0;
var tamanoX = [];
var tamanoY = [];
var tamanoZ = [];
var pesoKG = [];
var precioKg = [];
var precioTamano = [];
var precioIva = [];
var precioTotal = [];
var cotizacion = [];
var acumulador = 0;
// en caso de que se haga clic mas de una vez en calcular
//este contador hace que se sobreescriban los valores en precioTotal y precioIva
var contadorExterno = 0; 
//lo voy a usar para resetear el resultado de la cotizacion total
//todavia no encuentro una forma que no se rompa
var verificadorCotizacion = false;


class Cotizador {
    constructor (x, y, z, pesoPaq, precioTamano, precioPeso, precioIva, precioTotal) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pesoPaq = pesoPaq;
        this.precioTamano = precioTamano;
        this.precioPeso = precioPeso;
        this.precioIva = precioIva;
        this.precioTotal = precioTotal;
    }
    
    //dependiendo el peso del paquete asigna un precio desde el array precioPorKg
    peso (pesoPaq) {
        if (pesoPaq >= 100) {
            precioKg = precioPorKg[5];
        }
        else if (pesoPaq >= 50 && pesoPaq <= 99) {
            precioKg = precioPorKg[4];
        }
        else if (pesoPaq >= 30 && pesoPaq <= 49) {
            precioKg = precioPorKg[3];
        }
        else if (pesoPaq >= 20 && pesoPaq <= 29) {
            precioKg = precioPorKg[2];
        }
        else if (pesoPaq >= 10 && pesoPaq <= 19) {
            precioKg = precioPorKg[1];
        }
        else {
            precioKg = precioPorKg[0];
        }    
        this.precioPeso = precioKg;
    }

    //asigna el precio por tamano del paquete
    //si alguna de las dimensiones excede alguna de las condiciones
    //da un precio mayor sin importar cual de todas es
    tamano (x, y, z) {
        if (x >= 400 || y >= 400 || z >= 400) {
            precioTamano = precioPorTamano[5];
        }
        else if (x >= 200 || y >= 200 || z >= 200) {
            precioTamano = precioPorTamano[4];
        }
        else if (x >= 100 || y >= 100 || z >= 100) {
            precioTamano = precioPorTamano[3];
        }
        else if (x >= 50 || y >= 50 || z >= 50) {
            precioTamano = precioPorTamano[2];
        }
        else if (x >= 25 || y >= 25 || z >= 25){
            precioTamano = precioPorTamano[1];
        }
        else {
            precioTamano = precioPorTamano[0];
        }
        this.precioTamano = precioTamano;
    }

    //calculador de iva
    //se almacena en un array en caso de necesitar volver a usarlo en otro lado
    //probablemente lo borre porque no encuentro un buen uso
    iva (precioPeso, precioTamano) {
        let operacion = (precioPeso + precioTamano) * iva;
        this.precioIva = operacion;
        precioIva[contadorExterno] = operacion;
    }

    //calculador de precio total por cotizacion
    //almacena el precio total en un array para poder usarlo facilmente
    total (precioPeso, precioTamano, precioIva) {
        let operacion = precioPeso + precioTamano + precioIva;
        this.precioTotal = operacion;
        precioTotal[contadorExterno] = operacion;
    }
}

//cuando se hace clic en anadir paquete para cotizar saca la clase is-invisible
//del boton calcular y la tabla donde se colocan los valores a utilizar
function anadirPaquete (){
    document.getElementById("tablaCotizador").classList.remove("is-invisible");
    document.getElementById("botonCalcular").classList.remove("is-invisible");
    let nuevoPaquete = document.createElement("tr");
    nuevoPaquete.innerHTML =    `<tr class="rowCotizador">
                                    <td> 
                                        <p class="cantidadPaq">${cantidadPaq + 1} 
                                    </td>
                                    <td>
                                        <input class="input x" type="text" placeholder="Ancho en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input y" type="text" placeholder="Altura en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input z" type="text" placeholder="Profundidad en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input peso" type="text" placeholder="Peso en kg." required>
                                    </td>
                                    <td> 
                                        <input class="input precioTamano" type="text" disabled>
                                    </td>
                                    <td> 
                                        <input class="input precioPeso" type="text" disabled>
                                    </td>
                                    <td>
                                        <input class="input precioIva" type="text" disabled>
                                    </td>
                                    <td> 
                                        <input class="input precioTotal" type="text" disabled>
                                    </td>
                                </tr>`                                   
    document.getElementById("tablaCotizador").appendChild(nuevoPaquete);
    cantidadPaq += 1;
    //autoID();

    // return false ---- para cortar la funcion, se puede usar para validaciones
}

//anade un id a cada td, iba a utilizarlo pero encontre otra forma mas facil de tomar los datos
//lo dejo en caso de necesitar algo parecido mas adelante
/* function autoID (){
    let listaCantidadPaq = document.getElementsByClassName("cantidadPaq")
    let listaX = document.getElementsByClassName("x")
    let listaY = document.getElementsByClassName("y")
    let listaZ = document.getElementsByClassName("z")
    let listaPeso = document.getElementsByClassName("peso")
    let listaPrecioTamano = document.getElementsByClassName("precioTamano")
    let listaPrecioPeso = document.getElementsByClassName("precioPeso")
    let listaPrecioIva = document.getElementsByClassName("precioIva")
    let listaPrecioTotal = document.getElementsByClassName("precioTotal")
    for (let i = 0; i<listaCantidadPaq.length; i++) {
        listaCantidadPaq[i].id = "cantidadPaq" + (i+1);
    }
    for (let i = 0; i<listaX.length; i++) {
        listaX[i].id = "x" + (i+1);
    }
    for (let i = 0; i<listaY.length; i++) {
        listaY[i].id = "y" + (i+1);
    }
    for (let i = 0; i<listaZ.length; i++) {
        listaZ[i].id = "z" + (i+1);
    }
    for (let i = 0; i<listaPeso.length; i++) {
        listaPeso[i].id = "peso" + (i+1);
    }
    for (let i = 0; i<listaPrecioTamano.length; i++) {
        listaPrecioTamano[i].id = "precioTamano" + (i+1);
    }
    for (let i = 0; i<listaPrecioPeso.length; i++) {
        listaPrecioPeso[i].id = "precioPeso" + (i+1);
    }
    for (let i = 0; i<listaPrecioIva.length; i++) {
        listaPrecioIva[i].id = "precioIva" + (i+1);
    }
    for (let i = 0; i<listaPrecioTotal.length; i++) {
        listaPrecioTotal[i].id = "precioTotal" + (i+1);
    }
} */

//cuando haces clic en calcular inicia esta funcion
//toma los valores que se ingresan en el formulario y los asigna al array correspondiente
function comenzarCotizacion (){
    let contador = document.getElementsByClassName("cantidadPaq").length;
    console.log(contador);
    for (let i=0; i<contador; i++) {
        tamanoX[i] = document.getElementsByClassName("x")[i].value;
        tamanoY[i] = document.getElementsByClassName("y")[i].value;
        tamanoZ[i] = document.getElementsByClassName("z")[i].value;
        pesoKG[i] = document.getElementsByClassName("peso")[i].value;
    }
    //crea los objetos cotizadores individuales, se pueden ver en la consola
    for (let i = 0; i<cantidadPaq; i++) {
        cotizacion[i] = new Cotizador;
        cotizacion[i].x = tamanoX[i];
        cotizacion[i].y = tamanoY[i];
        cotizacion[i].z = tamanoZ[i];
        cotizacion[i].pesoPaq = pesoKG[i];
        cotizacion[i].tamano(cotizacion[i].x, cotizacion[i].y, cotizacion[i].z)
        cotizacion[i].peso(pesoKG[i])
        cotizacion[i].iva(cotizacion[i].precioPeso, cotizacion[i].precioTamano),
        cotizacion[i].total(cotizacion[i].precioPeso, cotizacion[i].precioTamano, cotizacion[i].precioIva)
        contadorExterno +=1;
        if (contadorExterno == cantidadPaq){
            contadorExterno = 0;
        }
    }
    //da a los campos deshabilitados del formulario el valor correspondiente
    for (let i = 0; i<cantidadPaq; i++) {
        document.getElementsByClassName ("precioPeso")[i].value = cotizacion[i].precioPeso
        document.getElementsByClassName ("precioTamano")[i].value = cotizacion[i].precioTamano
        document.getElementsByClassName ("precioIva")[i].value = cotizacion[i].precioIva
        document.getElementsByClassName ("precioTotal")[i].value = cotizacion[i].precioTotal
    }
    //acumulador del precio total de cada cotizacion
    for (let i = 0; i<cantidadPaq; i++) {
        let precios = Array.from(precioTotal);
        acumulador = acumulador + precios[i];
    }
    //remueve la clase is-hidden de un div en html y muestra el resultado total acumulado de las cotizaciones
    var resultadoTotal = document.createElement ("p");
    resultadoTotal.classList.add("has-text-centered", "is-justify-content-center", "is-centered", "is-mobile");
    resultadoTotal.id = "resultadoId";
    resultadoTotal.innerHTML =  `El total de sus ${cantidadPaq} paquetes es $${acumulador}.`
    document.getElementById("divCotizador").classList.remove("is-hidden");
    document.getElementById("divCotizador").appendChild(resultadoTotal);
    console.log(precioTotal);
    acumulador = 0;
}

console.log(cotizacion);
console.log(typeof precioTotal)
