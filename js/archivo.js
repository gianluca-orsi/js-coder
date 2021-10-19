/* desafio 1 
let nombre;
let apellido;
let numDocumento;


nombre = prompt('Ingrese su nombre: ');
apellido = prompt('Ingrese su apellido: ');
numDocumento = prompt('Ingrese su numero de documento: ');

alert('Hola ' + nombre + ' ' + apellido + ', tu numero de documento es ' + numDocumento + '.'); */

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("Ingrese su edad:")
if (nombre == null || nombre == "" || apellido == null || apellido == "" || edad == null || edad == "") {
    alert("Por favor revise que los campos esten completados")
} else if (edad>=18) {
    alert(nombre + " " + apellido + ", usted es mayor de edad.")
} else if(edad>=0 && edad<=17){
    alert(nombre + " " + apellido + ", usted es menor de edad.")
} else {
    alert("Debe ingresar una edad valida")
}
