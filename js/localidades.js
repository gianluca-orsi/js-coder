const URLJSONBA = "../js/localidades/buenosAires.json"
const URLJSONSF = "../js/localidades/santaFe.json"
const URLJSONER = "../js/localidades/entreRios.json"
const URLJSONCOR = "../js/localidades/cordoba.json"
const URLJSONCH = "../js/localidades/chaco.json"
const URLJSONLP = "../js/localidades/laPampa.json"
const URLJSONMDZ = "../js/localidades/mendoza.json"
const URLJSONSL = "../js/localidades/sanLuis.json"
const URLJSONMIS = "../js/localidades/misiones.json"

//para localidades de buenos aires
var divBA = document.createElement("div");
$(divBA).addClass("column is-3 noticias m-3 hvr-grow");
$(divBA).attr('id', 'divBA');
$(divBA).append("<p class='has-text-centered lista--titulo'>Buenos Aires</p>")
$("#divLocalidades1").append(divBA);
let listaBA = document.createElement("ul");

$.getJSON(URLJSONBA, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaBA.appendChild(li);
        }
    }
})
$(divBA).append(listaBA);

//para localidades de santa fe
var divSF = document.createElement("div");
$(divSF).addClass("column is-3 noticias m-3 hvr-grow");
$(divSF).attr('id', 'divSF');
$(divSF).append("<p class='has-text-centered lista--titulo'>Santa Fe</p>")
$("#divLocalidades1").append(divSF);
let listaSF = document.createElement("ul");

$.getJSON(URLJSONSF, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaSF.appendChild(li);
        }
    }
})
$(divSF).append(listaSF);

//para localidades de entre rios
var divER = document.createElement("div");
$(divER).addClass("column is-3 noticias m-3 hvr-grow is-narrow");
$(divER).attr('id', 'divER');
$(divER).append("<p class='has-text-centered lista--titulo'>Entre Ríos</p>")
$("#divLocalidades1").append(divER);
let listaER = document.createElement("ul");

$.getJSON(URLJSONER, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaER.appendChild(li);
        }
    }
})
$(divER).append(listaER);

//para localidades de cordoba
var divCOR = document.createElement("div");
$(divCOR).addClass("column is-3 noticias m-3 hvr-grow");
$(divCOR).attr('id', 'divCOR');
$(divCOR).append("<p class='has-text-centered lista--titulo'>Córdoba</p>")
$("#divLocalidades2").append(divCOR);
let listaCOR = document.createElement("ul");

$.getJSON(URLJSONCOR, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaCOR.appendChild(li);
        }
    }
})
$(divCOR).append(listaCOR);

//para localidades de chaco
var divCH = document.createElement("div");
$(divCH).addClass("column is-3 noticias m-3 hvr-grow");
$(divCH).attr('id', 'divCH');
$(divCH).append("<p class='has-text-centered lista--titulo'>Chaco</p>")
$("#divLocalidades2").append(divCH);
let listaCH = document.createElement("ul");

$.getJSON(URLJSONCH, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaCH.appendChild(li);
        }
    }
})
$(divCH).append(listaCH);

//para localidades de la pampa
var divLP = document.createElement("div");
$(divLP).addClass("column is-3 noticias m-3 hvr-grow");
$(divLP).attr('id', 'divLP');
$(divLP).append("<p class='has-text-centered lista--titulo'>La Pampa</p>")
$("#divLocalidades2").append(divLP);
let listaLP = document.createElement("ul");

$.getJSON(URLJSONLP, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaLP.appendChild(li);
        }
    }
})
$(divLP).append(listaLP);

//para localidades de mendoza
var divMDZ = document.createElement("div");
$(divMDZ).addClass("column is-3 noticias m-3 hvr-grow");
$(divMDZ).attr('id', 'divMDZ');
$(divMDZ).append("<p class='has-text-centered lista--titulo'>Mendoza</p>")
$("#divLocalidades3").append(divMDZ);
let listaMDZ = document.createElement("ul");

$.getJSON(URLJSONMDZ, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaMDZ.appendChild(li);
        }
    }
})
$(divMDZ).append(listaMDZ);

//para localidades de san luis
var divSL = document.createElement("div");
$(divSL).addClass("column is-3 noticias m-3 hvr-grow");
$(divSL).attr('id', 'divSL');
$(divSL).append("<p class='has-text-centered lista--titulo'>San Luís</p>")
$("#divLocalidades3").append(divSL);
let listaSL = document.createElement("ul");

$.getJSON(URLJSONSL, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaSL.appendChild(li);
        }
    }
})
$(divSL).append(listaSL);

//para localidades de misiones
var divMIS = document.createElement("div");
$(divMIS).addClass("column is-3 noticias m-3 hvr-grow");
$(divMIS).attr('id', 'divMIS');
$(divMIS).append("<p class='has-text-centered lista--titulo'>Misiones</p>")
$("#divLocalidades3").append(divMIS);
let listaMIS = document.createElement("ul");

$.getJSON(URLJSONMIS, function(respuesta, estado) {
    if (estado === "success") {
        var datos = respuesta;
        console.log(datos);
        for (const dato of datos) {
            var li = document.createElement("li");
            li.innerHTML = `${dato.nombre}`
            console.log(dato.nombre);
            listaMIS.appendChild(li);
        }
    }
})
$(divMIS).append(listaMIS);