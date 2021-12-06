const URLCONSULTAS = "../js/consultas.json"

//cuando se hace clic en el boton consulta aparece un modal y toma los datos de localstorage si es que ya existe un usuario
function iniciarConsulta() {
    let modalConsulta = $("#modalConsulta")
    $(modalConsulta).addClass("is-active is-clipped")
    if (localStorage.getItem("nombreUsuario") == '' || localStorage.getItem("nombreUsuario") == null ||
        localStorage.getItem("apellidoUsuario") == '' || localStorage.getItem("apellidoUsuario") == null ||
        localStorage.getItem("telefonoUsuario") == '' || localStorage.getItem("telefonoUsuario") == null ||
        localStorage.getItem("domicilioUsuario") == '' || localStorage.getItem("domicilioUsuario") == null ||
        localStorage.getItem("emailUsuario") == '' || localStorage.getItem("emailUsuario") == null)
        {
            $("#nombreUsuarioC").prop("disabled", false);
            $("#apellidoUsuarioC").prop("disabled", false);
            $("#telefonoUsuarioC").prop("disabled", false);
            $("#domicilioUsuarioC").prop("disabled", false);
            $("#emailUsuarioC").prop("disabled", false);
        }
    else {
        $("#nombreUsuarioC").val(localStorage.getItem("nombreUsuario"));
        $("#apellidoUsuarioC").val(localStorage.getItem("apellidoUsuario"));
        $("#telefonoUsuarioC").val(localStorage.getItem("telefonoUsuario"));
        $("#domicilioUsuarioC").val(localStorage.getItem("domicilioUsuario"));
        $("#emailUsuarioC").val(localStorage.getItem("emailUsuario"));
    }
}

//cerrar el modal
function cerrarC () {
    let modalConsulta = $("#modalConsulta");
    $(modalConsulta).removeClass("is-active is-clipped");
}

//para enviar la consulta
function enviarConsulta() {
    var INFOPOST = {
        userName: $("#nombreUsuarioC").val(), 
        userLastName: $("#apellidoUsuarioC").val(), 
        phone: $("#telefonoUsuarioC").val(), 
        address: $("#domicilioUsuarioC").val(), 
        email: $("#emailUsuarioC").val(),
        consulta: $("#consulta").val()
    }

    const infoJSON = JSON.stringify(INFOPOST);
    
    $.ajax({
        type: 'post',
        url: './consultas.json',
        data: infoJSON,
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: $("#paraAgregarRespuesta").append(
            `<div>
                Gracias, tu consulta se ha enviado con exito. Uno de nuestros representantes se comunicará dentro de las siguientes 48 horas hábiles para atender tu consulta.
            </div>`
        )
    })
}