//agrego los botones a un "array" NodeList
let boton = document.querySelectorAll("button");

// Agrega un evento click a cada elemento
boton.forEach((button) => {
  //button es una referencia a uno de los elementos dentro del array
  button.addEventListener("click", function () {
    let id = this.id;
    if (id == "btn-sumar") {
      sumar();
    } else if (id == "btn-restar") {
      restar();
    }
  });
});

// Función con la operatoria sumar
function sumar() {
  let { num1, num2 } = valores(); //llamada de los valores 
  let resultado = num1 + num2;
  result(resultado); //
}

// Función con la operatoria sumar
function restar() {
  let { num1, num2 } = valores();
  let resultado = num1 - num2;
  if (resultado < 0) {
    resultado = 0;
  }
  result(resultado);
}

function valores() {
  let num1 = parseInt(document.getElementById("valor1").value);
  let num2 = parseInt(document.getElementById("valor2").value);
  return { num1, num2 };
}

function result(res) {
  document.querySelector(".resultado").innerHTML = res;
}
