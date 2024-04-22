// Ejercicio 1
console.group("Ejercicio 1");

let num1 = 29;

if (Math.sign(num1) == 1) {
  console.log(`El número ${num1}, es positivo`);
} else {
  console.log(`El número ${num1}, es negativo`);
}

console.groupEnd();

// Ejercicio 2
console.group("Ejercicio 2");

if (Math.sign(num1) == -1) {
  console.log(`El número ${num1}, es negativo`);
} else {
  console.log(`El número ${num1}, es positivo`);
}

console.groupEnd();

// Ejercicio 3
console.group("Ejercicio 3");

num1 = 10;

if (num1 % 2 == 0) {
  console.log("Es un número par");
} else {
  console.log("Es un número impar");
}

console.groupEnd();

// Ejercicio 4
console.group("Ejercicio 4");

num1 = 29;

if (num1 % 2 != 0) {
  console.log("Es un número impar");
} else {
  console.log("Es un número par");
}

console.groupEnd();

// Ejercicio 5
console.group("Ejercicio 5");

let num3 = 20;

if (num3 > 0 && num3 % 5 == 0) {
  console.log(`Este ${num3} multiplo de 5`);
} else {
  console.log(`Este ${num3} es multiplo de 5`);
}

console.groupEnd();

// Ejercicio 6
console.group("Ejercicio 6");

let num4 = 33;

if (num4 % 3 == 0) {
  console.log(`El numero ${num4}, si es divisible entre 3`);
} else {
  console.log(`El numero ${num4}, no es divisible entre 3`);
}

console.groupEnd();

// Ejercicio 7
console.group("Ejercicio 7");

let num5 = 100;

if (num4 > 100) {
  console.log(`El numero ${num5},si es mayor que 100`);
} else {
  console.log(`El numero ${num4}, no es dmayor que 100`);
}

console.groupEnd();

// Ejercicio 8
console.group("Ejercicio 8");

let num6 = -51;

if (num6 < -50) {
  console.log(`El numero ${num6},es menor que -50`);
} else {
  console.log(`El numero ${num4},es mayor que -50`);
}

console.groupEnd();

// Ejercicio 9
console.group("Ejercicio 9");

let num7 = 30;

if (num7 > 20 && num7 < 50) {
  console.log(`El numero ${num6},esta en el rango indicado`);
} else {
  console.log(`El numero ${num4},no esta en el rango indicado`);
}

console.groupEnd();

// Ejercicio 10
console.group("Ejercicio 10");

let num8 = 15;

if (num8 == 0) {
  console.log(`El numero ${num6},es igual a 0`);
} else {
  console.log(`El numero ${num4},no es igual a 0`);
}

console.groupEnd();

// Ejercicio 11
console.group("Ejercicio 11");

let num9 = 15;

if (num9 > -10 && num9 < 10) {
  console.log(`El numero ${num6},esta en el rango indicado`);
} else {
  console.log(`El numero ${num4},no esta en el rango indicado`);
}

console.groupEnd();

// Ejercicio 12
console.group("Ejercicio 12");

let numeroB = 2024;

function esBisiesto(numeroB) {
  if ((numeroB % 4 == 0 && numeroB % 100 !== 0) || numeroB % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

if (esBisiesto(numeroB)) {
  console.log(`El numero: ${numeroB} es un año bisiesto`);
} else {
  console.log(`El numero: ${numeroB} no es un año bisiesto`);
}

console.groupEnd();

// Ejercicio 13
console.group("Ejercicio 13");

let edad = 12;

if (edad >= 18) {
  console.log(`Si eres mayor de edad`);
} else {
  console.log(`No eres mayor de edad`);
}

console.groupEnd();

// Ejercicio 14
console.group("Ejercicio 14");

console.groupEnd();

// Ejercicio 15
console.group("Ejercicio 15");

let numCuadrado = 25;
let raiz = Math.sqrt(numCuadrado);

if (raiz === Math.floor(raiz)) {
  console.log(`${numCuadrado}, Si es un cuadrado perfecto.`);
} else {
  console.log(`${numCuadrado}, No es un cuadrado perfecto.`);
}

console.groupEnd();

// Ejercicio 16
console.group("Ejercicio 16");

console.groupEnd();

// Ejercicio 17
console.group("Ejercicio 17");

function esPotenciaDeDos(numero) {
  return Number.isInteger(Math.log2(numero));
}

console.log(esPotenciaDeDos(4));
console.log(esPotenciaDeDos(5));
console.groupEnd();

// Ejercicio 18
console.group("Ejercicio 18");

function esPalindromo(numero) {
  const numeroString = String(numero);
  const numeroRevertido = numeroString.split("").reverse().join("");
  return numeroString === numeroRevertido;
}

console.log(esPalindromo(12321));
console.log(esPalindromo(12345));
console.groupEnd();

// Ejercicio 19
console.group("Ejercicio 19");

let cadenaIncluye = "aprendiendo JavaScript";

if (cadenaIncluye.includes("JavaScript")) {
  console.log("Si incluye la palabra JavaScript");
} else {
  console.log("No incluye la palabra JavaScript");
}

console.groupEnd();

// Ejercicio 20
console.group("Ejercicio 20");

let cadenaTexto = "esto es un texto";

if (cadenaTexto.length > 10) {
  console.log("La cadena tiene más de 10 caracteres");
} else {
  console.log("La cadena no tiene más de 10 caracteres");
}

console.groupEnd();

// Ejercicio 21
console.group("Ejercicio 21");

let cadenaTexto2 = "ESTO es una cadena";

if (cadenaTexto2 === cadenaTexto2.toLocaleLowerCase()) {
  console.info("la cadena esta en minuscula");
} else {
  console.info("la cadena no esta en minuscula");
}

console.groupEnd();