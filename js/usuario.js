//hace aparecer un modal donde se puede cambiar el nombre de usuario --- falta
function usuario () {
    let menuUsuario = $("#modalUsuario")
    $(menuUsuario).addClass("is-active is-clipped");
    if (localStorage.getItem("nombreUsuario") == '' || localStorage.getItem("nombreUsuario") == null ||
        localStorage.getItem("apellidoUsuario") == '' || localStorage.getItem("apellidoUsuario") == null ||
        localStorage.getItem("telefonoUsuario") == '' || localStorage.getItem("telefonoUsuario") == null ||
        localStorage.getItem("domicilioUsuario") == '' || localStorage.getItem("domicilioUsuario") == null ||
        localStorage.getItem("emailUsuario") == '' || localStorage.getItem("emailUsuario") == null) { 
        modificarDatos();
    }
    else {
        $("#nombreUsuario").val(localStorage.getItem("nombreUsuario"));
        $("#apellidoUsuario").val(localStorage.getItem("apellidoUsuario"));
        $("#telefonoUsuario").val(localStorage.getItem("telefonoUsuario"));
        $("#domicilioUsuario").val(localStorage.getItem("domicilioUsuario"));
        $("#emailUsuario").val(localStorage.getItem("emailUsuario"));
    }
}

//saca el disabled a los inputs del modal usuario para poder ingresar nuevos datos
function modificarDatos (){
    $("#nombreUsuario").prop("disabled", false);
    $("#apellidoUsuario").prop("disabled", false);
    $("#telefonoUsuario").prop("disabled", false);
    $("#domicilioUsuario").prop("disabled", false);
    $("#emailUsuario").prop("disabled", false);
}

//cargar datos al modal usuario
function cargarDatos () {
    let nombreUsuario = $("#nombreUsuario").val();
    let apellidoUsuario = $("#apellidoUsuario").val();
    let telefonoUsuario = $("#telefonoUsuario").val();
    let domicilioUsuario = $("#domicilioUsuario").val();
    let emailUsuario = $("#emailUsuario").val();
    localStorage.setItem("nombreUsuario", nombreUsuario);
    localStorage.setItem("apellidoUsuario", apellidoUsuario);
    localStorage.setItem("telefonoUsuario", telefonoUsuario);
    localStorage.setItem("domicilioUsuario", domicilioUsuario);
    localStorage.setItem("emailUsuario", emailUsuario);
    $("#nombreUsuario").prop("disabled", true);
    $("#apellidoUsuario").prop("disabled", true);
    $("#telefonoUsuario").prop("disabled", true);
    $("#domicilioUsuario").prop("disabled", true);
    $("#emailUsuario").prop("disabled", true);
}

//borrar datos de usuario
function borrarDatos () {
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("apellidoUsuario");
    localStorage.removeItem("telefonoUsuario");
    localStorage.removeItem("domicilioUsuario");
    localStorage.removeItem("emailUsuario");
    $("#nombreUsuario").val("");
    $("#apellidoUsuario").val("");
    $("#telefonoUsuario").val("");
    $("#domicilioUsuario").val("");
    $("#emailUsuario").val("");
}

//cierra el modal de usuario
function cerrar () {
    let modalUsuario = $("#modalUsuario");
    $(modalUsuario).removeClass("is-active is-clipped");
}