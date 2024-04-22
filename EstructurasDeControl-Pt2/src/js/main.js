const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
];

// for - Simple
console.groupCollapsed("for - Simple")

// for (let i = 0; i < listFruits.length; i++) {
//     console.info(listFruits[i])
// }

console.groupEnd()



console.groupCollapsed("foreach - More Simple")
// foreach - More Simple
// listFruits.forEach(Element =>{
//     console.info(Element)
// })

console.groupEnd()

//Empleados 
console.groupCollapsed("Lista de Empleados")

// let listEmpleados = [
//     "maría garcía",
//     "juan quintero",
//     "samuel villarreal",
//     "melody rubio",
//     "sofia sanchez",
//     "leidy corrales",
//     "alejandro castrillon",
//     "joan zapata",
//     "paty duque",
//     "sonia esmeralda"
// ]

// for (let i = 0; i < listEmpleados.length; i++) {
//     console.log(listEmpleados[i])
// }

// let separador = "<--------------------------------------------------->"
// console.log(separador)

// listEmpleados.forEach(element => {
//     let name=element.split(" ")
//     let firstLetterName=name[0].charAt(0).toUpperCase()
//     let firstLetterLastName=name[1].charAt(0).toUpperCase()
//     console.log(firstLetterName, firstLetterLastName)
//     let concatName=firstLetterName.concat("", name[1])
//     console.log(concatName,firstLetterName.toUpperCase(0))
// });

console.groupEnd()



//foreach with objects
console.groupCollapsed("foreach with objects")

// const coderRiwi = {
//     name: "Javier",
//     lastName: "Combita Tellez",
//     height: 180,
//     weight: 76,
//     gender: "male",
//     birthDate: Date("1998/04/23"),
//     id: "1096247488",
//     country: "Colombia",
//     email: "javier.combita@riwi.io"
// }

// console.table(coderRiwi)
// console.info(coderRiwi.lastName)

// console.info(Object.keys(coderRiwi))
// console.info(Object.values(coderRiwi))

// Object.keys(coderRiwi).forEach(key => {
//     console.info(coderRiwi[key])
// });

// for (const key in coderRiwi){
//     console.info(coderRiwi[key])
// }

// console.log(Object.entries(coderRiwi))

// listaEmpleados = [
//     {
//         nombre: "Juan Pérez",
//         edad: 30,
//         puesto: "Desarrollador de Software",
//         salario: 50000
//     },
//     {
//         nombre: "María García",
//         edad: 28,
//         puesto: "Diseñadora Gráfica",
//         salario: 45000
//     },
//     {
//         nombre: "Luis Ramírez",
//         edad: 35,
//         puesto: "Gerente de Proyectos",
//         salario: 60000
//     },
//     {
//         nombre: "Ana Martínez",
//         edad: 32,
//         puesto: "Analista de Negocios",
//         salario: 55000
//     }
// ]

// listaEmpleados.forEach(empleado => {
//     console.log(empleado.nombre)
// });

// for (const key in listFruits){
//     console.log(key)
// }

// for (const values of listFruits){
//     console.log(values)
// }

console.groupEnd()




// map
// console.groupCollapsed("map")

// const listNumbers = [2, 5, 78, 4, 9]
// const numMultiplicado = []

// listNumbers.forEach(number => {
//                       2 X 2 = 4
//     console.log(`${number} X 2 = ${number * 2}`)
//     numMultiplicado.push(number * 2)
// });

// const numMultiplicadoV2 = listNumbers.map(number => {
//     console.log(`${number} X 2 = ${number * 2}`)
//     return number * 2
// })

// console.groupEnd()




//numeros del 1 al 100 con map
console.groupCollapsed("lista con map")

// let numeros= []
// let numerosPares=[]

// for (let i= 1; i <101; i++){
//     console.log(i)
//     numeros.push(i)
// }

// console.log(numeros)

// numeros.map(numero => {
//     if (numero% 2===0){
//         numerosPares.push(numero)
//     }
// })

// console.log(numerosPares)

// const parNum=numeros.filter(numero =>{
//     if (numero%2===0){
//         return numero
//     }
// })

// console.log(parNum)
console.groupEnd()