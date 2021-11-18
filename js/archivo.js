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
    $("#tablaCotizador").removeClass("is-invisible");
    $("#botonCalcular").removeClass("is-invisible");
    let nuevoPaquete = document.createElement("tr");
    nuevoPaquete.innerHTML =    `<tr class="rowCotizador">
                                    <td> 
                                        <p class="cantidadPaq">${cantidadPaq + 1} 
                                    </td>
                                    <td>
                                        <input class="input x" type="number" placeholder="Ancho en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input y" type="number" placeholder="Altura en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input z" type="number" placeholder="Profundidad en cm." required>
                                    </td>
                                    <td> 
                                        <input class="input peso" type="number" placeholder="Peso en kg." required>
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
    $("#tablaCotizador").append(nuevoPaquete);                                   
    cantidadPaq += 1;
}

//cuando haces clic en calcular inicia esta funcion
//toma los valores que se ingresan en el formulario y los asigna al array correspondiente
function comenzarCotizacion (){
    let contador = $(".cantidadPaq").length;
    console.log(contador);

    //toma los valores de los campos del formulario y los guarda en variables
    for (let i=0; i<contador; i++) {
        tamanoX[i] = $(".x")[i].value;
        tamanoY[i] = $(".y")[i].value;
        tamanoZ[i] = $(".z")[i].value;
        pesoKG[i] = $(".peso")[i].value;

        if (tamanoX[i] == '' || tamanoX[i] <= 0 || 
            tamanoY[i] == '' || tamanoY[i] <= 0 ||
            tamanoZ[i] == '' || tamanoZ[i] <= 0 ||
            pesoKG[i] == '' ||pesoKG[i] <= 0) {
                return false;
        }
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
        $(".precioPeso")[i].value = cotizacion[i].precioPeso
        $(".precioTamano")[i].value = cotizacion[i].precioTamano
        $(".precioIva")[i].value = cotizacion[i].precioIva
        $(".precioTotal")[i].value = cotizacion[i].precioTotal
    }
    //acumulador del precio total de cada cotizacion
    for (let i = 0; i<cantidadPaq; i++) {
        let precios = Array.from(precioTotal);
        acumulador = acumulador + precios[i];
    }
    //remueve la clase is-hidden de un div en html y muestra el resultado total acumulado de las cotizaciones
    var resultadoTotal = document.createElement ("p");
    $(resultadoTotal).addClass("has-text-centered is-justify-content-center is-centered is-mobile");
    resultadoTotal.id = "resultadoId";
    resultadoTotal.innerHTML =  `El total de sus ${cantidadPaq} paquetes es $${acumulador}.`
    $("#divCotizador").removeClass("is-hidden");
    $("#divCotizador").append(resultadoTotal);
    console.log(precioTotal);
    acumulador = 0;
}

console.log(cotizacion);
console.log(typeof precioTotal)

//hace aparecer un modal donde se puede cambiar el nombre de usuario --- falta
function usuario () {
    let menuUsuario = $("#modalUsuario")
    $(menuUsuario).addClass("is-active is-clipped");
    $("#nombreUsuario").val(localStorage.getItem("nombreUsuario"));
    $("#apellidoUsuario").val(localStorage.getItem("apellidoUsuario"));
    $("#telefonoUsuario").val(localStorage.getItem("telefonoUsuario"));
    $("#domicilioUsuario").val(localStorage.getItem("domicilioUsuario"));
}

//saca el disabled a los inputs del modal usuario para poder ingresar nuevos datos
function modificarDatos (){
    $("#nombreUsuario").prop("disabled", false);
    $("#apellidoUsuario").prop("disabled", false);
    $("#telefonoUsuario").prop("disabled", false);
    $("#domicilioUsuario").prop("disabled", false);
}

//cargar datos al modal usuario
function cargarDatos () {
    let nombreUsuario = $("#nombreUsuario").val();
    let apellidoUsuario = $("#apellidoUsuario").val();
    let telefonoUsuario = $("#telefonoUsuario").val();
    let domicilioUsuario = $("#domicilioUsuario").val();
    localStorage.setItem("nombreUsuario", nombreUsuario);
    localStorage.setItem("apellidoUsuario", apellidoUsuario);
    localStorage.setItem("telefonoUsuario", telefonoUsuario);
    localStorage.setItem("domicilioUsuario", domicilioUsuario);
    $("#nombreUsuario").prop("disabled", true);
    $("#apellidoUsuario").prop("disabled", true);
    $("#telefonoUsuario").prop("disabled", true);
    $("#domicilioUsuario").prop("disabled", true);
}

//
function borrarDatos () {
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("apellidoUsuario");
    localStorage.removeItem("telefonoUsuario");
    localStorage.removeItem("domicilioUsuario");
    $("#nombreUsuario").val("");
    $("#apellidoUsuario").val("");
    $("#telefonoUsuario").val("");
    $("#domicilioUsuario").val("");
}

//cierra el modal de usuario
function cerrar () {
    let modalUsuario = $("#modalUsuario");
    $(modalUsuario).removeClass("is-active is-clipped");
}