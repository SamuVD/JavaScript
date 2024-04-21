//Variables de las materias a evaluar
const spanish = parseFloat(prompt("Escriba la nota para Español: "));
const english = parseFloat(prompt("Escriba la nota para Inglés: "));
const arts = parseFloat(prompt("Escriba la nota para Artes: "));
const deports = parseFloat(prompt("Escriba la nota para Deportes: "));
const sciences = parseFloat(prompt("Escriba la nota para Ciencias: "));

let ratings = [];
ratings.push("Español: " + " " + spanish);
ratings.push("Inglés: " + " " + english);
ratings.push("Artes: " + " " + arts);
ratings.push("Deportes: " + " " + deports);
ratings.push("Ciencias: " + " " + sciences);

console.table(ratings);

//Variable que opera
let media = (spanish + english + arts + deports + sciences) / 5;
console.warn(`Su promedio es de: ${media}`);

//Condicionales
if (media >= 3.0) {
  console.info("Aprobó el curso.");
} else {
  console.error("Reprobó el curso.");
}
