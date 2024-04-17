//Declaración de Strings
// let comillaSimple = 'Hola mundo'
// let comillasDobles = "Hola mundo"
// console.info (comillaSimple)



//Acá vimos como contar los caracteres
//const fullName = "Hola mi nombre es Samuel Villarreal Duque"
// const cantidadDeCaracteres = fullName.length
// console.info (cantidadDeCaracteres)



//Extraccion de caracteres
// let extraccionDeLetraC = fullName[8]
// let extraccionDeLetraCV2 = fullName.charAt (22)
// console.info(extraccionDeLetraCV2)

// console.info (fullName [19])
// console.info (fullName [20])
// console.info (fullName [21])
// console.info (fullName [22])
// console.info (fullName [23])
// console.info (fullName [24])



// let nombre = "Samuel"
// let lastName = "Villarreal"
// let correo = "samskd@gmail.com"

// const header = `
// <header>

//         <h1>Hola mundo</h1>
//         <p>Hola mundo, mi nombre es Samuel Villarreal y mi correo es ssss@gmail.com</p>

// </header>
// `
// document.write (header)



// let userName = prompt("Enter your user name:")
// let lastName = prompt("Enter your last name:")
// const age = prompt("Enter your age:")
// const email = prompt("Enter your email:")
// let address = prompt("Enter your address:")
// let phone = prompt("Enter your phone:")

// const main = `
// <main>

//     <h1>Mi nombre es ${userName} y tengo ${age}</h1>
//     <p>Mi apellido es ${lastName}, mi correo es ${email}, mi dirección ${address} y mi número de celular es ${phone}

// </main>
// `

// document.write(main)



//Las tres formas de imprimir Strings
// console.info ("Hola mundo, mi nombre es "+nombre+" "+lastName+" y mi correo es "+correo+"")
// console.info ("Hola mundo, mi nombre es", nombre, lastName, "y mi correo es", correo)
// console.info (`Hola mundo, mi nombre es ${nombre} ${lastName} y mi correo es ${correo}`)



//TRANSFORMACIONES
// const mensaje = "HOLA MUNDO"
// const mensaje2 = "hoy es un nuevo día"
// document.write(mensaje)
// document.write(mensaje2)

// console.info(mensaje2.toUpperCase()) 
// console.info(mensaje.toLowerCase())
// console.info(mensaje.concat(mensaje2))



//Información de Strings
// const mensaje = "Samuel Villarreal Duque"
// document.write(mensaje)

// console.log(mensaje.startsWith("Sa"))
// console.log(mensaje.endsWith("Sa"))
// console.log(mensaje.includes("Sa"))



//Limpieza de Strings
// const mensaje = "     hola mundo   "
// document.write(mensaje)

// console.info(mensaje.trimStart())
// console.info(mensaje.trimEnd())
// console.info(mensaje.trim())



//Remplazo de caracteres
// const mensaje = "soy un coder de riwi, y en riwi soy feliz"
// document.write(mensaje)

// console.info(mensaje.replace("coder","programador"))
// console.info(mensaje.replaceAll("riwi","cine"))
// console.info(mensaje.replace(/[y]/g, "s"))
// console.info(mensaje.repeat("2"))



//Relleno de Strings
// const mensaje = "3000"
// document.write(mensaje)

// console.info(mensaje.padStart(20, "*"))
// console.info(mensaje.padEnd(20, "*"))



//Fragmentar un String
// const mensaje = "Ser un coder de riwi cambia tu mundo"
// document.write(mensaje)

// console.info(mensaje.substring(12)) //Extrae los caracteres
// console.info(mensaje.substring(0, 12)) //Extrae a partir de las posiciones de los dos parametros             
// console.info(mensaje.slice(12))
// console.info(mensaje.slice(0, 12))
// console.table(mensaje.split(",", 3))
// console.table(mensaje.split(""))
// console.table(mensaje.split(/[.,]/))



//Buscar Strings
// const mensaje = "nuestra familia es muy grande"
// document.write(mensaje)

// console.info(mensaje.search("riwi"))