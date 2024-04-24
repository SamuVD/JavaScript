//Un Array es una lista de datos, donde podemos meter cualquier tipo de dato.
console.groupCollapsed("Create")

const arraySimple = [
    1,
    "alfa",
    true,
    [2, 3, 5, 6],
    {
        name: "javier",
        lastName: "combita"
    },
    false
]

const arraySimple2 = []
const arraySimple3 = Array("uno", "dos", "tres")
const arraySimple4 = new Array(3)

console.log(arraySimple)
console.log(arraySimple2)
console.log(arraySimple3)
console.log(arraySimple4)
console.log(Array.from(arraySimple[4].name))
console.log(arraySimple[4].name.split(""))

console.groupEnd()


console.groupCollapsed("Maneras de extraer datos de un Array")

//Maneras de extraer datos de un Array

const alphabet = ["a", "b", "c", "d", "e", "f", "g"]
console.log(alphabet[6])
console.log(alphabet[0])
console.log(alphabet.at(2))
console.log(alphabet.at(-2))

console.groupEnd()


console.groupCollapsed("Maneras de actualizar datos en un Array")

//Maneras de actualizar datos en un Array

alphabet[0] = "alpha"

console.log(alphabet)

console.groupEnd()


console.groupCollapsed("Maneras para agregar un dato al Array")

//Maneras para agregar un dato al Array

alphabet.push("h")
alphabet.push("i") //Nos agrega el elemento al final
alphabet.push("j")

alphabet.unshift(1)
alphabet.unshift(2) //Nos agrega el elemento al comienzo
alphabet.unshift(3)

console.log(alphabet)

console.groupEnd()


console.groupCollapsed("Maneras para eliminar un dato del Array")

//Maneras para eliminar un dato del Array

alphabet.pop()
alphabet.pop() //ELimina desde el final
alphabet.pop()
alphabet.pop()
const letraEliminada = alphabet.pop() //Me retorna el dato eliminado si lo quiero devuelta


alphabet.shift() //Elimina desde el comienzo
const numeroEliminado = alphabet.shift() //Me retorna el dato eliminado si lo quiero devuelta


delete alphabet[2] //Me elimina por completo el elemento, pero me deja el espacio del elemento eliminado

console.log(letraEliminada)
console.log(numeroEliminado)
console.log(alphabet)

console.groupEnd()


console.groupCollapsed("Maneras de verificar si un dato se encuentra en el Array")

//Maneras de verificar si un dato se encuentra en el Array

console.log(alphabet.indexOf("f")) //Me trae la posición en la que se encuentra el elemento
console.log(alphabet.includes("g")) //Me verifica si el elemento se encuentra o no, dándome un true or false

console.groupEnd()


console.groupCollapsed("Maneras de unir Arrays")

//Maneras de unir Arrays

const clanGates = ["david", "luisa", "simon"]
const clanGosling = ["mariana", "kevin", "david"]

console.log(clanGates)
console.log(clanGosling)
let clanUnido = clanGates.concat(clanGosling) //Me junta los Arrays

console.log(clanUnido)


const arrayUnido = clanGates.join("->") //Me une los Arrays por medio de símbolos
console.log(arrayUnido)

console.log(arrayUnido.split("->")) //Me desestructura lo que ubique dentro de los ("")  

console.groupEnd()


console.groupCollapsed("Ejercicio de unir y destructurar")

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayNumbers)

let unionNumbers = arrayNumbers.join("--")
console.log(unionNumbers)

//Resultado 1 para desestructurar
console.log(unionNumbers.split("--")) //Para eliminar las uniones, pero me retorna el array como string
console.log(Array.from(arrayNumbers)) //Para convertir los elementos a un Array

//Resultado 2 para desestructurar
console.log(unionNumbers.map(numero => parseInt(numero)))

console.groupEnd()