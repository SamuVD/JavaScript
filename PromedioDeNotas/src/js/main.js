//Variables de las materias a evaluar

const spanish = parseFloat (prompt ("Escriba la nota para Español: "))
const english = parseFloat (prompt ("Escriba la nota para Inglés: "))
const arts = parseFloat (prompt ("Escriba la nota para Artes: "))
const deports = parseFloat (prompt ("Escriba la nota para Deportes: "))
const sciences = parseFloat (prompt ("Escriba la nota para Ciencias: "))
let notes = [spanish, english, arts, deports, sciences]

let media = (spanish + english + arts + deports + sciences) / 5
console.warn (`Su promedio es de: ${media}`)
// if media >=3.0 
// console.log (`Es aprobado ${media}`)
// else
// console.error (`Está reprobado ${media}`)