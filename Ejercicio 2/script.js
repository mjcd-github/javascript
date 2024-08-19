// Selecciona todos los elementos con la clase 'button'
//agrego los botones a un "array" NodeList
let boton = document.querySelectorAll("button");

// console.log(boton);
// Agrega un evento click a cada elemento
boton.forEach((button) => {
  //button es una referencia a uno de los elementos dentro del array
  // agregamos el avento click a cada elemento clickeado
  button.addEventListener("click", function () {
    // Obtiene la id del elemento clickeado
    let id = this.id;

    // obtengo el elemento por el id
    let elemento = document.getElementById(id);

    // obtengo el color de fondo del elemento llamado
    let fondo = window.getComputedStyle(elemento).backgroundColor;

    //cambio el color de fondo de caja por el color de fondo del elemento llamado
    document.getElementById("caja").style.background = fondo;
  });
});
