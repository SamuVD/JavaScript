let isDate = new Date();

console.log(isDate);

let isDate2 = new Date("12/29/2005"); //mm/dd/yyyy - yyyy/mm/dd

console.log(isDate2);

//Método get

console.groupCollapsed("Método get");

let dia = isDate.getDate(); //Día entre 1-31
console.log(dia);

let mes = isDate.getMonth() + 1; //Mes entre 0-11
console.log(mes);

let dayWeek = isDate.getDay(); //Día de la semana entre 0-6
console.log(dayWeek);

let year = isDate.getFullYear(); //Year current
console.log(year);

let hour = isDate.getHours(); //Hora militar
console.log(hour);

let minute = isDate.getMinutes(); //Minuto entre 0-59t
console.log(minute);

let seg = isDate.getSeconds(); //Segundos entre 0-59
console.log(seg);

let milli = isDate.getMilliseconds(); //Milisegundos entre 0-999
console.log(milli);

console.groupEnd();

//Método set

console.groupCollapsed("Método toString");

console.log(isDate);
console.log(isDate.toDateString());
console.log(isDate.toLocaleDateString());
console.log(isDate.toISOString());
console.log(isDate.toJSON());
console.log(isDate.toString());

console.groupEnd();

//Ejercicio con el Date y un switch

console.groupCollapsed("Ejercicio con el Date y un switch");

let inputDate = prompt("Ingrese una fecha"); //La (,) en un prompt me separa el 'texto' de lo que va a aparecer en el 'input'
let theDate = new Date(inputDate);
console.log(theDate);

switch (diaSemana) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miércoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sábado");
    break;
  case 0:
    alert("Domingo");
    break;
  default:
    console.log("el valor ingresado es invalido");
    break;
}

let diaSemana = theDate.getDay();
console.log(diaSemana);

console.groupEnd();
