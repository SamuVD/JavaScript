// Conversión de números
// let myFirstNumber = 2
// let mySecondNumber = "2"
// document.write(myFirstNumber)

// console.info(myFirstNumber * mySecondNumber)
// console.info(myFirstNumber - mySecondNumber)
// console.info(myFirstNumber / mySecondNumber)
// console.info(myFirstNumber + mySecondNumber)



// let myFirstNumber = 5
// Para proyectar nuestras salidas de consola en la página html
// document.write(myFirstNumber)

// Nos ayuda a saber que tipo de dato es
// console.info(typeof(myFirstNumber))
// Nos ayuda a saber que tipo de dato es
// console.info(Number.isInteger(myFirstNumber))



// Podemos separar los números con muchos dígitos con (_) y no nos va afectar en el resultado o en la muestra de consola.
// const number1 = 50_000_000_000_000 
// const number2 = 50_000_000_000_000
// const number3 = 45

// console.log(number1 + number2)
// console.log(number1 - number2)
// console.log(number1 * number2)
// console.log(number1 / number2)
// Con estas propiedades podemos saber si un número es finito.
// console.log(Number.isFinite(number3))
// Con estas propiedades traemos el número más grande de Js y el más pequeño.
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// Para traer el número PI
// console.log(Math.PI)



// const exampleNumber = 30

// console.log(exampleNumber)
// Me convierte el número a una potencia
// console.log((exampleNumber).toExponential())
// Me convierte al número en un binario
// console.log(exampleNumber.toString(2))
// Me convierte al número en un Octal
// console.log(exampleNumber.toString(8))
// Me convierte al número en un hexadecimal
// console.log(exampleNumber.toString(16))



// const example = 5.12
// document.write(example)

// Fuerza la cantidad de decimales que quiero sacar de un número
// console.log(example.toFixed())
// console.log(example.toFixed(1))
// console.log(example.toFixed(2))
// console.log(example.toFixed(3))
// console.log(example.toFixed(4))
// console.log(example.toFixed(5))



// const numberForRoundUp = 3.99999999
// document.write(numberForRoundUp)

// Redondea nuestro decimal con su propia lógica
// console.log(Math.round(numberForRoundUp))
// Redondea el decimal al inferior
// console.log(Math.floor(numberForRoundUp))
// Redondea el decimal al superior
// console.log(Math.ceil(numberForRoundUp))
// Simplemente omite los decimales y lo convierte a su inferior
// console.log(Math.trunc(numberForRoundUp))
// Lo convierte a un entero
// console.log(Number.parseInt(numberForRoundUp))



// Opción 1 para generar un número aleatorio
// const numberAleatory = Math.trunc(Math.random() * 100)
// document.write(numberAleatory)

// Opción 2
// (ValorSuperior - ValorInferior + 1) + ValorInferior
// const aleatoryNumberWithRange = parseInt(Math.random() * (100-50+1)+50)
// document.write(aleatoryNumberWithRange)



//#####################################
 //CLASE MATH Y SUS METODOS MAS USADOS
//##################################### 

// console.log(Math.abs(-50))//Transforma a positivo (es la distancia entre el cero y el valor que pongamos)
// console.log(Math.pow(2,5))//Potencia "(base,exponente")" 
// console.log(Math.sqrt(17))//Raiz cuadrada "(numero)"
// console.log(Math.cbrt(17))//Raiz cubica "(numero)"

// console.log(Math.sign(12))//Validacion si un numero es negatio o positivo ( 1 (Positivo))
// console.log(Math.sign(0))//Validacion si un numero es negatio o positivo ( 0 (Neutro))
// console.log(Math.sign(-12))//Validacion si un numero es negatio o positivo (-1 (Negativo))



// listNumbers = [1,5,3,9]

// Organiza los elementos de la lista de menor a mayor
// console.log(listNumbers.sort())
// Me muestra el número mayor que se encuentra en la lista
// console.log(Math.max(1,5,3,9))
// Me muestra el número menor que se encuentra en la lista
// console.log(Math.min(1,5,3,9))
// Para sacar la raíz cuadrada
// Math.sqrt(45)
//Math.pow(xx, xx) podemos exponenciar al número que queramos, siempre que llenemos los dos parámetros