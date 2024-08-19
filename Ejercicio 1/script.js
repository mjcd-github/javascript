let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();
    limpiarErrores();
    let textNombre = document.getElementById("nombre").value;
    let textAsunto = document.getElementById("asunto").value;
    let textMensaje = document.getElementById("mensaje").value;

    let resultado = validar(textNombre, textAsunto, textMensaje);
    if (resultado == true) {
        exito();
    }
})

function limpiarErrores() {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito!!!";
}   

function validar(nombre, asunto, mensaje) {

    let pasamosValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
        pasamosValidacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;

    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
        pasamosValidacion = false;
    }   
    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El texto es requerido";
        pasamosValidacion = false;
    }

    return pasamosValidacion;   

}