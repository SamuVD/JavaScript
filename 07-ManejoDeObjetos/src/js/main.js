//Los objetos pueden ser de cualquier tipo. Pueden contener más objetos, funciones, etc.
//Para añadir una nueva propiedad al objeto.
// personalbar.ocupacion= 'programador'


console.groupCollapsed("Programing without objects")

// const fullName="Samuel Villarreal Duque"
// const email="javier.combita@riwi.io"

// function saludar(params) {
//     console.log(`hola mundo soy ${fullName} y este es mi correo ${email}`)
// }

// console.log(fullName)
// console.log(email)
// saludar()

console.groupEnd()


const coderRiwi = {
    name: "Samuel",
    lastName: "Villarreal Duque",
    birthDate: new Date("12/29/2005"),
    rh: "O+",
    location: {
        country: "Colombia",
        state: "Cundinamarca",
        city: "Envigado",
        neighborhood: "Las Cometas",
        address: "AV # 21 - 14",
        postalCode: "45541"
    },
    phone: "3123123123",
    skills: ["Python", "Html", "CSS", "JavaScript"],
    email: "javier.combita@riwi.io",
    saludar: function () {
        console.log(`Hola mundo soy ${this.name} ${this.lastName} y este es mi correo ${this.email}`)
    }
}
 
// Extract information to an object
console.groupCollapsed("Extract information from an object")

// console.log(coderRiwi.name)
// console.log(coderRiwi['name'])
// console.log(coderRiwi.location.address)
// console.log(coderRiwi['location']['address'])
// console.log(coderRiwi.skills[2])

console.groupEnd()


//Add information to an object
console.groupCollapsed("Add information to an object")

// console.log = ("Adding information")
// coderRiwi["typeDocument"] = "Cedula de ciudadania"
// coderRiwi.identificationNumber = "1038867696"
// coderRiwi.name = "Samu"
// coderRiwi.lastName = "Villa"
// coderRiwi.clan = "Gates"

// Object.defineProperty(coderRiwi, "clan", {
//     value: "Linux", 
//     writable:false, //Permite modificar la propiedad
//     enumerable:true, //Permite que la propiedad aparezca
//     configurable: true //Permite que la propiedad sea eliminada
// })

// Object.defineProperty(coderRiwi, "emergencyContact",{
//     value: {
//         contactName: "Sam Villa",
//         phoneNumber: "3545454255",
//         optionalPhoneNumber: "3523453223"
//     }
// })
// console.log(coderRiwi)

console.groupEnd()


//Sum objects
console.groupCollapsed("Sum objects")

// const obj1 = {
//     a: "uno",
// }
// const obj2 = {
//     b: "dos",
// }
// const obj3 = {
//     a: "uno",
// }
// const obj4 = {
//     b: "dos",
// }

// const sumaObjetos = Object.assign(obj1, obj2) //No es recomendada para sumar objetos

// console.log(obj1, obj2)
// console.log(obj2, obj1)
// console.log("Suma", sumaObjetos)

// console.error("/////////////////////////")

// const sumaObjetos2= {...obj3, ...obj4} //Para sumar varios objetos

// console.log(obj3, obj3)
// console.log(obj4, obj4)
// console.log("Suma", sumaObjetos2)

console.groupEnd()


//Deestructuring objects
console.groupCollapsed("Deestructuring objects")

const objectExampleOne = {
    userName: "Jhon Perez",
    userEmail: "jhon.perez@gmail.com",
    userPassword: "Jhonperez1234$",
}

//Forma manual
// let userName = objectExampleOne.userName
// let userEmail = objectExampleOne.userEmail
// let userPassword = objectExampleOne.userPassword

let { userName, userEmail, userPassword } = objectExampleOne

console.log(userName)
console.log(userEmail)
console.log(userPassword)

//Sacar información con nombre diferente
let { userName: user,
    userEmail: emailExtraido,
    userPassword: password
} = objectExampleOne

console.log(user)
console.log(emailExtraido)
console.log(password)

//Destructuración anidada
const coderRiwiDeestructuracion = {
    name: "Samuel", //#
    lastName: "Villarreal Duque", //#
    birthDate: new Date("12/29/2005"),
    rh: "O+",
    location: {
        country: "Colombia",
        state: "Cundinamarca",
        city: "Envigado",
        neighborhood: "Las Cometas",
        address: "AV # 21 - 14", //#
        postalCode: "45541"
    },
    phone: "3123123123",
    skills: ["Python", "Html", "CSS", "JavaScript"],
    email: "javier.combita@riwi.io", //#
    saludar: function () {
        console.log(`Hola mundo soy ${this.name} ${this.lastName} y este es mi correo ${this.email}`)
    }
}

let { 
    name: nameCoder, 
    lastName, 
    location: {
        address
    }, 
    email: emailCoder 
} = coderRiwiDeestructuracion

console.log("Nombre =",nameCoder)
console.log("Apellido =",lastName)
console.log("Dirección =",address)
console.log("Correo =",emailCoder)


console.groupEnd()