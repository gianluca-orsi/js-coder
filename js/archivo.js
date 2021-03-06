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
    $("#iniciarCotizador").empty();
    let tablaCotizador = document.createElement("div");
    $(tablaCotizador).addClass("columns is-mobile is-centered has-text-centered")
    tablaCotizador.innerHTML =  `<div class="column is-10 is-centered tabla--texto">
                                    <table class="table is-centered is-inline-block is-justify-content-center" id="tablaCotizador">
                                        <thead>
                                            <tr>
                                                <th>
                                                    N?? Paq.
                                                </th>
                                                <th>
                                                    Ancho (CM)
                                                </th>
                                                <th>
                                                    Alto (CM)
                                                </th>
                                                <th>
                                                    Profundidad (CM)
                                                </th>
                                                <th>
                                                    Peso (KG)
                                                </th>
                                                <th>
                                                    $ Seg??n Tama??o
                                                </th>
                                                <th>
                                                    $ Seg??n Peso
                                                </th>
                                                <th>
                                                    IVA
                                                </th>
                                                <th>
                                                    $ Total
                                                </th>
                                                <th>
                                                    
                                                </th>
                                            </tr>
                                        </thead>

                                    </table>
                                    <br>
                                    <div class="columns is-centered is-mobile has-text-centered>
                                        <section class="column is-6">
                                            <button class="button boton boton--texto hvr-ripple-out" id="botonCalcular" onclick="comenzarCotizacion()">Calcular</button>
                                            <br>
                                            <button class="button boton boton--texto hvr-ripple-out" id="botonAnadirPaq" onclick="anadirPaquete()">A??adir nuevo paquete</button>
                                        </section>
                                    </div>
                                </div>`
    if (cantidadPaq == 0) {
        $("#divAnadirPaquete").append(tablaCotizador);
    }
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
    
    // para probar como usar JSON
    var convertirAJSON = {precioAcumulado: acumulador, cantidadDePaquetes: cantidadPaq};
    var pruebaJSON = JSON.stringify(convertirAJSON);
    var pruebaJSON2 = JSON.parse(pruebaJSON);

    //remueve la clase is-hidden de un div en html y muestra el resultado total acumulado de las cotizaciones
    var resultadoTotal = document.createElement ("p");
    $(resultadoTotal).addClass("has-text-centered is-justify-content-center is-centered is-mobile resultado--texto");
    resultadoTotal.id = "resultadoId";
    if (cantidadPaq == 1) {
        resultadoTotal.innerHTML =  `El total de su paquete es $${pruebaJSON2.precioAcumulado}.`
    }
    else {
        resultadoTotal.innerHTML =  `El total de sus ${pruebaJSON2.cantidadDePaquetes} paquetes es $${pruebaJSON2.precioAcumulado}.`
    }
    $("#divCotizador").removeClass("is-hidden");
    $("#divCotizador").empty();
    $("#divCotizador").append(resultadoTotal);
    acumulador = 0;
}
