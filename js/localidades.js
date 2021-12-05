const buenosAires = ["San Nicolás", "Olavarría", "Chivilcoy", "Tandil", "Ciudad Autónoma de Buenos Aires", "Campana", "Zarate", "La Plata", "Mar del Plata", "Bahía Blanca"];
const santaFe = ["San Lorenzo", "Santa Fe", "Rosario", "Venado Tuerto", "Vera", "Villa Amelia", "Totoras", "Casilda", "Arroyo Seco"];
const entreRios = ["Concepción del Uruguay", "Nogoyá", "Gualeguaychú", "Concordia", "Victoria"];
const cordoba = ["Rio Tercero", "Rio Cuarto", "Córdoba", "Bell Ville", "San Francisco"];
const chaco = ["Resistencia", "Saenz Peña", "Charata"];
const laPampa = ["Santa Rosa", "General Pico"];
const mendoza = ["San Rafael", "San Martín", "La Paz"];
const sanLuis = ["San Luís", "Merlo", "Villa Mercedes"];
const misiones = ["Posadas", "Puerto Iguazú", "Oberá"];

//para localidades de buenos aires
var divBA = document.createElement("div");
$(divBA).addClass("column is-3 noticias m-3 hvr-grow");
$(divBA).attr('id', 'divBA');
$(divBA).append("<p class='has-text-centered lista--titulo'>Buenos Aires</p>")
$("#divLocalidades1").append(divBA);
let listaBA = document.createElement("ul");

for (let i = 0; i<buenosAires.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${buenosAires[i]}`
        listaBA.appendChild(li);
    }
$(divBA).append(listaBA);

//para localidades de santa fe
var divSF = document.createElement("div");
$(divSF).addClass("column is-3 noticias m-3 hvr-grow");
$(divSF).attr('id', 'divSF');
$(divSF).append("<p class='has-text-centered lista--titulo'>Santa Fe</p>")
$("#divLocalidades1").append(divSF);
let listaSF = document.createElement("ul");

for (let i = 0; i<santaFe.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = `${santaFe[i]}`
    listaSF.appendChild(li);
}
$(divSF).append(listaSF);

//para localidades de entre rios
var divER = document.createElement("div");
$(divER).addClass("column is-3 noticias m-3 hvr-grow");
$(divER).attr('id', 'divER');
$(divER).append("<p class='has-text-centered lista--titulo'>Entre Ríos</p>")
$("#divLocalidades1").append(divER);
let listaER = document.createElement("ul");

for (let i = 0; i<entreRios.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${entreRios[i]}`
        listaER.appendChild(li);
    }
$(divER).append(listaER);

//para localidades de cordoba
var divCOR = document.createElement("div");
$(divCOR).addClass("column is-3 noticias m-3 hvr-grow");
$(divCOR).attr('id', 'divCOR');
$(divCOR).append("<p class='has-text-centered lista--titulo'>Córdoba</p>")
$("#divLocalidades2").append(divCOR);
let listaCOR = document.createElement("ul");

for (let i = 0; i<cordoba.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${cordoba[i]}`
        listaCOR.appendChild(li);
    }
$(divCOR).append(listaCOR);

//para localidades de chaco
var divCH = document.createElement("div");
$(divCH).addClass("column is-3 noticias m-3 hvr-grow");
$(divCH).attr('id', 'divCH');
$(divCH).append("<p class='has-text-centered lista--titulo'>Chaco</p>")
$("#divLocalidades2").append(divCH);
let listaCH = document.createElement("ul");

for (let i = 0; i<chaco.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${chaco[i]}`
        listaCH.appendChild(li);
    }
$(divCH).append(listaCH);

//para localidades de la pampa
var divLP = document.createElement("div");
$(divLP).addClass("column is-3 noticias m-3 hvr-grow");
$(divLP).attr('id', 'divLP');
$(divLP).append("<p class='has-text-centered lista--titulo'>La Pampa</p>")
$("#divLocalidades2").append(divLP);
let listaLP = document.createElement("ul");

for (let i = 0; i<laPampa.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${laPampa[i]}`
        listaLP.appendChild(li);
    }
$(divLP).append(listaLP);

//para localidades de mendoza
var divMDZ = document.createElement("div");
$(divMDZ).addClass("column is-3 noticias m-3 hvr-grow");
$(divMDZ).attr('id', 'divMDZ');
$(divMDZ).append("<p class='has-text-centered lista--titulo'>Mendoza</p>")
$("#divLocalidades3").append(divMDZ);
let listaMDZ = document.createElement("ul");

for (let i = 0; i<mendoza.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${mendoza[i]}`
        listaMDZ.appendChild(li);
    }
$(divMDZ).append(listaMDZ);

//para localidades de san luis
var divSL = document.createElement("div");
$(divSL).addClass("column is-3 noticias m-3 hvr-grow");
$(divSL).attr('id', 'divSL');
$(divSL).append("<p class='has-text-centered lista--titulo'>San Luís</p>")
$("#divLocalidades3").append(divSL);
let listaSL = document.createElement("ul");

for (let i = 0; i<sanLuis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${sanLuis[i]}`
        listaSL.appendChild(li);
    }
$(divSL).append(listaSL);

//para localidades de misiones
var divMIS = document.createElement("div");
$(divMIS).addClass("column is-3 noticias m-3 hvr-grow");
$(divMIS).attr('id', 'divMIS');
$(divMIS).append("<p class='has-text-centered lista--titulo'>Misiones</p>")
$("#divLocalidades3").append(divMIS);
let listaMIS = document.createElement("ul");

for (let i = 0; i<misiones.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `${misiones[i]}`
        listaMIS.appendChild(li);
    }
$(divMIS).append(listaMIS);