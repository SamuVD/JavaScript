/*
La diferencia entre una funcion declarativa y una expresiva es que la declarativa me permite llamar la funcion antes de ejecutarla o después.
Y la expresiva no la puedo llamar antes de ejecutarla, sólo después de ejecutarla.
*/

//Función Declarativa

console.groupCollapsed("Función Declarativa");

saludarCoders("Coders", "clan");

function saludarCoders(coders, clan) {
  console.log(
    "Hola " + coders + " del " + clan + " Gates, es un gusto saludarlos"
  );
  console.info("Hoy es un nuevo dia");
  console.log("");
  despedirCoders(coders, clan);
}

function despedirCoders(coders, clan) {
  console.log("Adiós " + coders + " del " + clan + " gonorreotas");
}

console.groupEnd();

//Función Expresiva

console.groupCollapsed("Función Expresiva");

const mostrarUnHolaMundoEx = function () {
  console.log("Hola mundo");
};

mostrarUnHolaMundoEx();

console.groupEnd();

function sumarDosNumeros(numero1, numero2) {
  let respuesta = numero1 + numero2;

  return respuesta;
}

let primeraSuma = sumarDosNumeros(10, 20);

console.log(primeraSuma);
