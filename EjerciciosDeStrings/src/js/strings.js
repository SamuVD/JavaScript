// Ejercicio 1
console.group("Ejercicio 1");

let num1 = 20;
let num2 = 10;

console.log(num1 + num2);
console.groupEnd();

// Ejercicio 2
console.group("Ejercicio 2");

let simpleString1 = "Hola";
let simpleString2 = "Mundo";

console.log(`${simpleString1.length}, ${simpleString2.length}`);
console.groupEnd();

// Ejercicio 3
console.group("Ejercicio 3");

let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");

console.log(stringUsingString1, stringUsingString2);
console.groupEnd();

// Ejercicio 4
console.group("Ejercicio 4");

let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");

console.log(stringUsingNewString1, stringUsingNewString2);
console.groupEnd();

// Ejercicio 5
console.group("Ejercicio 5");

console.log(simpleString1.substring(2));
console.groupEnd();

// Ejercicio 6
console.group("Ejercicio 6");

console.log(simpleString2.includes("ndo"));
console.groupEnd();

// Ejercicio 7
console.group("Ejercicio 7");

console.log(simpleString1.concat(simpleString2));
console.groupEnd();

// Ejercicio 8
console.group("Ejercicio 8");

console.log(simpleString1 + simpleString2);
console.groupEnd();

// Ejercicio 9
console.group("Ejercicio 9");

console.log(`${simpleString1}, ${simpleString2}`);
console.groupEnd();

// Ejercicio 10
console.group("Ejercicio 10");

let stringWithSpaces1 = "      TrimStart";
let stringWithSpaces2 = "TrimEnd          ";

console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());
console.groupEnd();

// Ejercicio 11
console.group("Ejercicio 11");

console.log(simpleString1.replace("o", "i"));
console.groupEnd();

// Ejercicio 12
console.group("Ejercicio 12");

console.log(simpleString2.slice(0, 3));
console.groupEnd();

// Ejercicio 13
console.group("Ejercicio 13");

console.log(simpleString2.substring(2));
console.groupEnd();

// Ejercicio 14
console.group("Ejercicio 14");

console.log(simpleString1.repeat("2"));
console.groupEnd();

// Ejercicio 15
console.group("Ejercicio 15");

let texto = "Esto es una oración de ejemplo";

console.log(texto.split(""));
console.groupEnd();

// Ejercicio 16
console.group("Ejercicio 16");

console.log(simpleString2.toUpperCase());
console.groupEnd();

// Ejercicio 17
console.group("Ejercicio 17");

console.log(simpleString1.toLowerCase());
console.groupEnd();

// Ejercicio 18
console.group("Ejercicio 18");

let valorLogico = true;

console.log(typeof valorLogico);
console.groupEnd();

// Ejercicio 19
console.group("Ejercicio 19");

let arreglo = ["arreglo", "array", "elementos"];

console.log(arreglo.length);
console.groupEnd();

// Ejercicio 20
console.group("Ejercicio 20");

let objeto = { nombre: "Samuel", apellido: "Villarreal", edad: "18" };

console.log(objeto.nombre);
console.groupEnd();

// Ejercicio 21
console.group("Ejercicio 21");

let nulo = null;

console.log(typeof nulo);
console.groupEnd();

// Ejercicio 22
console.group("Ejercicio 22");

let indefinido;

console.log(typeof indefinido);
console.groupEnd();
