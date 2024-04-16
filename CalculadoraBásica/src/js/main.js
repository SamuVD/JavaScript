//Variables de los dos Números

let number1 = parseFloat (prompt ("Dame el valor del primer número: "))
let number2 = parseFloat (prompt ("Dame el valor del segundo número: "))

//Variables de las operaciones

const sum = number1 + number2
console.log (`El resultado de tu suma es: ${sum}`)

const rest = number1 - number2
console.error (`El total que da su resta es: ${rest}`)

const mult = number1 * number2
console.warn (`Su multiplicación da un valor de: ${mult}`)

const split = number1 / number2
console.info (`El resultado de su división fue: ${split}`)