//Número secreto
const secretNum = Math.floor(Math.random()*10)

//El usuario ingresa el número que cree que es
let guess = parseInt(prompt("Adivina el número: "))

if (secretNum > guess) {
    console.warn("El número secreto es mayor al que ingresaste :(")
}   else if (secretNum < guess) {
    console.info("El número que ingresaste es mayor al secreto :((")
}   else {
    console.log("LOGRASTE ADIVINAR :))")
}