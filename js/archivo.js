let nombreCheck = false;
let apellidoCheck = false;
let edadCheck = false;

while (nombreCheck == false) {
    nombre = prompt("Ingrese su nombre: ");
    if (nombre == null || nombre == "") {
        alert("Por favor, ingrese un nombre valido.") }
    else {
        nombreCheck = true
    }
}

while (apellidoCheck == false) {
    apellido = prompt("Ingrese su apellido: ");
    if (apellido == null || apellido == "") {
        alert("Por favor, ingrese un apellido valido.") }
    else {
        apellidoCheck = true
    }
}

while (edadCheck == false) {
    edad = prompt("Ingrese su edad: ");
    if (edad == null || edad == "" || edad<=0 ) {
        alert("Por favor, ingrese una edad valida.") }
    else {
        edadCheck = true
    }
}

if (edad>=18) {
    alert(nombre + " " + apellido + ", usted es mayor de edad.")
} else {
    alert(nombre + " " + apellido + ", usted es menor de edad.")
}