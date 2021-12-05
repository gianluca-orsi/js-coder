const URLCONSULTAS = "../js/consultas.json"

// con ajax podria hacer un formulario de consultas, cuando los datos estan bien se hace un popup afirmativo o negativo en caso de que falten datos
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

function cerrarC () {
    let modalConsulta = $("#modalConsulta");
    $(modalConsulta).removeClass("is-active is-clipped");
}

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
    /* $.post (URLCONSULTAS, infoJSON, function (respuesta, estado) {
        if (estado === "success") {
            $("#botonEnviarConsulta").append(
                `<div>
                    ${respuesta.userName}, tu consulta se ha enviado con exito.
                </div>`
            )
        }
    }, 'json') */
}