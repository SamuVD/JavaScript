// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let array2 = array1.reverse(function (item) {
//     return item
// })

// console.log(array1)
// console.log(array2)


// //Lista en español con .reverse y .toReversed y uPPerCase
// let frutas = ["manzana", "pera", "banano", "uva", "mango"]
// let reversedFruits = frutas.toReversed()

// let mayusFruits = frutas.map((fruta) => console.log(fruta.toUpperCase()))

// console.log(reversedFruits)
// console.log(frutas)
// console.log(mayusFruits)



//Método foreach
/*
El foreach me recorre el valor y el índice
El for of los valores 
El for in los índices
El for me recorre todo también
*/
console.groupCollapsed("Método para recorrer una lista")

let listCoders = ["maria", "pablo", "lucas"]

//                       elemento, índice     
listCoders.forEach(function (coder, index) {
    console.log("El coder", coder, "está en la posición", index)
})

console.groupEnd()



//Método every

console.groupCollapsed("Método every")

// let numbers = [55, 44, 23, 88, 90, 111, 54, 77, 82, 28]

// let answer = numbers.every(numero => numero > 0)

// console.log(answer)


let numbers = [55, 44, 23, 88, 90, 111, 54, 77, 82, 28]

let numerosPares = numbers.every((num) => num % 2 === 0)
console.log(numerosPares)

console.groupEnd()



//Método some

// console.groupCollapsed("Método some")

// let usuarioLista=["hernan", "albeiro","patricia"]
// let usuario= prompt("Ingrese el nombre de usuario: ")

// let usuarioGuardado= usuarioLista.some(nombre => nombre === usuario)

// console.log(usuarioGuardado)

// console.groupEnd()



//Método filter

console.groupCollapsed("Método filter")

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numPares = arregloNumeros.filter(pares => pares % 2 == 0)

let numImpares = arregloNumeros.filter(impares => impares % 2 != 0)

console.log(numPares)
console.log(numImpares)

console.groupEnd()